self.addEventListener('push', (event) => {
    const data = event.data?.json();
    const options = {
        body: data?.body,
        icon: '/icons/logo-192x192.png',
        badge: '/icons/logo-192x192.png',
        data: {
            url: data?.url,
        },
    };

    event.waitUntil(self.registration.showNotification(data?.title, options));
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url || '/'));
});

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline-cache').then((cache) => {
            return cache.addAll(['/offline']);
        })
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith(fetch(event.request).catch(() => caches.match('/offline')));
    } else {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});
