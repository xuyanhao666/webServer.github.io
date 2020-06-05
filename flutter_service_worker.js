'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e9f92c9a2e07c1f18afe79dd2ee0dc17",
"/": "e9f92c9a2e07c1f18afe79dd2ee0dc17",
"main.dart.js": "34310f10a8738f1f0602dff8eeb2bcef",
"README.md": "30bd936656e5307dad20a782c77af3fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9a474970ecb80605f90df140b477c3f5",
".git/config": "4e37a3554e395609ae622631d131d3c5",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/92/3d71875d33096d7128ef3fda6dfbc9fb98fb7b": "ff7eeaf94a12b8ebafff34f7cea55a45",
".git/objects/68/743692af1180a450dbafdd59816b00e512efdb": "a97d64f08704ac7d89f25564c65e0811",
".git/objects/3b/79ac1d0af2b3fd36f34245586b05688b5eaca2": "f01467bc7f871ba250c96b36083de36e",
".git/objects/03/1d37a67ba17ef8b0eedbcb2e8cb18e2edffe6a": "d0a5589c7c571177da7ff962c8a5e3e4",
".git/objects/0e/0ed7a0afc07cb7e1c4b519eab161bab538b755": "a61159f6b769d1836e793f891a3f7b17",
".git/objects/60/17c84e3a2d0ae85d44bdb7232126ba9c35faee": "56d28b374602defd63c6f17b1f9ca86b",
".git/objects/a4/4f10164ce20786457954df1b1c0f16eac1884e": "88f11a1e7fa951457104f2d3018c911d",
".git/objects/b2/55a088c37d86688f25a46b5228560bcc3b30c6": "fff8279d03415bb920c5a01f18c3b59d",
".git/objects/ae/7fd92062579c510c38d50010680acc99bf1bda": "e556a03c9d13821dc9e8984ecb6a3a99",
".git/objects/eb/e9779fc8f9a2f003ce89c8e9a361193ddeaf86": "e0df535f897cacc6f65348038bd6c0bc",
".git/objects/c0/2b968be9a6047dea21f399d55fec05e3bdf1f5": "6d378fd06221c60b84182ec056b1cf50",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/c6/acdf9f2f091755502535ba5dd2cef805e8f942": "09cef920ec98362372cb9e6dc79cdfd1",
".git/objects/11/498d459bfe647880513ac134084631a672eb2b": "b39f6d6069c787aeac7ed15fc481d17a",
".git/objects/89/d21ba394e48c073adb96d6bcb758a9f35a6c0b": "1a465a546ace957a78bd74f8a8e6fd7a",
".git/objects/1a/72145602d75c8fe0a0d2df8b4fa418229edadb": "b86cab6e67b759b664c3eed29e3a85d5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/9eeeba9f53f8911e4a99e854250c76f32564c5": "5a9d43a2b811b390006029671e5c40ee",
".git/objects/9f/9c645ac6c28d9c0bec8ba1ae4f2612f4902653": "6daebbc6a67b7bcfe88fc9d6934506c6",
".git/objects/07/23032c85c4365d47af8de4efb2009d73148d15": "e69802783341b6051a9d10c00ea1e54d",
".git/objects/09/897f72f299a74c5ad7c11e79f8cf5691dead88": "83ce890290823d5e64de534f62b42594",
".git/objects/31/56a4c84ab8554a5564624e9713125e8c0dafd5": "4d03318efb3d4f1a06bf916e212bd926",
".git/objects/62/fe5b791987937cef5f18d361fa7ba6c3c2902c": "1c7afc50ea512dc096c0bc3733b9ea3f",
".git/objects/96/00d93f4e03973c246ff0e9bdd8e08905654409": "39dc61f468a3531098bee1f6a0f5c5a5",
".git/objects/3a/98dcc7aac29854571d741ebb7acfd9e10ae48c": "3493ac97c6e5c57039ea24b0cbd1123d",
".git/objects/54/b67db393d3da7cc97d859eaf021d9eb362a4a0": "34fcef02cde7865cc2a77e07a43acd3e",
".git/objects/54/e83c247b0e7a8cb07aaf6362ea7d5deab18c23": "56d557a6d22efa12d6bbfbc3c6b431d8",
".git/objects/30/b7c7a99332df27bae5902463237c61b9746b0e": "592743426eca87df643c6614cb7d8ee8",
".git/objects/01/c5b5ed4067db73884c8a4922f2e5541883f3c6": "ddca773635f0d832ca17aace411723f2",
".git/objects/6c/f7aeff7afb1de8d809d77a4af17d274aca4216": "5ad85ad2dee5a0ca3e9074983402db80",
".git/objects/55/9048fbc5db27b0d9bb9c52765d3080286f6aa3": "103dda7f2f29c7b9d8b2a67c535786d7",
".git/objects/55/b9a8c4c915be7700b1d4ff121293c22aac4636": "e832faa207978e6daba60adaf10da129",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/a0/bb4b257c46deb80382a2dfcee9e5e459c6024b": "13c3e828ed30d4ba757202a11d46d147",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/aa/d5b529a2c38d44f3d2584fd1de72b14c4cbe71": "0a4d7a5657072fb8dc7b82633d285ae6",
".git/objects/b7/12d5f99c9675aa913edca1d7bf5af231316f79": "b849caadf0fe806dae7463b0abedcf8d",
".git/objects/de/6aa0c1b8af7d763a4d741a15cc5e716b48d22f": "4659329b24d6cb66823894e80f1115aa",
".git/objects/a6/8bcda9af08b2bb46fd0c12c52535a1fc5fe4d7": "21afc8f26f6bb23573a136ed5c330ea4",
".git/objects/c3/c4af02a40ad4282d1a0bba6a93e9e4ee6b734d": "6a826b204655d3fa702e9045b134afad",
".git/objects/e1/b5e94172fe866b165ce45ed839ddc8d56144d3": "065ad87b6fcd139e5e997da58352cb48",
".git/objects/e7/984abba81793425d26fb6177bb2474811a0a65": "4654a2e8267f877659ef048bda58355b",
".git/objects/f8/5a8b5a30d018a5fcf6bbaa11ca1e9ea3ce5705": "5867025c748657ba83b6d10d4cd61f5f",
".git/objects/79/748ac0082b9ad292a4940b5b42d312fd51e621": "739052cad04677d3ac3ef127100fcf0e",
".git/objects/1e/7c8ebccc6d1b29522cc7bf9fd7ea57c7c312b3": "70d3eea6ff54fa6611b0d56e634fa5ae",
".git/objects/84/1e6dc16fded64494fa53ddbbb1ff17c81c8ce7": "b0fbf227303a0e5b045edc28df3aa40c",
".git/objects/15/9a68992e42204bb3fe081a6160feedd8bfca53": "b5909b75110621e184713aa6ed9525a1",
".git/objects/15/686129912eb358b315a582170f54e0f0497b34": "6627ad8c3903c30acbd454ef037a7fc1",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/85/85a1e35607fc15e807411a1b988f4ca09d9144": "e94df54ae0b0194ccb0ef95e88821cc3",
".git/objects/1d/9e3ff39366a05e039514cfa8f569f57f7d0347": "8fc79f44aeb8b2a01c007ed35b513e88",
".git/objects/49/1cfa9741fc1538809345a419b2d87c78b481f3": "4e646616697de5c52424bfe9ea6ce711",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/25/1186c805cd34520231bbf60f3b6285b7b4f015": "7138777b6f9dd0ee878681ffb872a9be",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "1e100c75f8e494e7b12d7001bc4d41cc",
".git/logs/refs/heads/master": "1e100c75f8e494e7b12d7001bc4d41cc",
".git/logs/refs/remotes/origin/HEAD": "e02010612d2f7ad08d4b089c6a3797ef",
".git/logs/refs/remotes/origin/master": "202a65e7b6f91a934fd598fd324f651f",
".git/refs/heads/master": "c3677f144eacf1bc42d53eae62d013de",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "c3677f144eacf1bc42d53eae62d013de",
".git/index": "c3defa79d59f08fdfc1a7032ea7b221a",
".git/packed-refs": "f385b62d6b2317d2834d34a653618810",
".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/FETCH_HEAD": "44b77fda02131e3f5455eeecd3e7f1a2",
".git/sourcetreeconfig": "aaa9483d13900d3993904b3e5c5f0f02",
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
