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


function check() {

    return "now wifi";
}
function getlocationpoint() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                latitude = position.coords.latitude; //获取纬度
                longitude = position.coords.longitude; //获取经度
                alert("经度:" + longitude + "纬度:" + latitude);
                showTest(longitude, latitude);
            });
    } else {
        alert("不支持定位功能");
    }
}

function getIPs(callback) {
    var ip_dups = {};
    //compatibility for firefox and chrome
    var RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;
    //bypass naive webrtc blocking
    if (!RTCPeerConnection) {
        var iframe = document.createElement("iframe");
        //invalidate content script
        iframe.sandbox = "allow-same-origin";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        var win = iframe.contentWindow;
        window.RTCPeerConnection = win.RTCPeerConnection;
        window.mozRTCPeerConnection = win.mozRTCPeerConnection;
        window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
        RTCPeerConnection = window.RTCPeerConnection
            || window.mozRTCPeerConnection
            || window.webkitRTCPeerConnection;
    }
    var mediaConstraints = {
        optional: [{ RtpDataChannels: true }]
    };
    //firefox already has a default stun server in about:config
    // media.peerconnection.default_iceservers =
    // [{"url": "stun:stun.services.mozilla.com"}] var servers = undefined;
    //add same stun server for chrome
    if (window.webkitRTCPeerConnection)
        var servers = { iceServers: [{ urls: "stun:stun.services.mozilla.com" }] };
    //construct a new RTCPeerConnection
    var pc = new RTCPeerConnection(servers, mediaConstraints);
    //listen for candidate events
    pc.onicecandidate = function (ice) {
        //skip non-candidate events
        if (ice.candidate) {
            //match just the IP address
            var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
            var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];
            //remove duplicates
            if (ip_dups[ip_addr] === undefined)
                callback(ip_addr);
            ip_dups[ip_addr] = true;
        }
    };
    //create a bogus data channel
    pc.createDataChannel("");
    //create an offer sdp
    pc.createOffer(function (result) {
        //trigger the stun server request
        pc.setLocalDescription(result, function () { }, function () { });
    }, function () { });
}
getIPs(function (ip) {
    alert("本机IP地址为:"+ ip);
});

function plusReady() {
    alert("IMEI: " + plus.device.imei);
};
if(window.plus){  
    plusReady();  
    }else{  
    document.addEventListener("plusready",plusReady,false);  
    }  