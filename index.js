const Koa = require("koa");
const koaBody = require("koa-body");
const user = require("./routes/user");
const models = require("./models/index");

const app = new Koa();
app.use(koaBody());
app.use(user.routes());

const port = process.env.PORT || 3000;
models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
});
