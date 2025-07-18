import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ imovelId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).imovelId;
  return {
    title: `MAGNA • Imóvel ${id}`,
    description: 'Página de detalhes do imóvel MAGNA',
  };
};

export default async function Property({ params }: Props) {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simula um atraso de carregamento 
  // TODO se der error, chamar 'throw new Error("Erro ao carregar o imóvel")'
  const imovelId = (await params).imovelId;
  if (isNaN(Number(imovelId))) {
    notFound();
  }
  return (
    <main>
      {/* esta é a página de detalhes do imóvel - listar informações do agente, imoveis relacionados */}
      <section>
        <h1>Detalhes do Imóvel {imovelId}</h1>
        <div>
          <h2>Informações do Imóvel</h2>
          <p>
            <strong>Endereço:</strong> Rua Exemplo, 123
          </p>
          <p>
            <strong>Preço:</strong> R$ 500.000
          </p>
          <p>
            <strong>Descrição:</strong> Este é um imóvel incrível com 3 quartos,
            2 banheiros e uma vista maravilhosa.
          </p>
        </div>
        <div>
          <h2>Informações do Agente</h2>
          <p>
            <strong>Nome:</strong> João Silva
          </p>
          <p>
            <strong>Contato:</strong> (11) 98765-4321
          </p>
        </div>
        <div>
          <h2>Imóveis Relacionados</h2>
          <ul>
            <li>Imóvel 1 - R$ 400.000</li>
            <li>Imóvel 2 - R$ 600.000</li>
            <li>Imóvel 3 - R$ 450.000</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
