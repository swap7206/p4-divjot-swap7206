/**
//! 6.1: Spiral Order Matrix II
* Problem Description:
    Given a matrix of m * n elements (m rows, n columns), return allelements of the matrix in spiral order.
* Example:
    Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */


// JavaScript Program to print a matrix spirally
  
function spiralPrint(arr) {
    let rows = arr.length;
    let columns = arr[0].length;
    let spiralArray = [];
      let i, r = 0, c = 0;
      /*
          r - starting row index
          rows - total rows
          c - starting column index
          columns - total columns
          i - iterator  
      */
    
      while (r < rows && c < columns) {
          // the first row from remaining rows
          for (i = c; i < columns; ++i) {
              spiralArray.push(arr[r][i]);
          }
          r++;
    
          // last column from the remaining columns
          for (i = r; i < rows; ++i) {
              spiralArray.push(arr[i][columns - 1]);
          }
          columns--;
    
          // last row from the remaining rows
          if (r < rows) {
              for (i = columns - 1; i >= c; --i) {
                  spiralArray.push(arr[rows - 1][i]);
              }
              rows--;
          }
    
          // first column from the remaining columns
          if (c < columns) {
              for (i = rows - 1; i >= r; --i) {
                  spiralArray.push(arr[i][c]);
              }
              c++;
          }
      }
    return spiralArray;
  };
  
  console.log(spiralPrint([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]));

//? time complexity = O(n^2)
//? space complexity = O(n)