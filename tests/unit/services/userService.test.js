const { expect } = require("chai");
const sinon = require("sinon");

const userService = require('../../../src/services/userService');
const userModel = require('../../../src/models/userModel');
const { mockGetById } = require('../mocks/userMock')

describe('tests user service', () => {
  afterEach(() => sinon.restore());
  afterEach(() => sinon.restore());

  it("getById with data", async () => {
    sinon.stub(userModel, "getById").resolves(mockGetById);

    const result = await userService.getById(1);

    expect(result).to.be.an("object");
    expect(result.message).to.deep.equal(mockGetById);
  });

  it("getById without data", async () => {
    sinon.stub(userModel, "getById").resolves(undefined);

    const result = await userService.getById(50);

    expect(result.type).to.deep.equal(404);
    expect(result.message).to.deep.equal("User not found");
  });
});