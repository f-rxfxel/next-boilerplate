'use client'

import { usePathname } from "next/navigation"

export default function PropertyNotFound() {
  const pathname = usePathname()
  const imovelId = pathname.split('/')[2]
  return (
    <main>
        {/* esta é a página 404 de imóveis */}
        <h1>404 - Imóvel {imovelId} Não Encontrado</h1>
        <p>Desculpe, o imóvel que você está procurando não existe ou foi removido.</p>
        <button onClick={() => window.history.back()} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Voltar
        </button>
    </main>
  )
}