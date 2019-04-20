const expect = require("chai").expect;
const sinon = require("sinon");
const LikeService = require("../../services/likeService");
const LikeController = require("../../controllers/likeController");
const model = require("../../models").Like;

describe("Like Controller", function() {
  it("should create like", async function() {
    const testService = new LikeService();
    const testController = new LikeController(testService);
    const ctx = {
      session: { user: "" },
      path: "v2/likes",
      request: {
        body: {
          fromUser: 1,
          toUser: 2
        }
      }
    };
    const expectedResult = { status: "created", data: { id: 1 } };
    const stubCreate = () => {
      return {
        id: 1
      };
    };
    sinon.stub(testService, "create").callsFake(stubCreate);

    await testController.create(ctx);
    expect(ctx.body).to.eql(expectedResult);
  });

  it("should find like by like ID", async function() {
    const testService = new LikeService();
    const testController = new LikeController(testService);
    const ctx = {
      body: "",
      path: "v2/likes/2",
      params: { id: 1 }
    };
    const expectedResult = {
      data: {
        id: 2,
        fromUser: 1,
        toUser: 2
      },
      status: "success"
    };
    const stubCreate = () => {
      return {
        id: 2,
        fromUser: 1,
        toUser: 2
      };
    };
    sinon.stub(testService, "getById").callsFake(stubCreate);

    await testController.find(ctx);
    expect(ctx.body).to.eql(expectedResult);
  });

  it("should find incoming likes by userId", async function() {
    const testService = new LikeService();
    const testController = new LikeController(testService);
    const ctx = {
      body: "",
      path: "v2/users/2/likes?type=incoming",
      params: { id: 2 },
      query: { type: "incoming" }
    };
    const expectedResult = {
      data: {
        id: 2,
        fromUser: 1,
        toUser: 2
      },
      status: "success"
    };
    const stubCreate = () => {
      return {
        id: 2,
        fromUser: 1,
        toUser: 2
      };
    };
    sinon.stub(testService, "getLikeRequestByID").callsFake(stubCreate);

    await testController.findIncoming(ctx);
    expect(ctx.body).to.eql(expectedResult);
  });

  it("should find outgoing likes by userId", async function() {
    const testService = new LikeService();
    const testController = new LikeController(testService);
    const ctx = {
      body: "",
      path: "v2/users/2/likes?type=outgoing",
      params: { id: 2 },
      query: { type: "outgoing" }
    };
    const expectedResult = {
      data: {
        id: 1,
        fromUser: 2,
        toUser: 1
      },
      status: "success"
    };
    const stubCreate = () => {
      return {
        id: 1,
        fromUser: 2,
        toUser: 1
      };
    };
    sinon.stub(testService, "getSentLikesByID").callsFake(stubCreate);

    await testController.findIncoming(ctx);
    expect(ctx.body).to.eql(expectedResult);
  });
});
