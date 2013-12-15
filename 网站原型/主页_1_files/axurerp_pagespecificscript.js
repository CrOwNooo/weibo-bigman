for(var i = 0; i < 58; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('shoucang1', '0');

	SetPanelVisibility('u48','hidden','none',500);

}

});

widgetIdToShowFunction['u48'] = function() {
var e = windowEvent;

if (true) {

SetWidgetRichText('u52', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('weibo')) + '</span></p>');

}

}
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u28'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u8'] = 'top';
$axure.eventManager.keyup('u21', function(e) {

if (true) {

SetGlobalVariableValue('weibo', GetFocusedWidgetText());

}
});

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('搜索.html');

}
});
u57.tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

SetGlobalVariableValue('shoucang1', '1');

	NewWindow("resources/Other.html#other=" + encodeURI("收藏成功"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u14'] = 'top';u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('热门.html');

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u26'] = 'top';u41.tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

SetGlobalVariableValue('shoucang1', '1');

	NewWindow("resources/Other.html#other=" + encodeURI("收藏成功"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
});
gv_vAlignTable['u41'] = 'top';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('收藏.html');

}
});
gv_vAlignTable['u10'] = 'top';u3.tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u3'] = 'top';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('关注.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u39'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('消息.html');

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u23'] = 'top';
u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	SetPanelVisibility('u48','','none',500);

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u22'] = 'top';u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('粉丝.html');

}
});
gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u34'] = 'center';