// Breadth-first search

function bfs(start, nodes, callback) {
  var frontier = [start],
    visited = [],
    level = 0,
    levels = {};

  while (frontier.length > 0) {
    var next = [];

    for (var i in frontier) {
      var node = frontier[i];
      levels[node] = level; // set level for node
      visited.push(node);

      for (var j in nodes[node]) {
        var k = nodes[node][j];
        // if level does not exist
        if (levels[k] === undefined) next.push(k);
      }
    }

    frontier = next;
    level += 1; // level counter
  }

  callback(visited);
};

// The graph is built according to > ../img/Breadth-First-Search-Algorithm.gif
var nodes = {
  "1": [2, 3, 4],
  "2": [5],
  "3": [6, 7],
  "4": [8],
  "5": [9],
  "6": [10],
  "7": [],
  "8": [],
  "9": [],
  "10": []
};

bfs(1, nodes, function (arr) {
  console.log(arr);
});