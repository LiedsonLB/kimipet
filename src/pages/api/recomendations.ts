import type { NextApiRequest, NextApiResponse } from "next";

interface Recomendation {
  picture: string;
  title: string;
  description: string;
  phone: string;
  address: string;
  status: string;
  url: string;
}

// /api/recomendations
export default function handler(req: NextApiRequest, res: NextApiResponse<Recomendation[]>) {
  // Simulação de dados fictícios
  const data: Recomendation[] = [
    {
      picture: "/img/dog-image-1.png",
      title: "Amigo Fiel Veterinária",
      description: "Cuidando com amor, celebrando a felicidade dos pets.",
      phone: "(86) 99863-5571",
      address: "Rua Quinto dos Vinhos, Piauí",
      status: 'Fechado',
      url: 'https://github.com/LiedsonLB/kimipet'
    },
    {
      picture: "/img/dog-image-2.png",
      title: "Pet Shop Feliz",
      description: "Os melhores produtos para o seu pet com preços especiais.",
      phone: "(86) 98765-4321",
      address: "Av. Principal, São Paulo",
      status: 'Aberto',
      url: 'https://github.com/LiedsonLB/kimipet'
    },
    {
      picture: "/img/dog-image-3.png",
      title: "Clínica Veterinária Pata Feliz",
      description: "Atendimento especializado para cães e gatos. Consultas e cirurgias.",
      phone: "(XX) XXXXX-XXXX",
      address: "Rua dos Animais, Centro",
      status: 'Aberto',
      url: 'https://github.com/LiedsonLB/kimipet'
    },
    {
      picture: "/img/dog-image-5.png",
      title: "Pet Express",
      description: "Entrega rápida de produtos pet. Tudo para o conforto do seu animal.",
      phone: "(XX) XXXXX-XXXX",
      address: "Avenida dos Pets, Bairro Petrópolis",
      status: 'Aberto',
      url: 'https://github.com/LiedsonLB/kimipet'
    },
    {
      picture: "/img/dog-image-3.png",
      title: "Clínica Veterinária Pata Feliz",
      description: "Atendimento especializado para cães e gatos. Consultas e cirurgias.",
      phone: "(XX) XXXXX-XXXX",
      address: "Rua dos Animais, Centro",
      status: 'Aberto',
      url: 'https://github.com/LiedsonLB/kimipet'
    }
  ];

  // Retorna os dados como JSON
  res.status(200).json(data);
}