const Koa = require('koa');
const router = require('./middleware/router');
const initDb = require('./db');

 initDb()

const app = new Koa();
app.use(router.routes());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));