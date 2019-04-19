const KoaRouter = require("koa-router");
const UserService = require("../services/userService");
const UserController = require("../controllers/userController");

const userService = new UserService();
const userController = new UserController(userService);
const userRouter = new KoaRouter();

userRouter
  .post("/users", async ctx => {
    return await userController.create(ctx);
  })
  .get("/users/:id", async ctx => {
    return await userController.find(ctx);
  });

module.exports = userRouter;
