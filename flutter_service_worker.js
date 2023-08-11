'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "47905f00f89a11631c538c1c920d548a",
"assets/AssetManifest.json": "abe357d5b1a5c774d74f3197cb92d267",
"assets/assets/0%2520Delfin.png": "2bb7ec7a077882256b9e7345870f3142",
"assets/assets/00%2520Ballena.png": "2f88b21f46bdcc8e14d5bf1d71b3c938",
"assets/assets/1%2520Carnero.png": "ed4cc2f07f5f247876d6fc0406007b58",
"assets/assets/10%2520Tigre.png": "2c142d8ea52f39c8f3f4400b7037db46",
"assets/assets/11%2520Gato.png": "32b1e071bbffcc3ca34050cde51f3e97",
"assets/assets/12%2520Caballo.png": "74eb11a1653419989d3370029f80e5f1",
"assets/assets/13%2520Mono.png": "675f19ec120bbce4dd9e96de9d31dcc9",
"assets/assets/14%2520Paloma.png": "207a416fe2ee50b7c5984807b4d564dc",
"assets/assets/15%2520Zorro.png": "f7eec25d79ee6c09dc3f8a829be921f0",
"assets/assets/16%2520Oso.png": "fbd1853acfd6c4ec6c3eea3ef8307695",
"assets/assets/17%2520Pavo.png": "45deaca29bc5be61465a28c4deff3252",
"assets/assets/18%2520Burro.png": "ea0f83831c0531bf121427418857769e",
"assets/assets/19%2520Chivo.png": "5beb8abb40586eab7b9ee745441cc81e",
"assets/assets/2%2520Toro.png": "6849e558fa127eb8d65e2bb62e890219",
"assets/assets/20%2520Cochino.png": "2e6d739fa9ad447b165a7aff5255aaa8",
"assets/assets/21%2520Gallo.png": "88eb6b2265fea5e3bbc77a9c7c7556e7",
"assets/assets/22%2520Camello.png": "5e5e8503369aa38da32ce6e843e9b31f",
"assets/assets/23%2520Cebra.png": "39e75415eddcdf1d7b319a5b03af7dc5",
"assets/assets/24%2520Iguana.png": "11442827ab7ed7a771b8856107726a2f",
"assets/assets/25%2520Gallina.png": "4b7b7050498a7e036d39fc389cd44627",
"assets/assets/26%2520Vaca.png": "bc41d8ccc8c089b252bdae9d769472c5",
"assets/assets/27%2520Perro.png": "5e80b8cfaab63057e1811692dfabd4c9",
"assets/assets/28%2520Zamuro.png": "f7f6558949633515194c0ed4c4af98e5",
"assets/assets/29%2520Elefante.png": "e5adfad4312db64c631e4da5bb77b083",
"assets/assets/3%2520Ciempies.png": "09418ab5cee7e3c8487493bab17bb884",
"assets/assets/30%2520Caiman.png": "5bb8ce024ef2845b7bb4acd2ccc80bfc",
"assets/assets/31%2520Lapa.png": "301f734b87215343c7521c4598a1b977",
"assets/assets/32%2520Ardilla.png": "af5bc6a2be3f15c3c0542e9028ed128f",
"assets/assets/33%2520Pescado.png": "74bf98e9cc1b9f4ef146726e97617271",
"assets/assets/34%2520Venado.png": "305f9633c577f9f2186e6377da27b96f",
"assets/assets/35%2520Jirafa.png": "416fda0f2f0d893eaac034d593be6367",
"assets/assets/36%2520Culebra.png": "d3e52ebc1485336b5fcd89248cb1e52d",
"assets/assets/4%2520Alacran.png": "6981c9de5f9456b98b7c3d225407b051",
"assets/assets/5%2520Leon.png": "edd1e319e11cd2dfb8955a21c7939fe9",
"assets/assets/51%2520Pelicano.png": "f02a236aa532387d62c0df10654fae2b",
"assets/assets/58%2520Hormiga.png": "3f022b19b5d73c57f8355cbc8be07eaf",
"assets/assets/6%2520Rana.png": "f96c554b0cb34f46ec8dc67b7427bb41",
"assets/assets/64%2520Gavilan.png": "58a541169fdb617855c4fa7d9f5f0c4e",
"assets/assets/68%2520Jaguar.png": "c9f831be8067c79db045f03ee36d004d",
"assets/assets/7%2520Perico.png": "059a8cfb8363177b6a83c8a7e79be9eb",
"assets/assets/8%2520Raton.png": "a952a338a373bff6619e3b6c45881e82",
"assets/assets/9%2520Aguila.png": "a4577a753178e6e6a538eaa0f428fbc2",
"assets/assets/Aguila.png": "a4577a753178e6e6a538eaa0f428fbc2",
"assets/assets/Alacran.png": "6981c9de5f9456b98b7c3d225407b051",
"assets/assets/Arana.png": "3d10ebe66009ed7dba10b26821825c73",
"assets/assets/Ardilla.png": "af5bc6a2be3f15c3c0542e9028ed128f",
"assets/assets/Avestruz.png": "f13f47d2f355f57838f2e9a1eca9060b",
"assets/assets/Avispa.png": "cc339a005eb1062743ba34fa0d836cc4",
"assets/assets/Ballena.png": "2f88b21f46bdcc8e14d5bf1d71b3c938",
"assets/assets/Bisonte.png": "437a614dc6cb0c2228d01954dc5a05e3",
"assets/assets/Bufalo.png": "f5d5c7424afc106e0cf3d36a34f77329",
"assets/assets/Burro.png": "ea0f83831c0531bf121427418857769e",
"assets/assets/Caballo.png": "74eb11a1653419989d3370029f80e5f1",
"assets/assets/cabra.png": "5beb8abb40586eab7b9ee745441cc81e",
"assets/assets/Cachicamo.png": "fa5b97577089de74f517ced04dfa5ed8",
"assets/assets/Caiman.png": "5bb8ce024ef2845b7bb4acd2ccc80bfc",
"assets/assets/Camaleon.png": "022502ded2057b5548ae1996df142563",
"assets/assets/Camello.png": "5e5e8503369aa38da32ce6e843e9b31f",
"assets/assets/Camelon.png": "022502ded2057b5548ae1996df142563",
"assets/assets/Canario.png": "6b7de812d49322dd73ba00a5fac40564",
"assets/assets/Cangrejo.png": "9d0dab7b5fecace097151fe39c00efb3",
"assets/assets/Canguro.png": "bebd46a54f972b1617569253db431023",
"assets/assets/Caracol.png": "43fd36ce11b0544c62bafe13287f99a3",
"assets/assets/Carnero.png": "ed4cc2f07f5f247876d6fc0406007b58",
"assets/assets/Cebra.png": "39e75415eddcdf1d7b319a5b03af7dc5",
"assets/assets/Chiguire.png": "85e3bb36d1f54089b927db732cc8a89e",
"assets/assets/Chivo.png": "5beb8abb40586eab7b9ee745441cc81e",
"assets/assets/Ciempies.png": "09418ab5cee7e3c8487493bab17bb884",
"assets/assets/Cochino.png": "2e6d739fa9ad447b165a7aff5255aaa8",
"assets/assets/Conejo.png": "137a3344ba7bfab8a86e4f81f3905979",
"assets/assets/Culebra.png": "d3e52ebc1485336b5fcd89248cb1e52d",
"assets/assets/Delfin.png": "2bb7ec7a077882256b9e7345870f3142",
"assets/assets/Elefante.png": "e5adfad4312db64c631e4da5bb77b083",
"assets/assets/Gallina.png": "4b7b7050498a7e036d39fc389cd44627",
"assets/assets/Gallo.png": "88eb6b2265fea5e3bbc77a9c7c7556e7",
"assets/assets/Garza.png": "928b63816f5ba552cbca431cae886ec5",
"assets/assets/Gato.png": "32b1e071bbffcc3ca34050cde51f3e97",
"assets/assets/Gavilan.png": "58a541169fdb617855c4fa7d9f5f0c4e",
"assets/assets/Gorila.png": "d352fa45cf78c9e18e5296cf6e054c7a",
"assets/assets/Grillo.png": "7f26e43e6ea638ae742af17c6f388468",
"assets/assets/Guacamaya.png": "51ef21d7a1711aae6287d21f8388646f",
"assets/assets/Guacharo.png": "7b0536f1f0a8a22ff25699cc379296c4",
"assets/assets/Hipopotamo.png": "e3ac865b346e4fd7383d7205cc5b5950",
"assets/assets/Hormiga.png": "3f022b19b5d73c57f8355cbc8be07eaf",
"assets/assets/Iguana.png": "11442827ab7ed7a771b8856107726a2f",
"assets/assets/Jaguar.png": "c9f831be8067c79db045f03ee36d004d",
"assets/assets/Jirafa.png": "416fda0f2f0d893eaac034d593be6367",
"assets/assets/Lapa.png": "301f734b87215343c7521c4598a1b977",
"assets/assets/Lechuza.png": "48726b9e701c46b01ad515b15788cb18",
"assets/assets/Leon.jfif": "d14ae8cd40e56c9a0cfcb0ad06e8f1b6",
"assets/assets/Leon.png": "edd1e319e11cd2dfb8955a21c7939fe9",
"assets/assets/Lobo.png": "5c8c46916b1be9bb94e8d4ad3cdd04dc",
"assets/assets/Loro.png": "63980d0c194e0a2e2c186d3ddf858ca4",
"assets/assets/Mariposa.png": "5b3e371cc8d57c7ed3bac09f75589ccb",
"assets/assets/matos.png": "2598125bae980c9aad1bb32a9e44e0d0",
"assets/assets/Mono.png": "675f19ec120bbce4dd9e96de9d31dcc9",
"assets/assets/Oso.png": "fbd1853acfd6c4ec6c3eea3ef8307695",
"assets/assets/Osohormiguero.png": "9e800294d57c894ad00f6ab5b5cb4a5c",
"assets/assets/Paloma.png": "207a416fe2ee50b7c5984807b4d564dc",
"assets/assets/Panda.png": "602b50dc40759e1049c7b21836faa5d5",
"assets/assets/Pantera.png": "1a59f07fff7f74b62f28909826406f4f",
"assets/assets/Pato.png": "3fd2be877652298271d8be24c7f6f574",
"assets/assets/Pavo%2520Real.png": "cfa66057e212d681b6dbfd8509881649",
"assets/assets/Pavo.png": "45deaca29bc5be61465a28c4deff3252",
"assets/assets/Pelicano.png": "f02a236aa532387d62c0df10654fae2b",
"assets/assets/Pereza.png": "608b3a093c40a7c667be4745b8dd4312",
"assets/assets/Perico.png": "059a8cfb8363177b6a83c8a7e79be9eb",
"assets/assets/Perro.png": "5e80b8cfaab63057e1811692dfabd4c9",
"assets/assets/Pescado.png": "74bf98e9cc1b9f4ef146726e97617271",
"assets/assets/Puercoespin.png": "2cc0849c4a8a9ccccf8cb74fc5adab87",
"assets/assets/Pulpo.png": "00f12d24748142bcdd71b6ac2615c67e",
"assets/assets/Puma.png": "b9cdc628278e581e93a9e14f714adfc1",
"assets/assets/Rana.png": "f96c554b0cb34f46ec8dc67b7427bb41",
"assets/assets/Raton.png": "a952a338a373bff6619e3b6c45881e82",
"assets/assets/sapo.png": "3aa42c95a37e49a10d983c427508dd38",
"assets/assets/Tiburon.png": "1f72c663faf770ab205a98f8d44acce2",
"assets/assets/Tigre.png": "2c142d8ea52f39c8f3f4400b7037db46",
"assets/assets/Toro.png": "6849e558fa127eb8d65e2bb62e890219",
"assets/assets/Tortuga.png": "f87763b3c79517c7fc68b56370567257",
"assets/assets/Tucan.png": "1216ac8503f044ed7dcbc65df2bdb2b1",
"assets/assets/Turpial.png": "21a12d5c5d3c8e1cb4b82d527d6ac024",
"assets/assets/Vaca.png": "bc41d8ccc8c089b252bdae9d769472c5",
"assets/assets/Venado.png": "305f9633c577f9f2186e6377da27b96f",
"assets/assets/Venado1.png": "8a4b7e9129e862653f9d6aa3c7489273",
"assets/assets/Zamuro.png": "f7f6558949633515194c0ed4c4af98e5",
"assets/assets/Zapata.png": "e68307e1fd4dc6934c606669b6eadd97",
"assets/assets/Zebra.png": "39e75415eddcdf1d7b319a5b03af7dc5",
"assets/assets/Zorro.png": "f7eec25d79ee6c09dc3f8a829be921f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5a5f2ace7193f03bfbae4a7becdfa9a3",
"assets/NOTICES": "2c6d4aebe9868da77ac12f9af39eb752",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "177cf4c6dcb03f12ed6db4ff56b24f63",
"/": "177cf4c6dcb03f12ed6db4ff56b24f63",
"main.dart.js": "57d9126529dd9daf83c626a198310914",
"manifest.json": "20c76f749fbf4ff676ea3cd47bac0eb6",
"version.json": "5a0a8a900e0d40d9200fa898f62cc4ff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
