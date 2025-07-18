'use client'

import { usePathname } from "next/navigation"

export default function AgentNotFound() {
  const pathname = usePathname()
  const agenteId = pathname.split('/')[2]
  return (
    <main>
        {/* esta é a página 404 de agentes */}
        <h1>404 - Agente {agenteId} Não Encontrado</h1>
        <p>Desculpe, o agente que você está procurando não existe ou foi removido.</p>
        <button onClick={() => window.history.back()} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Voltar
        </button>
    </main>
  )
}