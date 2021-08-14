// Player
require("./ui/auth/auth.js");
require("./ui/character/character.js");
require("./ui/charselection/charselection.js");
require("./ui/spawn/spawn.js");
require("./player/modules.js");
require("./player/screeneffects.js");
global.playerheading = require("./player/rotatorplayer.js");
require('./player/jobs/drugMission/drugMission.js')
require("./player/drug.js");
require('./player/keybinds.js')
mp.discord.update('Rostik-Rp', 'Гражданин');

// Admin
require("./admin/noclip.js");