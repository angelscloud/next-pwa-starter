export default function OfflinePage() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '160px',
            }}
        >
            <h1 style={{ textAlign: 'center' }}>You are offline</h1>
            <p style={{ textAlign: 'center' }}>
                It seems you&apos;re not connected to the internet. Please check your connection.
            </p>
        </div>
    );
}
