/**
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
 * 
 * Input: graph = [[1,2],[3],[3],[]]
 * Output: [[0,1,3],[0,2,3]]
 * Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
 */
// 

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

const allAvailablePaths = function (graph) {
    const N = graph.length,
      result = [];
  
    function DFS(node, arr) { // 0 [] | 1 [0] | 3 [0 1]
      if (node === N - 1) { // 3 === 4-1 
        result.push([...arr, node]); // [0 1 3]
        return;
      }
  
      for (let next of graph[node]) { // 1 | 3
        DFS(next, [...arr, node]); // 1 [0] | 3 [0 1]
      }
    }
  
    DFS(0, []);
    return result;
  };
  
  console.log(allAvailablePaths([[1, 2], [3], [3], []])); // [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]