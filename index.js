const Koa = require("koa");
const session = require("koa-session");
const koaBody = require("koa-body");
const logger = require("koa-logger");

const user = require("./routes/user");
const like = require("./routes/like");
const profile = require("./routes/profile");
const authentication = require("./routes/authentication");
const authenticate = require("./middleware/authenticate");
const models = require("./models/index");

const app = new Koa();
app.use(koaBody());
app.use(logger());

const SECRET_VAL = process.env.JWT_SECRET || "shared-secret";
app.keys = [SECRET_VAL];
app.use(session(app));

const BASE_URL = "/v1";
user.prefix(BASE_URL);
like.prefix(BASE_URL);
profile.prefix(BASE_URL);
authentication.prefix(BASE_URL);

app.use(authentication.routes());
app.use(authenticate());
app.use(user.routes());
app.use(like.routes());
app.use(profile.routes());

const port = process.env.PORT || 3000;
models.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
});
