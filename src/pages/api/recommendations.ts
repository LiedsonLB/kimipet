import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  picture: string,
  name: string;
  comment: string,
  local: string
};

// /api/comments
export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>,) {
  // simulação de dados armazenados em um banco.
  const data: Data[] = [
    {
      picture: "/img/dog-image-3.png",
      name: 'Liedson Barros LB',
      comment: 'As imagens poderiam ser hospedadas no Storage do Firabase',
      local: 'Piauí'
    },
  ];

  // Retorna os dados como JSON
  res.status(200).json(data);
}
console.log()