const expect = require("chai").expect;
const sinon = require("sinon");
const User = require("../../services/userService");
const model = require("../../models").User;
const bcrypt = require("bcrypt");

describe("User service", function() {
  it("should create user", async function() {
    const testRequest = {
      firstName: "foo",
      lastName: "bar",
      email: "foobar@gmail.com",
      password: "password123"
    };
    const testService = new User();
    const expectedResult = {
      id: 1,
      firstName: "foo",
      lastName: "bar",
      email: "foobar@gmail.com",
      password: "password123"
    };
    const stubCreate = () => {
      return expectedResult;
    };
    sinon.stub(model, "create").callsFake(stubCreate);

    expect(await testService.create(testRequest)).to.equal(expectedResult);
    sinon.assert.calledOnce(model.create);
  });

  it("should find user by Id", async function() {
    const testService = new User();
    const userid = 1;
    const expectedResult = {
      id: 1,
      firstName: "foo",
      lastName: "bar",
      email: "foobar@gmail.com",
      password: "password123"
    };
    const stubCreate = () => {
      return expectedResult;
    };
    sinon.stub(model, "findOne").callsFake(stubCreate);

    expect(await testService.getUserById(userid)).to.equal(expectedResult);
    sinon.assert.calledOnce(model.create);
  });

  it("should  hash password", async function() {
    const password = "password123";
    const expectedPassword =
      "$2b$05$wgn34S65XBs3MM6YWAxDoONbbDJcYmcXwRf8LqSf5B0AjGWlryzQ6";
    const testService = new User();
    const stubCreate = () => {
      return expectedPassword;
    };

    sinon.stub(bcrypt, "hash").callsFake(stubCreate);

    expect(await testService.saltPassWord(password)).to.equal(expectedPassword);
  });
});
