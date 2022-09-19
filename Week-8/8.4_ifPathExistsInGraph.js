function ifPathExistsInGraph(vertices, edges, src, destn) {
  //adjacency list graph
  const graph = Array(vertices).fill(0).map(() => Array());

    //Building the graph
    edges.forEach((edge) => {
        let parent = edge[0], child = edge[1];
        graph[parent].push(child);
        graph[child].push(parent);
    });

    //traversing graph => BFS
    let ifPathExists =  false;
    let queue = [], v = src;
    let discovered = Array(vertices).fill(false);

    discovered[v] = true;
    queue.push(v);

    while (queue.length != 0) {
        v = queue.shift();
        if (v === destn) {
            console.log(`path from ${src} to ${destn} exists`);
            ifPathExists = !ifPathExists;
            break;
        }
        for (let u of graph[v]) {
            if (discovered[u] === false) {
                discovered[u] = true;
                queue.push(u);
            }
        }
    }
    !ifPathExists && console.log(`path from ${src} to ${destn} does not exist`);
    return ifPathExists;
}

console.log(
    ifPathExistsInGraph(
        3,
        [
            [0, 1],
            [1, 2],
            [2, 0],
        ],
        0,
        2
    )
);

console.log(
    ifPathExistsInGraph(
        6,
        [
            [0, 1],
            [0, 2],
            [3, 5],
            [5, 4],
            [4, 3],
        ],
        0,
        5
    )
);

/**
path from 0 to 2 exists
true
path from 0 to 5 does not exist
false
 */
