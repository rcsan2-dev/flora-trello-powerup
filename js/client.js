/* Flora Tools Trello Bridge R02 */

(function () {
  'use strict';

  var ICON_DARK = './icon-white.png';
  var ICON_LIGHT = './icon-dark.png';

  function attachmentName(att) {
    if (!att) return '';
    return String(att.name || att.fileName || att.url || '').toLowerCase();
  }

  function countFloraMedia(attachments) {
    var result = { unity: 0, background: 0, spawners: 0, total: 0 };

    (attachments || []).forEach(function (att) {
      var name = attachmentName(att);

      if (name.indexOf('_gamepreview.jpg') !== -1 ||
          name.indexOf('_gamepreview.jpeg') !== -1 ||
          name.indexOf('_gamepreview.png') !== -1) {
        result.unity += 1;
        result.total += 1;
      } else if (name.indexOf('_background.jpg') !== -1 ||
                 name.indexOf('_background.jpeg') !== -1 ||
                 name.indexOf('_background.png') !== -1) {
        result.background += 1;
        result.total += 1;
      } else if (name.indexOf('_spwnners.jpg') !== -1 ||
                 name.indexOf('_spwnners.jpeg') !== -1 ||
                 name.indexOf('_spwnners.png') !== -1 ||
                 name.indexOf('_spawners.jpg') !== -1 ||
                 name.indexOf('_spawners.jpeg') !== -1 ||
                 name.indexOf('_spawners.png') !== -1) {
        result.spawners += 1;
        result.total += 1;
      }
    });

    return result;
  }

  window.TrelloPowerUp.initialize({
    'board-buttons': function (t) {
      return [{
        icon: { dark: ICON_DARK, light: ICON_LIGHT },
        text: 'Flora Tools',
        condition: 'edit',
        callback: function () {
          return t.popup({
            title: 'Flora Tools Trello Bridge',
            url: './dashboard.html',
            height: 360
          });
        }
      }];
    },

    'card-badges': function (t, opts) {
      var counts = countFloraMedia(opts && opts.attachments);
      if (counts.total === 0) return [];

      var badges = [];

      if (counts.unity > 0) {
        badges.push({
          text: 'Unity Preview' + (counts.unity > 1 ? ' ×' + counts.unity : ''),
          color: 'blue'
        });
      }

      if (counts.background > 0) {
        badges.push({
          text: '3ds Max BG' + (counts.background > 1 ? ' ×' + counts.background : ''),
          color: 'green'
        });
      }

      if (counts.spawners > 0) {
        badges.push({
          text: '3ds Max Spawners' + (counts.spawners > 1 ? ' ×' + counts.spawners : ''),
          color: 'yellow'
        });
      }

      return badges;
    },

    'on-enable': function (t) {
      return t.popup({
        title: 'Flora Tools Trello Bridge',
        url: './dashboard.html',
        height: 360
      });
    }
  });
}());
