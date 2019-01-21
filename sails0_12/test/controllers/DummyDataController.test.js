/**
 * DummyDate Controller Test
 *
 * @description :: Testing for DataTable Controller
 */

const assert = require('chai').assert;
var supertest = require('supertest');


describe('DummyDatecontroller', () => {
  describe('#blueprints.Create', () => {
    beforeEach(async () => {
      try {
        await DummyDate.destroy({});
      } catch (err) {
        assert.fail(err);
      }
    });

    it('Create single entry using blueprints', async () => {
      const newDummyDate = {
        'dateFormat': '2016-04-06T18:47:40.456Z'
      };

      try {
        let result = await supertest(sails.hooks.http.app)
        .post('/dummydate').send(newDummyDate);
        assert.equal(201, result.statusCode, JSON.stringify(result.body));

        let newDate = await DummyDate.find({});
        assert.equal('object', typeof newDate[0].dateFormat);
      } catch (err) {
        assert.fail(err);
      }
    });
  });
});
