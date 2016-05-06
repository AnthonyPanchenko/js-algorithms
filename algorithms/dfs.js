// Depth-first search

function dfs(start, nodes, callback) {
    var visitedNodes = [];

    (function goDeep(node, visited) {
        var childNodes = nodes[node];
        visited.push(node);
        visitedNodes = visited;

        for (var n in childNodes) {
            var node = childNodes[n];
            if (0 > visited.indexOf(node))
                goDeep(node, visited);
        }

    })(start, visitedNodes);

    callback(visitedNodes);
};

// The graph is built according to > ../img/Depth-First-Search-Algorithm.gif
var nodes = {
    "1": [2, 5, 9],
    "2": [3],
    "3": [4],
    "4": [],
    "5": [6, 8],
    "6": [7],
    "7": [],
    "8": [],
    "9": [10],
    "10": []
};

dfs(1, nodes, function (arr) {
    console.log(arr);
});
