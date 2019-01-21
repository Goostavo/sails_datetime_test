/**
 * DummyDate Controller Test
 *
 * @description :: Testing for DataTable Controller
 */

const assert = require('chai').assert;
var supertest = require('supertest');


describe('DummyDateModel', () => {
  describe('#waterline.Create', () => {
    beforeEach(async () => {
      try {
        await DummyDate.destroy({});
      } catch (err) {
        assert.fail(err);
      }
    });

    it('Create single entry using waterline', async () => {
      const newDummyDate = {
        'dateFormat': new Date('2016-04-06T18:47:40.456Z')
      };

      try {
        await DummyDate.create(newDummyDate);

        let newDate = await DummyDate.find({});
        assert.equal('object', typeof newDate[0].dateFormat);
      } catch (err) {
        assert.fail(err);
      }
    });
  });
});
