const AuthenticationService = require("../services/authenticationService");
const AuthenticationController = require("../controllers/authenticationController");

const UserService = require("../services/userService");
const UserController = require("../controllers/userController");

const KoaRouter = require("koa-router");

const userService = new UserService();
const userController = new UserController(userService);

const authenticationService = new AuthenticationService();
const authenticationController = new AuthenticationController(
  authenticationService
);

function buildRouter(prefix) {
  const router = new KoaRouter();
  router.prefix(prefix);
  router
    .post("/login", async ctx => {
      return await authenticationController.create(ctx);
    })
    .post("/register", async ctx => {
      return await userController.create(ctx);
    });
  return router;
}

module.exports = buildRouter;
