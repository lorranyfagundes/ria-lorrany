const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

//rota de login
server.post('/login', (req, res) => {
  const { usuario, senha } = req.body;
  if (usuario === 'lorrany' && senha === '123') {
    const token = jwt.sign({ user: 'lorrany' }, 'tasks_da_lorrany', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Usuário ou senha inválidos' });
  }
});

//exige o Token para o crud
server.use((req, res, next) => {
  // Se tiver o cabeçalho de Autorização, passa
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    next();
  } else {
    res.status(401).json({ message: 'Acesso negado. Cadê o Token JWT?' });
  }
});

server.use(router);

//roda na porta 3000
server.listen(3000, () => {
  console.log('Servidor protegido com JWT rodando na porta 3000');
});