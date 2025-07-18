import Link from 'next/link'

export const metadata = {
  title: 'MAGNA • Agentes',
  description: 'Página de listagem de agentes imobiliários MAGNA',
}

export default async function Agents() {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simula um atraso de carregamento
  // TODO se der error, chamar 'throw new Error("Erro ao carregar os agentes")'
  // TODO ajustar o roteamento para o id do agente correto
  const imovelId = 1
  return (
    <main className='bg-neutral-950 text-white'>
      {/* esta é a página agentes - listar os agentes imobiliários*/}
      <h1>Lista de Agentes</h1>
      <ul>
        <li>
          <Link href={`/agentes/${imovelId}`}>Agente 1</Link>
        </li>
        <li>
          <Link href={`/agentes/${imovelId}`}>Agente 2</Link>
        </li>
      </ul>
    </main>
  )
}
