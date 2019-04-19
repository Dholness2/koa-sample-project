const KoaRouter = require("koa-router");
const UserService = require("../services/userService");
const UserController = require("../controllers/userController");

function buildUserRouter(prefix) {
  const userService = new UserService();
  const userController = new UserController(userService);
  const userRouter = new KoaRouter();

  userRouter.prefix(prefix);
  userRouter.get("/users/:id", async ctx => {
    return await userController.find(ctx);
  });
  return userRouter;
}

module.exports = buildUserRouter;
