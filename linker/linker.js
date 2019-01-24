function $(id)
{
	return document.getElementById(id);
}

function i18n_(s)
{
	if(typeof(g_messages) != "undefined")
	{
		try
		{
			return g_messages[s].message;
		}
		catch(err)
		{
			return s;
		}
	}
	else
	{
		try
		{
			var msg = chrome.i18n.getMessage(s);
		}
		catch(err)
		{			
			return s;
		}
		return (msg ? msg : s);
	}
}

function i18n(s)
{
	document.write(i18n_(s));
}

function is_in_chrome_ext()
{
	try
	{
		chrome.i18n.getMessage('ext_name');
	}
	catch(err)
	{
		return false;
	}
	return true;
}

function load_js_locale()
{
	if(!is_in_chrome_ext())
	{
		var l = navigator.language;
		if(l == undefined)
			l = navigator.userLanguage;
		if(l == undefined)
			l = 'en';
		l = l.replace(/-/g, "_");
		
		var lang = l.toLowerCase();
		if(!(lang == 'zh_cn' || lang == 'zh_tw' || lang == 'en'))
			l = 'en';
		var path = "js_locales/" + l + "/messages.js";
		document.write('<script src="' + path + '"><\/script>');
	}
}
load_js_locale();

var g_cfg = undefined;
try
{
	var str = localStorage["linker_game_cfg"];
	if(str)
		g_cfg = JSON.parse(str);
} catch(err){}
if(g_cfg == undefined)
	g_cfg = {}
if(g_cfg.cur_step == undefined)
    g_cfg.cur_step = 0;
if(g_cfg.cur_score == undefined)
	g_cfg.cur_score = 0;
if(g_cfg.high_scores == undefined)
	g_cfg.high_scores = [];
if(g_cfg.img_index == undefined)
	g_cfg.img_index = 0;

function set_config(cfg)
{
	g_cfg = cfg;
	try
	{
		localStorage["linker_game_cfg"] = JSON.stringify(g_cfg);
	}
	catch(err){}
}

function get_config()
{
	return g_cfg;
}
