for(var i = 0; i < 46; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('shoucang1')) == ('1')) {

	SetPanelVisibility('u34','hidden','none',500);

	SetPanelVisibility('u36','','none',500);

}
else
if (true) {

	SetPanelVisibility('u36','hidden','none',500);

	SetPanelVisibility('u34','','none',500);

}

});
u31.tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('粉丝.html');

}
});
gv_vAlignTable['u31'] = 'top';u17.tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页_1.html');

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u29'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

SetGlobalVariableValue('shoucang1', '1');

}
});
gv_vAlignTable['u8'] = 'top';u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('关注.html');

}
});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u32'] = 'top';
u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('搜索.html');

}
});
u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('热门.html');

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u3'] = 'top';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页_1.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u2'] = 'top';u18.tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('消息.html');

}
});
gv_vAlignTable['u18'] = 'top';u19.tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u5'] = 'top';u45.tabIndex = 0;

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

SetGlobalVariableValue('shoucang1', '1');

}
});
gv_vAlignTable['u45'] = 'top';