'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3c6ba68fa9cb75cc2b3b279e6bc3a91c",
"/": "3c6ba68fa9cb75cc2b3b279e6bc3a91c",
"main.dart.js": "d5f6a26d850e49ffd3522aa87fcf0669",
"README.md": "30bd936656e5307dad20a782c77af3fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9a474970ecb80605f90df140b477c3f5",
".git/config": "4e37a3554e395609ae622631d131d3c5",
".git/objects/61/15cbaf86b8f89e103e61ecbdbe955bd7db2aa6": "fc6eaf2c7dd0eee0fda498d0478c142e",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/59/181d935457bc3dfcc9938d0fce2a3541da9f01": "fc660b770a890e982171c7195fee5d73",
".git/objects/92/3d71875d33096d7128ef3fda6dfbc9fb98fb7b": "ff7eeaf94a12b8ebafff34f7cea55a45",
".git/objects/68/743692af1180a450dbafdd59816b00e512efdb": "a97d64f08704ac7d89f25564c65e0811",
".git/objects/3b/79ac1d0af2b3fd36f34245586b05688b5eaca2": "f01467bc7f871ba250c96b36083de36e",
".git/objects/03/1d37a67ba17ef8b0eedbcb2e8cb18e2edffe6a": "d0a5589c7c571177da7ff962c8a5e3e4",
".git/objects/04/1c04a45a050bb4520573c22270e7b2d94a56e2": "e617bb15b9a73e0bb4e938bc549a62dc",
".git/objects/35/94f36248c3b15521cc9bcde275e746bc0f30ce": "46059b5f06170b6bc4b3f371a694c5b4",
".git/objects/35/848168295987931679e10f0cb99208e967f3d6": "7d263c4d2ad1328f246979b04f449098",
".git/objects/3c/a5a1800fe562c89239d47fdad718bb6bca28d0": "cee926f868383378392506797a9f0401",
".git/objects/51/5fe2cd587212f0ce09943c1ec297ee6203e28e": "df65772310c82f7589523c1970ec7938",
".git/objects/94/ab5954bd22e1928a77dd6d43a3e6d8c8577a1f": "a36b9bcd03e28152bdd97d4e8db07fc0",
".git/objects/94/3c84a18b03160ad81af731f151fe246d2c6bad": "d3b38d6c8ac34e6457c1e2cdff9f3d22",
".git/objects/0e/0ed7a0afc07cb7e1c4b519eab161bab538b755": "a61159f6b769d1836e793f891a3f7b17",
".git/objects/60/17c84e3a2d0ae85d44bdb7232126ba9c35faee": "56d28b374602defd63c6f17b1f9ca86b",
".git/objects/05/a5601c7d6941b11c76037f2f3c72bb64ac58c4": "0c5a0d3fb5169fbb3dc99c1000770900",
".git/objects/a4/4f10164ce20786457954df1b1c0f16eac1884e": "88f11a1e7fa951457104f2d3018c911d",
".git/objects/b2/55a088c37d86688f25a46b5228560bcc3b30c6": "fff8279d03415bb920c5a01f18c3b59d",
".git/objects/d9/607d147a229ec17e9557509aef91cbe324e44c": "46ed045da115265002b2adfb377514d8",
".git/objects/d7/30a0afbcbea8df125929cfa90654a20b5a1c5c": "b9811738e2b85615083f2795e5a5b0fa",
".git/objects/d7/da802228db7b05be0ffafb9100597f997f299e": "2b2dd06e9ab7259082fd4597d11d4931",
".git/objects/d7/022656db24c7d614ac839823f3da8bf51cfcf3": "679067b17f4b58f3509a92172c1e1135",
".git/objects/a2/2d21e86ca57093240e5697847588dd5954ef86": "6d84e1b9699b0fec74bdc7a402ea6ee6",
".git/objects/bc/863e417683555c3f0249ef76849d06b5937461": "adf4e99abcfe60a9e739c5270b030a60",
".git/objects/ae/5cf4f39424802375af3ae48e4a1ad3e278c7ce": "0b2ae0ed841f3f183908b9673506cc0b",
".git/objects/ae/7fd92062579c510c38d50010680acc99bf1bda": "e556a03c9d13821dc9e8984ecb6a3a99",
".git/objects/f4/9877c5780a9d705d16eba3a9782c14f6abd7cf": "4eada11f35a768acae51391e9272a764",
".git/objects/eb/ff276d3b755bf1418ac739c3106e0e32612940": "b24b1f3735657e5191a384cdf2acc135",
".git/objects/eb/e9779fc8f9a2f003ce89c8e9a361193ddeaf86": "e0df535f897cacc6f65348038bd6c0bc",
".git/objects/c0/2b968be9a6047dea21f399d55fec05e3bdf1f5": "6d378fd06221c60b84182ec056b1cf50",
".git/objects/c0/f730d2d4cf8179110b1e1eac8a0fae82397847": "c819daeeaac1c0d342704cc7bbd5ddf9",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/f4ecb095b29dc07e0185917c7b22872824ee9b": "14971139ec54cd46c5df7a96210340de",
".git/objects/f5/4968840e28c80d11f0728f8a0c28da4fa798d8": "74cd2c659df705103c149dc22bdfe0a4",
".git/objects/e3/a4d891de530a9c6155fa78720b3c6ee3791926": "ee75b865df176e18fd890d15d85960c6",
".git/objects/fb/9a581df0c2fad7c0df92937a50322c5833dc4b": "d3f5422b856ddfea23cd67c64e32483c",
".git/objects/c1/228248803a29f46c2b6c40108f4572bfb10835": "fa13a6661241f1bdfd31ceb6cbced5fc",
".git/objects/c6/acdf9f2f091755502535ba5dd2cef805e8f942": "09cef920ec98362372cb9e6dc79cdfd1",
".git/objects/11/498d459bfe647880513ac134084631a672eb2b": "b39f6d6069c787aeac7ed15fc481d17a",
".git/objects/89/d21ba394e48c073adb96d6bcb758a9f35a6c0b": "1a465a546ace957a78bd74f8a8e6fd7a",
".git/objects/45/f94004b391a0f62ad4f46d85950e12703566bd": "80d2c238c660ba99ce46c08b4b96a6ad",
".git/objects/80/86dad07174af692e9afdf81453b6b431095bcd": "5efb225cec6fdcd826261c0daf976800",
".git/objects/1a/72145602d75c8fe0a0d2df8b4fa418229edadb": "b86cab6e67b759b664c3eed29e3a85d5",
".git/objects/8f/9c4dc8c739a9dee901c05052bf4134eebc0885": "458f0b4782ced40058a560eff4ca9fdc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/675b506de593b7a9de05a0c236c948493c7b12": "ad9a16bf6b013a9f3ded2d8702d3d7a2",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/7fd4e0989a327201bffa4bb00e3cc3a863acd5": "36f285955b2bfbcbf558dcf28cddf566",
".git/objects/88/9eeeba9f53f8911e4a99e854250c76f32564c5": "5a9d43a2b811b390006029671e5c40ee",
".git/objects/9f/9c645ac6c28d9c0bec8ba1ae4f2612f4902653": "6daebbc6a67b7bcfe88fc9d6934506c6",
".git/objects/9f/6d63d1b7e6f18c1c07033cb7c0052aa3206735": "f77c7f8eacd532286b5cdc17bacd26f2",
".git/objects/6b/04168d2d95ee8d871230ec5293f8d3f4dbace8": "c14549d71a1634eaba42829bbfdeaecb",
".git/objects/07/23032c85c4365d47af8de4efb2009d73148d15": "e69802783341b6051a9d10c00ea1e54d",
".git/objects/5c/0a4593df7e4b0be14a0f170f8f4d88810d57f2": "cff3b6a3501153d7c416feb21008bce7",
".git/objects/09/897f72f299a74c5ad7c11e79f8cf5691dead88": "83ce890290823d5e64de534f62b42594",
".git/objects/31/56a4c84ab8554a5564624e9713125e8c0dafd5": "4d03318efb3d4f1a06bf916e212bd926",
".git/objects/62/fe5b791987937cef5f18d361fa7ba6c3c2902c": "1c7afc50ea512dc096c0bc3733b9ea3f",
".git/objects/96/00d93f4e03973c246ff0e9bdd8e08905654409": "39dc61f468a3531098bee1f6a0f5c5a5",
".git/objects/3a/98dcc7aac29854571d741ebb7acfd9e10ae48c": "3493ac97c6e5c57039ea24b0cbd1123d",
".git/objects/54/b67db393d3da7cc97d859eaf021d9eb362a4a0": "34fcef02cde7865cc2a77e07a43acd3e",
".git/objects/54/b1b1c0ef1c4bfc6dc328d5fd1d5bfd3487488b": "7d3f617e7c7b4077270e2af552071086",
".git/objects/54/e83c247b0e7a8cb07aaf6362ea7d5deab18c23": "56d557a6d22efa12d6bbfbc3c6b431d8",
".git/objects/30/b7c7a99332df27bae5902463237c61b9746b0e": "592743426eca87df643c6614cb7d8ee8",
".git/objects/5e/eb91489e513c0c833a8f235ed3bd62ee6306f9": "ad2ad1a43c3aa59986e61262e6eb5c16",
".git/objects/6d/8219b50981f1bbfc7d4c89eb1feef232b0488e": "921767ef473f1ad740ce8783bd4b97a8",
".git/objects/01/c5b5ed4067db73884c8a4922f2e5541883f3c6": "ddca773635f0d832ca17aace411723f2",
".git/objects/06/64b60f8490e93e8d474941f52e275a271326b1": "4e76e8805381f442114f412172f687e8",
".git/objects/6c/53b1944c345a830a851a77a73cec329129532e": "e7ad1e654ea4f64a09b15938bc5ebf32",
".git/objects/6c/f7aeff7afb1de8d809d77a4af17d274aca4216": "5ad85ad2dee5a0ca3e9074983402db80",
".git/objects/52/15da2972e454f5bf11837c9712fbd9a892efd1": "bbbfcc9741c9a12f9d042524ca964b94",
".git/objects/55/9048fbc5db27b0d9bb9c52765d3080286f6aa3": "103dda7f2f29c7b9d8b2a67c535786d7",
".git/objects/55/b9a8c4c915be7700b1d4ff121293c22aac4636": "e832faa207978e6daba60adaf10da129",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/64/c4771d4afe8c0c72270f0475f8be0ac872c7a4": "b5e7a65263c27d4370517eb9a8caf361",
".git/objects/90/4ffc108b568436d7f31757d2213e62e5915da9": "e652392da7c6204722901b7c8faba990",
".git/objects/d4/0cb29d33eea9108e2f785c865c031790285e51": "225ccf547a6ebc5cb64e2d55ae9b8600",
".git/objects/a0/bb4b257c46deb80382a2dfcee9e5e459c6024b": "13c3e828ed30d4ba757202a11d46d147",
".git/objects/a7/4443a675d41eaca9ba8d356ad7ba722b3c3b87": "95706f9594c94affd02f8f5f0c351d47",
".git/objects/a7/d96761eb2a04f2511a1d7a0a001be4077ab0cc": "b33ffabed16fad97d80750e90e60c028",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/a5d35fa38217d3ee732d3ee68c96c0fd4b01d7": "1c4543971ce0b3646942ec3fc8d3dcb4",
".git/objects/dc/2ff20e9823de5406874210d649e825413354a8": "fc2680ea90aac54eb00eb4db86c1bda1",
".git/objects/a9/587ef0a877add6867a8be6c3370b72a455c509": "eb019131dbc1bab6384565ab456dbf0f",
".git/objects/aa/d5b529a2c38d44f3d2584fd1de72b14c4cbe71": "0a4d7a5657072fb8dc7b82633d285ae6",
".git/objects/b7/12d5f99c9675aa913edca1d7bf5af231316f79": "b849caadf0fe806dae7463b0abedcf8d",
".git/objects/a8/40bd24570ddbfbdd6c46a5153c5fda276f0009": "2c47960910f8c4f91f9e9eecb7b268da",
".git/objects/de/410289a26dceb5117abfe328b4d47a04da71ab": "25d502657dc6553c9affe79103e33aff",
".git/objects/de/6aa0c1b8af7d763a4d741a15cc5e716b48d22f": "4659329b24d6cb66823894e80f1115aa",
".git/objects/a6/8bcda9af08b2bb46fd0c12c52535a1fc5fe4d7": "21afc8f26f6bb23573a136ed5c330ea4",
".git/objects/b9/ebcc131967f3ef431ffbc12fdc725bf45682e2": "64255a2f9516ece52d23d9d7f1a58104",
".git/objects/c3/c4af02a40ad4282d1a0bba6a93e9e4ee6b734d": "6a826b204655d3fa702e9045b134afad",
".git/objects/c3/c415764addcead34243456f2f4a4a4d2017b10": "7ede01d802e768640ea8c13b2ad33d64",
".git/objects/e1/b5e94172fe866b165ce45ed839ddc8d56144d3": "065ad87b6fcd139e5e997da58352cb48",
".git/objects/e1/58933d544d02073ec0ed11e548b64aac55d081": "0ac15ddc3d296e4786888ca61817e5bd",
".git/objects/e6/e6c1d5718e2f70cd434304c822c485212f10c1": "021b69e2e44eba1db5c9b7d8c6633cf9",
".git/objects/e6/d8b356386e6720ab24c869cfa72c7c1f372098": "26c8243ad4287340f2d76b512d188347",
".git/objects/f9/687cc093b7a864c08c6edc0ea86031594e650b": "7e13cb37e1e56eebbef79d101d8f1203",
".git/objects/c5/0b69b355bf9a5d019260d72515ebcfe56beb5b": "35ca86397c07f6aad5c6a481b7f35cd6",
".git/objects/f6/52ff541629bef193b3d7cc49ac06ca4a8fde58": "0ffd6733eb58b832ff08d2578c0e99ed",
".git/objects/e7/984abba81793425d26fb6177bb2474811a0a65": "4654a2e8267f877659ef048bda58355b",
".git/objects/e7/59ab92557938e827cc0d8f3189f47dd0ecde23": "07c90b4c5a884274d28277d4b45daddc",
".git/objects/cb/bc325449e30d21854cb0400a27aca30294402b": "4d7349b6d79faaeb9ff8b0855378a9eb",
".git/objects/f8/5a8b5a30d018a5fcf6bbaa11ca1e9ea3ce5705": "5867025c748657ba83b6d10d4cd61f5f",
".git/objects/79/98013c8d511cda423a51da22d049effe074e24": "0b2158f3b7376a24131b3b27a1e98bb7",
".git/objects/79/748ac0082b9ad292a4940b5b42d312fd51e621": "739052cad04677d3ac3ef127100fcf0e",
".git/objects/83/9ae4fdb0b3a188d2f01cb6db7803e1e6b8271f": "ba60e91148fe52cb9c95ec5b64321810",
".git/objects/1e/7c8ebccc6d1b29522cc7bf9fd7ea57c7c312b3": "70d3eea6ff54fa6611b0d56e634fa5ae",
".git/objects/84/1e6dc16fded64494fa53ddbbb1ff17c81c8ce7": "b0fbf227303a0e5b045edc28df3aa40c",
".git/objects/4a/1cc19b8ab490028228370fda8cf75a0536d6e0": "ad41fa1b7f448f8ee37ccf6488643ab5",
".git/objects/4a/0eb744fc6fb0cc1101b6b69d64216f97923cc5": "f53e561cb8f3deb65e55b6856f93347a",
".git/objects/23/64024fb32ca50076d127d32dbdb06c97edac7f": "229e20b3f1da4bdfa15762a0309fec45",
".git/objects/15/9a68992e42204bb3fe081a6160feedd8bfca53": "b5909b75110621e184713aa6ed9525a1",
".git/objects/15/686129912eb358b315a582170f54e0f0497b34": "6627ad8c3903c30acbd454ef037a7fc1",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8c/dbc72a87c455169b40e05542c4a1b3d20532f0": "394d7b245a9affb2e08c2f17e6e047dc",
".git/objects/85/85a1e35607fc15e807411a1b988f4ca09d9144": "e94df54ae0b0194ccb0ef95e88821cc3",
".git/objects/1d/9e3ff39366a05e039514cfa8f569f57f7d0347": "8fc79f44aeb8b2a01c007ed35b513e88",
".git/objects/1c/4da21a545973259f7b8589056fcc69ecdecde8": "dff3f8202fa19ce509d2d2fe1bf315af",
".git/objects/1c/7d7db7439d1e34ed55c73c4b907b34afc7d497": "1a7f81182b3644b4977789b7f6930838",
".git/objects/49/1cfa9741fc1538809345a419b2d87c78b481f3": "4e646616697de5c52424bfe9ea6ce711",
".git/objects/2b/f138aa25a6f1bc8706dfd3f7521fd0678e09c5": "31900cf582ec831f661ef3e0a47a286d",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/3dd9124d2e5344a78f0f4ffde6e4c132dc7475": "15c983e588b1a4a93361c99c79d8ff7d",
".git/objects/25/1186c805cd34520231bbf60f3b6285b7b4f015": "7138777b6f9dd0ee878681ffb872a9be",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "92ded6f8f4bff6bd8efe5eb9a1aac85d",
".git/logs/refs/heads/master": "92ded6f8f4bff6bd8efe5eb9a1aac85d",
".git/logs/refs/remotes/origin/HEAD": "eb4836c2e0ccc9b774119240627428d2",
".git/logs/refs/remotes/origin/master": "14946a0ee63aeed9fa790caa82565d73",
".git/refs/heads/master": "d9527152ff5a0e1b788deded8ce0d040",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d9527152ff5a0e1b788deded8ce0d040",
".git/index": "a7f1879868bb962467921a133a15c237",
".git/packed-refs": "9942d2087cce0c61aa7fa51bd7101ef6",
".git/COMMIT_EDITMSG": "1181c1834012245d785120e3505ed169",
".git/FETCH_HEAD": "041c23555d2fd62d67b64294e678649e",
".git/sourcetreeconfig": "dcc86cc9917fc3f1918c054a03d40b8b",
"location.js": "4438e22e76ba656c836e4589dd0c1f57",
"assets/LICENSE": "d772d6665ee7d98592fbf4b8cebcf314",
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
