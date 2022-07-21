class Graph {
    constructor() {
        // fill in this method
        this.adjacencyList = new Map();
    }

    addVertex(nodeVal) {
        // fill in this method
        this.adjacencyList.set(nodeVal, []);
    }

    addEdge(src, dest) {
        // fill in this method
        this.adjacencyList.get(src).push(dest);
        this.adjacencyList.get(dest).push(src);
    }

    removeVertex(val) {
        if (this.adjacencyList.get(val)) {
            this.adjacencyList.delete(val);
        }

        this.adjacencyList.forEach((vertex) => {
            const neighborIdx = vertex.indexOf(val);
            if (neighborIdx >= 0) {
                vertex.splice(neighborIdx, 1);
            }
        });
    }

    removeEdge(src, dest) {
        const srcDestIdx = this.adjacencyList.get(src).indexOf(dest);
        this.adjacencyList.get(src).splice(srcDestIdx, 1);

        const destSrcIdx = this.adjacencyList.get(dest).indexOf(src);
        this.adjacencyList.get(dest).splice(destSrcIdx, 1);
    }

    printNeighbors() {
        const result = [];

        for (let vertex of this.adjacencyList.keys()) {
            const neighbors = [];

            neighbors.push(`${vertex}:`);

            this.adjacencyList.get(vertex).forEach((neighbor) => {
                neighbors.push(neighbor);
            });

            result.push(neighbors.join(' '));
        }

        return result;
    }
}

module.exports = Graph
