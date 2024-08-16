import express, { Request, Response } from 'express';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const porta = 3030;

app.get('/', (req: Request, res: Response):void => {
  res.send('API em NodeJS com TS');
});

app.get('/departamentos',   (req: Request, res: Response):void => {
    res.send('GET departamentos');
  });

app.post('/departamentos',  (req: Request, res: Response):void => {

  console.log(req.body);

  res.send('POST departamentos');
});

app.listen(porta, () => {
  console.log(`Servidor escutando na
porta http://localhost:${porta}`);
})