function getLocation() {
    // 百度地图API功能
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var geoc = new BMap.Geocoder();
            geoc.getLocation(r.point, function (rs) {
                var addComp = rs.addressComponents;

                locationSuccess(r.point.lng, r.point.lat, addComp.province, addComp.city, addComp.district, addComp.street, addComp.streetNumber);

            });
        }
        else {
            return null;
        }
    }, { enableHighAccuracy: true })
}


function saveCode(phoneNum) {
    localStorage.setItem("code", phoneNum); //存入 参数： 1.调用的值 2.所要存入的数据 
}
function deleteCode() {
    localStorage.removeItem("code");
}
function getCode() {
    return localStorage.getItem("code")
}

function getlocationpoint() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                latitude = position.coords.latitude; //获取纬度
                longitude = position.coords.longitude; //获取经度
                // alert("经度:" + longitude + "纬度:" + latitude);
                showTest(longitude, latitude);
            });
    } else {
        alert("不支持定位功能");
    }
}
function GetLocalIPAddr() {
    var oSetting = null;
    var ip = null;
    try {
        oSetting = new ActiveXObject("rcbdyctl.Setting");
        ip = oSetting.GetIPAddress;
        if (ip.length == 0) {
            return "没有连接到Internet";
        }
        oSetting = null;
    } catch (e) {
        return ip;
    }
    alert(ip);
    return ip;
}


