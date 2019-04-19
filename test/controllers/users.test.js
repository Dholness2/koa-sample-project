const expect = require("chai").expect;
const sinon = require("sinon");
const UserService = require("../../services/userService");
const UserController = require("../../controllers/userController");
const model = require("../../models").User;

describe("User Controller", function() {
  it("should create user", async function() {
    const ctx = {
      session: { user: "" },
      path: "v2/user",
      request: {
        body: {
          firstName: "foo",
          lastName: "bar",
          email: "foobar@gmail.com",
          password: "password123"
        }
      }
    };
    const testService = new UserService();
    const testController = new UserController(testService);
    const expectedResult = { status: "success", data: 1 };
    const stubCreate = () => {
      return {
        id: 1,
        firstName: "foo",
        lastName: "bar",
        email: "foobar@gmail.com",
        password: "password123"
      };
    };
    sinon.stub(testService, "create").callsFake(stubCreate);

    await testController.create(ctx);
    console.log(ctx.body);
    expect(ctx.body).to.eql(expectedResult);
  });

  it("should find user by ID", async function() {
    const ctx = {
      body: "",
      path: "v2/user",
      params: { id: 1 }
    };
    const testService = new UserService();
    const testController = new UserController(testService);
    const expectedResult = {
      data: {
        email: "foobar@gmail.com",
        firstName: "foo",
        id: 1,
        lastName: "bar"
      },
      status: "ok"
    };
    const stubCreate = () => {
      return {
        id: 1,
        firstName: "foo",
        lastName: "bar",
        email: "foobar@gmail.com",
        password: "password123"
      };
    };
    sinon.stub(testService, "getUserById").callsFake(stubCreate);

    await testController.find(ctx);
    console.log(ctx.body);
    expect(ctx.body).to.eql(expectedResult);
  });
});
