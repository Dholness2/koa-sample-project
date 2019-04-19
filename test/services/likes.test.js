const expect = require("chai").expect;
const sinon = require("sinon");
const Like = require("../../services/LikeService");
const model = require("../../models").Like;

describe("Liker service", function() {
  it("should create like", async function() {
    const testRequest = {
      fromUser: 1,
      tooUser: 2
    };
    const testService = new Like();
    const expectedResult = {
      id: 1
    };
    const stubCreate = () => {
      return expectedResult;
    };
    sinon.stub(model, "create").callsFake(stubCreate);

    expect(await testService.create(testRequest)).to.equal(expectedResult);
  });

  it("should find Like by Id", async function() {
    const testService = new Like();
    const likeId = 1;
    const expectedResult = {
      id: likeId,
      fromUser: 2,
      toUser: 3
    };
    const stubCreate = () => {
      return expectedResult;
    };
    sinon.stub(model, "findOne").callsFake(stubCreate);

    expect(await testService.getById(likeId)).to.equal(expectedResult);
  });

  it("should find incoming likes by userId", async function() {
    const testService = new Like();
    const userId = 1;
    const expectedResult = {
      id: 3,
      fromUser: 2,
      toUser: 1
    };
    const stubCreate = () => {
      return expectedResult;
    };
    sinon.stub(model, "findAll").callsFake(stubCreate);

    expect(await testService.getLikeRequestByID(userId)).to.equal(
      expectedResult
    );
  });
});
