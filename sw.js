importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/063703a38e6324621916.js",
    "revision": "7011bab17a0fad2b3f932068c562c2b3"
  },
  {
    "url": "/_nuxt/197badc4c89ee2181784.js",
    "revision": "88f4949c02df5cb1c720e549c5da0bd0"
  },
  {
    "url": "/_nuxt/2349f44bb1f995730b88.js",
    "revision": "b86d88a24a832ca0678edda4067dab15"
  },
  {
    "url": "/_nuxt/49191aed4f16313438bf.js",
    "revision": "0d018e74c3b068e84dbe4ad6b4c34ec3"
  },
  {
    "url": "/_nuxt/9bd3bb15f810d676992e.js",
    "revision": "b2f4ba4e8d921053d2482c06fbac1e6d"
  },
  {
    "url": "/_nuxt/f5d0f0f8c740fc3ae331.js",
    "revision": "9c2a28e0fa4220d4f2adaa965bd2e88d"
  }
], {
  "cacheId": "awesome-page",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
