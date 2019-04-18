const Koa = require("koa");
const jwt = require('koa-jwt');
const koaBody = require("koa-body");
const logger = require("koa-logger");

const user = require("./routes/user");
const like = require("./routes/like");
const profile = require("./routes/profile");
const models = require("./models/index");

const app = new Koa();
app.use(koaBody());
app.use(logger());

const BASE_URL = "/v1";
user.prefix(BASE_URL);
like.prefix(BASE_URL);
profile.prefix(BASE_URL);


app.use(jwt({ secret: 'shared-secret' }).unless({
  path: [[/^\/login/, "/"]]
}));


app.use(user.routes());
app.use(like.routes());
app.use(profile.routes());

const port = process.env.PORT || 3000;
models.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
});
