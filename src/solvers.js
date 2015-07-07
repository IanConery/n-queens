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
  var matrix = solution.rows()
  
  var rookPlacer = function(row,col){ 
    solution.togglePiece(row,col)
    if(!solution.hasRowConflictAt(row) && !solution.hasColConflictAt(col)){ 
      for (col=0; col<n; col++){ 
        if(solution.get(row+1) !== undefined){
          rookPlacer(row+1,col)
        }
      }
    } else {
      solution.togglePiece(row,col);
    }
  }

  rookPlacer(0,0)



  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution))
  return matrix;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1;
  for (var i=1; i<=n; i++){ 
    solutionCount *= i
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n});
  var matrix = solution.rows();

  if(n === 2 || 3) return matrix;
  if(n === 1){ 
    solution.togglePiece(0,0)
    return matrix;
  }
  if(n === 0) return solution;

    for (var row=0; row<matrix.length;row++){ 
      for (var col=1; col<matrix[row].length; col++){ 
        solution.togglePiece(row,col);
        if(solution.hasAnyQueensConflicts()){ 
          console.log(row,col)
          solution.togglePiece(row,col);
        }
      }
    }





  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return matrix;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
