const KoaRouter = require("koa-router");
const UserService = require("../services/userService");
const UserController = require("../controllers/userController");

const userService = new UserService();
const controller = new UserController(userService);
const userRouter = new KoaRouter();

userRouter
  .post("/users", async ctx => {
    return await controller.create(ctx);
  })
  .get("/users/:id", async ctx => {
    return await controller.find(ctx);
  });

module.exports = userRouter;
