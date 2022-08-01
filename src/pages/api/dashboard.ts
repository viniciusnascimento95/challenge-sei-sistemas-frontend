import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {

  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  });

  try {
    const query = "SELECT c.id, c.nome , sum(o.vlr_real) as valor_real , sum(o.vlr_orcado) as valor_orc FROM tb_Conta as c left join tb_Orcamentos as o on c.id = o.id_Conta group by c.id;"
    const values = []
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ results: data })
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
