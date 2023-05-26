const { expect } = require("chai");
const sinon = require("sinon");

const userModel = require('../../../src/models/userModel');
const connection = require('../../../src/models/connection')
const { mockGetAll } = require('../mocks/userMock');

describe('tests user model', () => {
  afterEach(() => sinon.restore());

  it('GetAll users', async () => {
    //arranque
    sinon.stub(connection, "execute").resolves([mockGetAll]);

    //atc
    const result = await userModel.getAll();

    //assert
    expect(result).to.be.an("array");
    expect(result).to.have.length(2);
    expect(result[0]).to.contain.keys("name", "email");
  });

  it("GetAll without data", async () => {
    sinon.stub(connection, "execute").resolves([[]]);
  
    const result = await userModel.getAll();
  
    expect(result).to.be.an("array");
    expect(result).to.have.length(0);
  });
});