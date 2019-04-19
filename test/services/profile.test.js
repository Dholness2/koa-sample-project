const expect = require("chai").expect;
const sinon = require("sinon");
const Profile = require("../../services/ProfileService");
const model = require("../../models").Profile;

describe("Profile service", function() {
  it("should create profile", async function() {
    const testService = new Profile();
    const testRequest = {
      state: "foo",
      city: "bar",
      zip: 11003,
      dateOfBirth: "2016-01-01 00:00:00+00:00"
    };

    const expectedResult = {
      id: 1,
      state: "foo",
      city: "bar",
      zip: 11003,
      dateOfBirth: "2016-01-01 00:00:00+00:00"
    };
    const stubCreate = () => {
      return [expectedResult, true];
    };
    sinon.stub(model, "findOrCreate").callsFake(stubCreate);

    expect(await testService.create(testRequest)).to.eql([
      expectedResult,
      true
    ]);
  });
});
//   it("should find user by Id", async function() {
//     const testService = new User();
//     const userid = 1;
//     const expectedResult = {
//       id: 1,
//       firstName: "foo",
//       lastName: "bar",
//       email: "foobar@gmail.com",
//       password: "password123"
//     };
//     const stubCreate = () => {
//       return expectedResult;
//     };
//     sinon.stub(model, "findOne").callsFake(stubCreate);

//     expect(await testService.getUserById(userid)).to.equal(expectedResult);
//     sinon.assert.calledOnce(model.create);
//   })
