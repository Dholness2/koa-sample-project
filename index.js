const Koa = require("koa");
const koaBody = require("koa-body");
const logger = require("koa-logger");

const user = require("./routes/user");
const like = require("./routes/like");
const models = require("./models/index");

const app = new Koa();
app.use(koaBody());
app.use(logger());

const BASEURL = "/v1";
user.prefix(BASEURL);
like.routes.apply(BASEURL);

app.use(user.routes());
app.use(like.routes());

console.log(user.stack.map(i => i.path));

const port = process.env.PORT || 3000;
models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
});
