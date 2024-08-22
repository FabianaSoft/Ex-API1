import express, { Request, Response } from 'express';
import conexao from './services/connection';





const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const porta = 3030;

app.get('/', (req: Request, res: Response): void => {
  res.send('API em NodeJS com TS');
});

app.get('/departamentos', async (req: Request, res: Response) => {
  const [data] = await conexao.query("SELECT * FROM departamentos")
  res.json(data)
});

app.post('/departamentos', (req: Request, res: Response): void => {

  console.log(req.body);

  res.send('POST departamentos');
});

app.delete('/departamentos', async (req: Request, res: Response) => {
  const id = req.query.id
  const query = await conexao.query(`DELETE FROM departamentos WHERE id_departamento = ${id}`)
  res.json(query)
})

app.get('/departamentos/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const [data] = await conexao.query(`SELECT * FROM departamentos WHERE id_departamento = ${id}`)
  if ((data as Array<any>).length == 0) {
    return res.status(404).json({ error: "Departamento não encontrado" })
  }
  res.json(data)
});




app.listen(porta, () => {
  console.log(`Servidor escutando na
porta http://localhost:${porta}`);
})


