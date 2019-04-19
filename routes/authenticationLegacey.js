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

const authenticationLegaceyRouter = new KoaRouter();

authenticationLegaceyRouter
  .post("/login", async ctx => {
    console.log("in route");
    return await authenticationController.create(ctx);
  })
  .post("/register", async ctx => {
    return await userController.create(ctx);
  });

module.exports = authenticationLegaceyRouter;
