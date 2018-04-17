const expect  = require('chai').expect;
const algo = require('./../server/helpers/algo');

it('Should be equalize', (done) => {
	expect(algo.equalizer([0, 3, 3])).to.eql([2, 2, 2]);
	expect(algo.equalizer([2, 4, 6, 2, 1])).to.eql([3, 3, 3, 3, 3]);
	expect(algo.equalizer([1, 0, 7, 0])).to.eql([2, 2, 2, 2]);
	expect(algo.equalizer([1, 0, 7, 0, 6, 7, 2, 9, 0, 8])).to.eql([4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
  expect(algo.equalizer([0, 0, 0, 0, 10, 0, 0, 0, 0, 10])).to.eql([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  done();
});