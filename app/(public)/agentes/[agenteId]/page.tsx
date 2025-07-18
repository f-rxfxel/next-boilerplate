import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ agenteId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).agenteId;
  return {
    title: `MAGNA • Agente ${id}`,
    description: 'Página de detalhes do agente imobiliário MAGNA',
  };
};

export default async function Agent({ params }: Props) {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simula um atraso de carregamento 
  // TODO se der error, chamar 'throw new Error("Erro ao carregar o agente")'
  const agenteId = (await params).agenteId;
  if (isNaN(Number(agenteId))) {
    notFound();
  }
  return (
    <main>
      {/* esta é a página de detalhes do agente - listar informações dos imoveis e contato */}
      <section>
        <h1>Detalhes do Agente {agenteId}</h1>
        <div>
          <h2>Informações do Agente</h2>
          <p>Nome: João Silva</p>
          <p>Email: joao.silva@example.com</p>
          <p>Telefone: (11) 98765-4321</p>
        </div>
        <div>
          <h2>Imóveis Associados</h2>
          <ul>
            <li>
              <h3>Imóvel 1</h3>
              <p>Descrição: Apartamento no centro</p>
              <p>Preço: R$ 500.000</p>
            </li>
            <li>
              <h3>Imóvel 2</h3>
              <p>Descrição: Casa com piscina</p>
              <p>Preço: R$ 1.200.000</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
