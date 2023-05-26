const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const chai = require("chai");


// Este módulo serve para adicionar um novo conjunto de matchers específicos para o sinonque vamos utilizar para fazer as asserções das funções de componentes da camada Controller.
chai.use(sinonChai);


const userService = require('../../../src/services/userService');
const userController = require('../../../src/controllers/userController');
const { mockGetById } = require('../mocks/userMock');

describe('tests user controller', () => {
  afterEach(() => sinon.restore());

  it("return status 200 and products by id", async () => {

    //arranque
    const res = {};
    const req = {
      params: { id: 1 },
    };
  
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(userService, 'getById').resolves({type: null, message: mockGetById});
  
    //atc
    await userController.getById(req, res);
  
    //assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockGetById);
  });
  
});