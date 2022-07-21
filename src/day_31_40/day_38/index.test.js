const {expect} = require('chai')
const Graph = require('./index')

describe("", function () {

    it('should ', function () {
        let graph = new Graph(7);
        let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        for (let i = 0; i < vertices.length; i++) {
            graph.addVertex(vertices[i]);
        }
        graph.addEdge('A', 'G');
        graph.addEdge('A', 'E');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'C');
        graph.addEdge('C', 'D');
        graph.addEdge('D', 'E');
        graph.addEdge('E', 'F');
        graph.addEdge('E', 'C');
        graph.addEdge('G', 'D');

        expect(graph.printNeighbors()).to.have.members([
            'A: G E C',
            'B: C',
            'C: A B D E',
            'D: C E G',
            'E: A D F C',
            'F: E',
            'G: A D',
        ])
        graph.removeVertex('A');
        expect(graph.printNeighbors()).to.have.members(
            ['B: C', 'C: B D E', 'D: C E G', 'E: D F C', 'F: E', 'G: D']
        )
    });
})
