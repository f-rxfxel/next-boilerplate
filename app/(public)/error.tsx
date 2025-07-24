'use client'
export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    // TODO criar pagina de erro do next, essa é uma página usada no throw error. pesquisar como usar
    <main>
      <h1>Algo deu errado</h1>
      <pre>{error.message}</pre>
      <button onClick={() => window.history.back()}>Voltar</button>
    </main>
  )
}
