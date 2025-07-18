export default function Loading() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#fafbfc' }}>
      <div style={{ width: 360, padding: 24, borderRadius: 12, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div style={{ width: '100%', height: 180, background: '#e0e0e0', borderRadius: 8, marginBottom: 24, animation: 'pulse 1.5s infinite' }} />
        <div style={{ width: '60%', height: 24, background: '#e0e0e0', borderRadius: 4, marginBottom: 16, animation: 'pulse 1.5s infinite' }} />
        <div style={{ width: '80%', height: 16, background: '#e0e0e0', borderRadius: 4, marginBottom: 12, animation: 'pulse 1.5s infinite' }} />
        <div style={{ width: '40%', height: 16, background: '#e0e0e0', borderRadius: 4, marginBottom: 12, animation: 'pulse 1.5s infinite' }} />
        <div style={{ width: '90%', height: 16, background: '#e0e0e0', borderRadius: 4, animation: 'pulse 1.5s infinite' }} />
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </main>
  );
}