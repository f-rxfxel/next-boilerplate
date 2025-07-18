'use client';
export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    // TODO criar pagina de erro
    <main>
      <h1>Algo deu errado</h1>
      <pre>{error.message}</pre>
      <button onClick={() => window.history.back()}>
        Voltar
      </button>
    </main>
  );
}
