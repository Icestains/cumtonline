var qqBtn=$(".qqqrcode");
var qqQr=$("#qq");


qqBtn.mouseover(function () {
	qqQr.css("display","block");
});

qqBtn.mouseout(function () {
	qqQr.css("display","none");
});