var ext_base = 'share/';

function enc(s)
{
	return encodeURIComponent(s);
}

function post_sina(url,appkey,title,pic,ralateUid)
{
	window.open("http://service.t.sina.com.cn/share/share.php?url=" + enc(url) + "&appkey=" + enc(appkey) + "&title=" + enc(title) + "&pic=" + enc(pic) + "&ralateUid=" + enc(ralateUid), "_blank", "width=640,height=500");
}

function post_qq(url,appkey,title,pic,ralateUid)
{
	var _t = enc(title);
	var _url = enc(url);
	var _appkey = enc(appkey == '' ? 'appkey' : appkey);
	var _pic = enc(pic);
	var _site = enc(url);
	var _l = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t;
	window.open(_l, "_blank", "width=640,height=500");
}

function post_163(url,appkey,title,pic,ralateUid)
{
	var _t = enc(title + ' - ' + url);
	var _u = enc(url);
	var _l = 'http://t.163.com/article/user/checkLogin.do?source='+_u+'&info='+_t;
	window.open(_l, "_blank", "width=640,height=500");
}

function post_sohu(url,appkey,title,pic,ralateUid)
{
	var _t = enc(title);
	var _u = enc(url);
	var _l = 'http://t.sohu.com/third/post.jsp?content=utf8&url='+_u+'&title='+_t;
	window.open(_l, "_blank", "width=640,height=500");
}

function post_kaixin(url,appkey,title,pic,ralateUid)
{
	var _t = enc(title);
	var _u = enc(url);
	var _c = enc(title + ' ' + url);
	var _l = 'http://www.kaixin001.com/~repaste/repaste.php?rtitle='+_t+'&rcontent='+_c+'&rurl='+_u;
	window.open(_l, "_blank", "width=640,height=500");
}

function post_renren(url,appkey,title,pic,ralateUid)
{
	var _t = enc(title);
	var _u = enc(url);
	var _l = 'http://www.connect.renren.com/share/sharer?url='+_u+'&title='+_t;
	window.open(_l, "_blank", "width=640,height=500");
}

function post_taobao(url,appkey,title,pic,ralateUid)
{
	var _u = enc(url);
	var _l = 'http://share.jianghu.taobao.com/share/addShare.htm?url='+_u;
	window.open(_l, "_blank", "width=640,height=500");
}

function post_douban(url,appkey,title,pic,ralateUid)
{
	var _t = enc(title);
	var _u = enc(url);
	var _l = 'http://www.douban.com/recommend/?url='+_u+'&title='+_t;
	window.open(_l, "_blank", "width=640,height=500");
}


var g_mnet_share_url = 'put url here';
var g_mnet_share_text = 'put text here';
function share(post_func)
{
	post_func(g_mnet_share_url, '', g_mnet_share_text, '', '');
}


function html_escape(s)
{
	s = s.replace(/&/g, "&amp;");
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/ /g, "&nbsp;");
	return s;
}

function share_text(s)
{
	return '';
}

function img_text(s)
{
	return 'title=' + html_escape(i18n_('share_to') + ' ' + i18n_(s));
}

function get_share_links_text(url, text)
{
	g_mnet_share_url = url;
	g_mnet_share_text = text;
	
	var linkimg = "border: 0; height: 16px; vertical-align: middle; padding: 2px;";
	var sharelink = "text-decoration: none; font-size: 11px; font-weight: bold;";

	var s = i18n_('share_more') + '<br/><nobr>'
+ '<a style="'+sharelink+'" href="javascript:share(post_sina);" hidefocus="true"><img '+img_text('sina_wb')+' src="' + ext_base + 'sina.gif" style="'+linkimg+'"/>'+share_text('sina_wb')+'</a>'
+ '<a style="'+sharelink+'" href="javascript:share(post_qq);" hidefocus="true"><img '+img_text('qq_wb')+' src="' + ext_base + 'qq.png" style="'+linkimg+'"/>'+share_text('qq_wb')+'</a>'
+ '<a style="'+sharelink+'" href="javascript:share(post_sohu);" hidefocus="true"><img '+img_text('sohu_wb')+' src="' + ext_base + 'sohu.png" style="'+linkimg+'"/>'+share_text('sohu_wb')+'</a>'
+ '<a style="'+sharelink+'" href="javascript:share(post_163);" hidefocus="true"><img '+img_text('163_wb')+' src="' + ext_base + '163.png" style="'+linkimg+'"/>'+share_text('163_wb')+'</a>'
+ '<a style="'+sharelink+'" href="javascript:share(post_kaixin);" hidefocus="true"><img '+img_text('kaixin')+' src="' + ext_base + 'kaixin.png" style="'+linkimg+'"/>'+share_text('kaixin')+'</a>'
+ '<a style="'+sharelink+'" href="javascript:share(post_renren);" hidefocus="true"><img '+img_text('renren')+' src="' + ext_base + 'renren.gif" style="'+linkimg+'"/>'+share_text('renren')+'</a>'
+ '<a style="'+sharelink+'" href="javascript:share(post_douban);" hidefocus="true"><img '+img_text('douban')+' src="' + ext_base + 'douban.png" style="'+linkimg+'"/>'+share_text('douban')+'</a>'
+ '<a style="'+sharelink+'" href="javascript:share(post_taobao);" hidefocus="true"><img '+img_text('taobao_jh')+' src="' + ext_base + 'taobao.png" style="'+linkimg+'"/>'+share_text('taobao_jh')+'</a>'
	s += '</nobr>';
	return s;
}

function write_share_links(url, text)
{
	document.write(get_share_links_text(url, text));
}
