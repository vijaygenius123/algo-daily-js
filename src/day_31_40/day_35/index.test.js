const {expect} = require('chai')
const {Node, meanOfLevels} = require('./index')

describe("Mean Per Level", function () {

    it('should be a function', function () {
        expect(meanOfLevels).to.be.instanceof(Function)
    });

    it('should return the correct means for levels 1' , function () {
        let tree = new Node(6);
        tree.left = new Node(3);
        expect(meanOfLevels(tree)).to.eql([6, 3])
    });

    it('should return the correct means for levels 2', function () {

        let tree = new Node(5);
        tree.left = new Node(3);
        tree.left.left = new Node(2);
        tree.left.left.left = new Node(1);
        expect(meanOfLevels(tree)).to.eql([5, 3, 2, 1])
    })

    it('should return the correct means for levels 3', function () {

        let tree = new Node(5);
        tree.left = new Node(10);
        tree.left.left = new Node(17);
        tree.left.right = new Node(3);
        tree.right = new Node(8);
        expect(meanOfLevels(tree)).to.eql([5, 9, 10])
    })


})
