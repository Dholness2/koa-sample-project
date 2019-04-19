const expect = require("chai").expect;
const sinon = require("sinon");
const ProfileService = require("../../services/profileService");
const ProfileController = require("../../controllers/profileController");
const model = require("../../models").Profile;

describe("Profile controller", function() {
  it("should create user profile", async function() {
    const ctx = {
      session: { user: "" },
      path: "v2/user",
      request: {
        body: {
          state: "foo",
          city: "bar",
          zip: 11003,
          dateOfBirth: "2016-01-01 00:00:00+00:00"
        }
      }
    };
    const testService = new ProfileService();
    const testController = new ProfileController(testService);
    const testProfile = {
      id: 1,
      state: "foo",
      city: "bar",
      zip: 11003,
      dateOfBirth: "2016-01-01 00:00:00+00:00"
    };
    const expectedResult = { status: "success", data: testProfile };
    const stubCreate = () => {
      return [
        {
          id: 1,
          state: "foo",
          city: "bar",
          zip: 11003,
          dateOfBirth: "2016-01-01 00:00:00+00:00"
        },
        true
      ];
    };
    sinon.stub(testService, "create").callsFake(stubCreate);

    await testController.create(ctx);
    expect(ctx.body).to.eql(expectedResult);
  });
  it("should show profile user by ID", async function() {
    const ctx = {
      body: "",
      path: "v2/user/1/profile",
      params: { id: 1 }
    };
    const testService = new ProfileService();
    const testController = new ProfileController(testService);
    const expectedResult = {
      data: {
        id: 1,
        state: "foo",
        city: "bar",
        zip: 11003,
        dateOfBirth: "2016-01-01 00:00:00+00:00",
        userId: 1
      },
      status: "success"
    };
    const stubCreate = () => {
      return {
        id: 1,
        state: "foo",
        city: "bar",
        zip: 11003,
        dateOfBirth: "2016-01-01 00:00:00+00:00",
        userId: 1
      };
    };
    sinon.stub(testService, "getById").callsFake(stubCreate);

    await testController.show(ctx);
    expect(ctx.body).to.eql(expectedResult);
  });
});
