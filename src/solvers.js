/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n}); //fixme
  var matrix = solution.rows();
  solution.counter = 0;
  var rookPlacer = function(matrix) {
    for (var row=0; row<matrix.length; row++){ 
      for(var col=0; col<matrix[row].length; col++){
        if (row === n-1 && col === n-1){
          solution.counter += 1;
          rookPlacer(matrix);
        }
        if (n >= solution.counter && solution.counter > 0) { 
          if(matrix[row][col] === 1){ 
            if(col === n-1){
              solution.togglePiece(row,0);
            }
            solution.togglePiece(row,col+1)
          }
        }
        if (solution.counter = 0){
          solution.togglePiece(row,col);
          if(solution.hasRowConflictAt(row) || solution.hasColConflictAt(col)){
            solution.togglePiece(row,col);
          }
        }
      }
    }
  }
    //set the piece, check to see if it's valid, if it is a valid piece, then continue in that row and check next colvalue. When c === k-1 (in this case, 2), rookPlacer of the next array in the board. 

    //after return solution add one to counter

  rookPlacer(matrix);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log(counter);
  return matrix;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
 
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
