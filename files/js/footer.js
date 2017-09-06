var qqBtn=document.getElementById('qqqrcode');
var qqQr=document.getElementById('qq');
var wbBtn=document.getElementById('wbqrcode');
var wbQr=document.getElementById('weibo');
var wxBtn=document.getElementById('wxqrcode');
var wxQr=document.getElementById('weixin');

function showqrcode(qrname){
	qrname.css("display","block");
}

function dispqrcode(qrname){
	qrname.css("display","none");
}

qqBtn.mouseover(function(){
	showqrcode(qqQr)	
});
qqBtn.mouseout(function(){
	dispqrcode(qqQr)
});

wbBtn.mouseover(function(){
	showqrcode(wbQr)	
});
wbBtn.mouseout(function(){
	dispqrcode(wbQr)
});

wxBtn.mouseover(function(){
	showqrcode(wxQr)	
});
wxBtn.mouseout(function(){
	dispqrcode(wxQr)
});

