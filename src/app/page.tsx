'use client';

import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('@/firebase.config').then(({ requestPermission, onMessageListener }) => {
                requestPermission();
                onMessageListener().then((payload) => {
                    console.info('Message received: ', payload);
                });
            });
        }
    }, []);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '160px' }}>
            <h1 style={{ textAlign: 'center' }}>Welcome to the Next.js PWA Starter</h1>
        </div>
    );
}
