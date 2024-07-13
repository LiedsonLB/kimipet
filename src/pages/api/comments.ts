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
      picture: "/img/dog-image-1.png",
      name: 'Liedson Barros LB',
      comment: 'Esses dados vindo da Api Next são muito top',
      local: 'Piauí'
    },
    {
      picture: "/img/dog-image-2.png",
      name: 'Liedson Barros LB',
      comment: 'http://localhost:3000/api/comments',
      local: 'Piauí'
    },
    {
      picture: "/img/dog-image-3.png",
      name: 'Liedson Barros LB',
      comment: 'As imagens poderiam ser hospedadas no Storage do Firabase',
      local: 'Piauí'
    },
  ];

  res.status(200).json(data);
}