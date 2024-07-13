import type { NextApiRequest, NextApiResponse } from "next";

interface DataNumbers {
    total: number,
    description: string,
}

// /api/datanumbers
export default function handler(req: NextApiRequest, res: NextApiResponse<DataNumbers[]>) {
  
  const data: DataNumbers[] = [
    {
        total: 568,
        description: "Clinicas e Petshops"
    },
    {
        total: 232,
        description: "Pets Cadastrados"
    },
    {
        total: 150,
        description: "Tutores Cadastrados"
    }
];

  res.status(200).json(data);
}