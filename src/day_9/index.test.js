const {expect}  = require('chai')
const Hashmap = require('./index')

describe("Hashmap", function (){

    it('should be able to set key value pairs and return right vaue for key', function () {
        const dict = new Hashmap();
        dict.set('james', '123-456-7890');
        dict.set('jess', '213-559-6840');
        expect(dict.get('james')).to.equal('123-456-7890')
        expect(dict.get('jess')).to.equal('213-559-6840')
    });

    it('should return undefined for non existent key', function () {
        const dict = new Hashmap();
        expect(dict.get('jake')).to.equal(undefined)
    });

})
