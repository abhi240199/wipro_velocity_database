const sinon = require("sinon");
const Controller = require("../controllers/contactController");
const Contact = require("../models/contact");
describe("Contact Manager Controller", function () {
  let req = {
      body: {
        name: "John",
        email: "a9655@gmail.com",
        phone: "293822",
      },
      params: {
        id: "62bec379b9715e7f51a0b58b",
      },
    },
    error = new Error({ error: "Error generated" }),
    res = {},
    expectedResult;
  describe("create", function () {
    beforeEach(function () {
      res = {
        json: sinon.spy(),
        status: sinon.stub().returns({ end: sinon.spy() }),
      };
    });
    it("Should return created Contact", function () {
      expectedResult = req.body;
      sinon.stub(Contact, "create").yields(null, expectedResult);
      Controller.addContact(req, res);
      sinon.assert.calledWith(Contact.create, req.body);
      sinon.assert.calledWith(res.json, sinon.match({ name: req.body.name }));
      sinon.assert.calledWith(res.json, sinon.match({ email: req.body.email }));
    });
  });

  /*describe('get', function () {
    beforeEach(function () {
        res = {
            json: sinon.spy(),
            status: sinon.stub().returns({ end: sinon.spy() })
        };
        expectedResult = req.body
    });
    it('should return vehicle obj',function () {
        sinon.stub(Vehicle, 'findById').yields(null, expectedResult);
        Controller.get(req, res);
        sinon.assert.calledWith(Vehicle.findById, req.params.id);
        sinon.assert.calledWith(res.json, sinon.match({ model: req.body.model }));
        sinon.assert.calledWith(res.json, sinon.match({ manufacturer: req.body.manufacturer }));
    });
    
});*/

  // describe("error", function () {
  //   beforeEach(function () {
  //     res = {
  //       json: sinon.spy(),
  //       status: sinon.stub().returns({ end: sinon.spy() }),
  //     };
  //     expectedResult = req.body;
  //   });
  //   it("should return 404 for non-existing  id", function () {
  //     sinon.stub(Contact, "findById").yields(null, null);
  //     Controller.get(req, res);
  //     sinon.assert.calledWith(Contact.findById, req.params.id);
  //     sinon.assert.calledWith(res.status, 404);
  //     sinon.assert.calledOnce(res.status(404).end);
  //   });
  // });
});
