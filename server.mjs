import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('build/db/app.json');

server.use(cors()); // <-- pozwala na fetch z frontendu
server.use(jsonServer.defaults({ static: 'build' }));

server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

server.use(router);

const port = process.env.PORT || 3131;
server.listen(port, () => console.log(`Server running on port ${port}`));
