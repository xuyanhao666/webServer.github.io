function getLocation () {
    // 百度地图API功能
       var geolocation = new BMap.Geolocation();
       geolocation.getCurrentPosition(function(r){
           if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var geoc = new BMap.Geocoder();
                geoc.getLocation(r.point, function(rs){
                    var addComp = rs.addressComponents;
                    
                    locationSuccess(r.point.lng,r.point.lat,addComp.province , addComp.city , addComp.district ,addComp.street ,addComp.streetNumber);
                    
                });
           }
           else {
               return null;
           }
       },{enableHighAccuracy: true})
}


function check() {

    return "now wifi";
}

function getlocationpoint() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                latitude = position.coords.latitude; //获取纬度
                longitude = position.coords.longitude; //获取经度
                alert("经度:"+longitude+"纬度:"+latitude);
                showTest(longitude,latitude);
            });
    } else {
        alert("不支持定位功能");
    }
}
