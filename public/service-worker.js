import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');

registerRoute(
    ({ request, url }) => {
        if (request.mode !== 'navigate') {
            return false;
        }
        if (url.pathname.startsWith('/_')) {
            return false;
        }
        if (fileExtensionRegexp.test(url.pathname)) {
            return false;
        }
        return true;
    },

    createHandlerBoundToURL(process.env.NEXT_PUBLIC_BASE_URL + '/offline')
);

registerRoute(
    ({ request }) => request.destination === 'document',
    new NetworkFirst({
        cacheName: 'documents',
    })
);
