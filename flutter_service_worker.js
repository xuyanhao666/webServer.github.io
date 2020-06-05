'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e9f92c9a2e07c1f18afe79dd2ee0dc17",
"/": "e9f92c9a2e07c1f18afe79dd2ee0dc17",
"main.dart.js": "133060dc7051e700b6b965e306b4e19b",
"README.md": "30bd936656e5307dad20a782c77af3fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9a474970ecb80605f90df140b477c3f5",
".git/config": "4e37a3554e395609ae622631d131d3c5",
".git/objects/a4/4f10164ce20786457954df1b1c0f16eac1884e": "88f11a1e7fa951457104f2d3018c911d",
".git/objects/9f/9c645ac6c28d9c0bec8ba1ae4f2612f4902653": "6daebbc6a67b7bcfe88fc9d6934506c6",
".git/objects/e1/b5e94172fe866b165ce45ed839ddc8d56144d3": "065ad87b6fcd139e5e997da58352cb48",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "e02010612d2f7ad08d4b089c6a3797ef",
".git/logs/refs/heads/master": "e02010612d2f7ad08d4b089c6a3797ef",
".git/logs/refs/remotes/origin/HEAD": "e02010612d2f7ad08d4b089c6a3797ef",
".git/refs/heads/master": "e4b1dee291815ea13620bbf090fb90e5",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/index": "e6e23d78e6fc92120e8aa74e60d10dbb",
".git/packed-refs": "f385b62d6b2317d2834d34a653618810",
".git/sourcetreeconfig": "8609ff6bf1622260d8012d25cdafa760",
"location.js": "f0c394bc4d44b43dea9461d0f736c840",
"assets/LICENSE": "ab34ca824bfb545b4d24b4b2cb4b61ee",
"assets/AssetManifest.json": "cf6efb0fe025384194750ef6cef8809d",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/table_99.png": "76f0e4a1bb30846921851f07db295d68",
"assets/assets/images/canceled.png": "bdce3314edef84657d25fb3672c483d0",
"assets/assets/images/sending.png": "a0134c0ae8f2eae1bdbb4eea4147bd18",
"assets/assets/images/table_04.png": "c68c58ada724ace772a8f7847788340f",
"assets/assets/images/inbounded.png": "950a2a74bff1450ec8c73a2d78070c14",
"assets/assets/images/table_05.png": "52384fca47af6e66974c7503a695ffff",
"assets/assets/images/table_07.png": "29b07050fb585aa4783ece76136755e4",
"assets/assets/images/table_06.png": "52384fca47af6e66974c7503a695ffff",
"assets/assets/images/received.png": "1385a8bd223daf449998b59f595d3a76",
"assets/assets/images/table_02.png": "3ce30954e010b4c9fb3ac177a3a2b2eb",
"assets/assets/images/table_03.png": "52a05cc7ef77c998cce492e2b897906c",
"assets/assets/images/pooled.png": "2b09613ac7f3cf8ddd0dfaad58f2fcfb",
"assets/assets/images/table_01.png": "6f481b14f4f21aa70280488544f85119",
"assets/assets/images/finished.png": "311783f53e524e76f2b6eb6234cb19b5",
"assets/assets/images/picked.png": "64d1d1e8b84011687f623fe5f04b6049",
"assets/assets/images/transporting.png": "b8f9c5ad4cd070f17a3328649c7c1271",
"assets/assets/images/table_08.png": "442d18fc075abfe0a1270d9214ca8e59",
"assets/assets/images/waved.png": "056a08ac4d815b8fd6ac86bded899011",
"assets/assets/images/clock.png": "003036b475ef2416b1f9b985ab2611e0",
"assets/assets/images/oqc.png": "3731aeec04e2ccf8c42a66023cf04009",
"assets/assets/images/clockPoint.png": "3f5591bc863d10710dab8d5b4ba2a87f",
"assets/assets/images/tmsPicked.png": "91251f02576eace193a8d35ced3921d6",
"assets/assets/images/jiantou.png": "8721dcc5592db3e5c046f009d2ff6bdf",
"assets/assets/images/network.png": "3ca93070d59257653c791e263fc40fe4",
"assets/assets/images/outbounded.png": "2b111fde9ab63d29f9b665d69eb72a0b",
"assets/assets/images/bagging.png": "a90929629eed3f9ba4776ccb3257b7f4",
"assets/assets/images/trucked.png": "b6a053cc641e69433d42228daf3f1c96"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
