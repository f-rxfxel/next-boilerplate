export default function Loading() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ marginBottom: 16 }}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#888" strokeWidth="4" opacity="0.2"/>
        <path d="M44 24a20 20 0 0 1-20 20" stroke="#1976d2" strokeWidth="4" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="1s" repeatCount="indefinite"/>
        </path>
      </svg>
      </div>
    </main>
  )
}