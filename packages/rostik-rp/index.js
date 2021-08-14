// Admin
require('./admin/commands.js')

// Database
global.gm = {};
gm.mysql = require('./database/mysql.js');
gm.auth = require('./database/auth.js');
gm.mysql.connect(function() { });

// Jobs
require('./jobs/narkot.js')

mp.events.add("playerChat", (player, text) =>
{
	mp.players.broadcast(`${player.name}: ${text}`);
});

mp.events.add("console", (player, text) => {
	console.log(text);
});