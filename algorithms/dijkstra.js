"use strict";

class Dijkstra {

    constructor(roads) {
        this.graph = roads;
    }

    setDefValues() {
        for (var i in this.graph) {
            this.graph[i].distance = Infinity;
            this.graph[i].previous = 0;
            this.graph[i].visited = false;
        }
    }

    run(start, dest) {
        this.setDefValues();

        this.graph[start].distance = 0;

        for (var o in this.graph) {

            let minDist = Infinity,
                closest = null;

            for (var j in this.graph) {
                if (!this.graph[j].visited && this.graph[j].distance <= minDist) {
                    minDist = this.graph[j].distance;
                    closest = j;
                }
            };

            this.graph[closest].visited = true;

            if (closest === dest) break;

            let neighbors = this.graph[closest];

            if (neighbors) {
                for (var k in neighbors) {
                    if (this.graph[k] && !this.graph[k].visited && this.graph[closest].distance + neighbors[k] < this.graph[k].distance) {
                        this.graph[k].distance = this.graph[closest].distance + neighbors[k];
                        this.graph[k].previous = closest;
                    }
                };
            } else {
                console.log('Can not find the destination "' + dest + '".');
            }

        };


        if (this.graph[dest].distance < Infinity) {
            let path = dest,
                place = dest;

            while (place !== start) {
                place = this.graph[place].previous;
                if (place !== start) path = place + '->' + path;
            }

            path = place + '->' + path;

            console.log("Distance from " + start + " ---> " + dest + " : " + this.graph[dest].distance + ' (' + path + ')');

        } else {
            console.log('Can not build path.');
        }

    }
};

var roads = {
    'A': { 'B': 7, 'C': 8 },
    'B': { 'B': 6, 'C': 3, 'E': 11, 'F': 13 },
    'C': { 'A': 8, 'G': 4, 'F': 6 },
    'D': { 'A': 7, 'F': 2 },
    'E': { 'C': 5, 'D': 1, 'F': 1 },
    'F': { 'D': 8, 'G': 9, 'H': 3 },
    'G': { 'C': 4, 'F': 9 },
    'H': { 'E': 1, 'F': 3 }
};

let dst = new Dijkstra(roads);
    dst.run("A", "H");
    dst.run("A", "F");