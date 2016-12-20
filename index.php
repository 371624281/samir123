<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx30ae26d25279c276", "d0856f79bb67d68af4139cc2878b2e46");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title></title>
		<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<link rel="stylesheet" type="text/css" href="css/index.css" />
		<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<script src="js/require.js" data-main='app.js' type="text/javascript" charset="utf-8"></script>
		<script>
			(function(doc, win) {
				var docEl = doc.documentElement,
					resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
					recalc = function() {
						var clientWidth = docEl.clientWidth;
						if(!clientWidth) return;
						docEl.style.fontSize = 100 * (clientWidth / 414) + 'px';
					};
				if(!doc.addEventListener) return;
				win.addEventListener(resizeEvt, recalc, false);
				doc.addEventListener('DOMContentLoaded', recalc, false);
			})(document, window);
		</script>

	</head>

	<body>
		<div class="bootstrap">
			<div class="logding">
				<div class="gps_wap">
					<div class="gps">
					</div>
					<span>定位中</span>
				</div>
			</div>
		</div>
		<!--header-->
		<div class="fixe_header">

			<header>
				<div class="header_content">

					<span onclick="getLocation()">物美超市(天园鑫荣店) 二楼育之同创13教室</span >
				</div>
				<div class="search_wap">
					<div class="center_search">
						<div class="search">
						</div>
						<span onclick="openLocation()">搜索</span>
					</div>
				</div>
			</header>
		</div>
		
	<div class="main">
		<!--page1-->
		<div class="index_main" id="index"></div>
		<!--page2-->
		<div class="sgchaoshi" id="market"></div>
		<!--page3-->
			<div class="shoppingCart" id="order"></div>
			<!--page4-->
				<div class="my_shopping" id="mine"></div>
	</div>



<!--footer-->
		<div class="footer">
			<a href="#home" id="sy">
				<i class="sy sy-1"></i>
				<p>首页</p>
			</a>
			<a href="#market" id="cs">
				<i class="cs"></i>
				<p>闪送超市</p>
			</a>
			<a href="#order" id="gwc">
				<span id="order_count">1</span>
				<i class="gwc"></i>
				<p>购物车</p>
			</a>
			<a href="#mine" id="my">
				<i class="my"></i>
				<p>我的</p>
			</a>
		</div>
		<div id="moban">
			
		</div>
	</body>
	<script type="text/javascript">
		wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
     'checkJsApi',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
        ]
  });
  var latitude=0,
  		,longitude=0;
  function getLocation(){
  wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
         latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
         longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
    alert("经纬度"+longitude+','+latitude)
    }
});
  }
  function openLocation(){
  	wx.openLocation({
	    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
	    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
	    name: '', // 位置名
	    address: '', // 地址详情说明
	    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
	    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
});
  }
	</script>

</html>