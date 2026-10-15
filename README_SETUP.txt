FLORA TOOLS TRELLO BRIDGE R02
==============================

PURPOSE
-------
One Trello Power-Up/app identity for:

UNITY / FLORA LIGHTING
  <challenge>_gamepreview.jpg

3DS MAX / FLORA TOOLS
  <challenge>_background.jpg
  <challenge>_spwnners.jpg

The actual file upload is done directly by Unity and 3ds Max through the Trello REST API.
This Power-Up provides the Trello app identity and Trello-side visibility.

R02 FEATURES
------------
- Board button: Flora Tools
- Dashboard popup
- Card badges when Flora attachments are present:
    Unity Preview
    3ds Max BG
    3ds Max Spawners
- Recognizes both _spwnners and _spawners spelling

HOSTING
-------
Host this folder on a public HTTPS static host such as:
- GitHub Pages
- Cloudflare Pages
- Netlify

Use:
https://YOUR-DOMAIN/index.html

as the Iframe Connector URL in Trello Apps Admin.

TRELLO AUTH
-----------
Use the same Trello API Key for Unity and 3ds Max.
Each tool also needs a Trello user Token with read/write access.

Never put the Token inside these public Power-Up files.

FLOW
----
Unity / 3ds Max
  -> challenge name
  -> normalize
  -> find open Trello card on configured Board
  -> open matched card for confirmation
  -> upload attachment

VERSION
-------
Flora Tools Trello Bridge R02
