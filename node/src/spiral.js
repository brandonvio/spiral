class Spiral {
  traverse(grid) {
    grid = grid;
    let rowStart = 0;
    let rowEnd = grid.length - 1;
    let colStart = 0;
    let colEnd = grid[0].length - 1;
    let result = [];

    while (rowStart <= rowEnd && colStart <= colEnd) {
      // Traverse down along the left
      for (let row = rowStart; row <= rowEnd; row++) {
        result.push(grid[row][colStart]);
      }
      colStart++;

      // Traverse across the bottom to the right
      for (let col = colStart; col <= colEnd; col++) {
        result.push(grid[rowEnd][col]);
      }
      rowEnd--;

      // Traverse up along the right
      if (rowStart <= rowEnd) {
        for (let row = rowEnd; row >= rowStart; row--) {
          result.push(grid[row][colEnd]);
        }
        colEnd--;
      }

      // Traverse across to the left
      if (colStart <= colEnd) {
        for (let col = colEnd; col >= colStart; col--) {
          result.push(grid[rowStart][col]);
        }
        rowStart++;
      }
    }
    return result;
  }
}

module.exports = Spiral;
