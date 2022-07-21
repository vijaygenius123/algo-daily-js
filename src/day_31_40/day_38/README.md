# Implement a Graph (Medium)
Good morning, vijaygenius123! Here's our prompt for today.

Since a graph is one of the more difficult data structures to conceptualize in a programmatic 2D manner, let's go ahead and implement it! We'll go with an adjacency list version. Note that there's also the adjacency matrix method which we will cover later.


Recall that an adjacency list is a concept in graph theory, used to describe a representation of a graph via its nodes' adjacent (neighboring) nodes. You can think of it as each vertex maintaining a list of other vertices it's connected to. Using an unordered list data structure, each list is comprised of the node's neighbors.

Here's a skeleton of the implementation. Can you fill the rest in? What could be a good data structure to model this?

```js
class Graph {
  constructor(verticesCount) {
    this.adjacencyList = {};
  }

  addVertex(nodeVal) {}

  addEdge(src, dest) {}

  removeVertex(nodeVal) {}

  removeEdge(src, dest) {}
}
```
## Constraints
- Number of nodes in the graph <= 100000
- It's advised to use a HashMap for the adjacency list
- Expected time complexity for all the utility functions is O(1)
- Expected space complexity is O(n)
