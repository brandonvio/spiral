package main

type Spiral struct {
}

func (s *Spiral) Traverse(grid [][]int) []int {
	rowStart := 0
	rowEnd := len(grid) - 1
	colStart := 0
	colEnd := len(grid[0]) - 1
	result := make([]int, 0)

	for rowStart <= rowEnd && colStart <= colEnd {
		// Traverse down along the left
		for row := rowStart; row <= rowEnd; row++ {
			result = append(result, grid[row][colStart])
		}
		colStart++

		// Traverse across the bottom to the right
		for col := colStart; col <= colEnd; col++ {
			result = append(result, grid[rowEnd][col])
		}
		rowEnd--

		// Traverse up along the right
		if rowStart <= rowEnd {
			for row := rowEnd; row >= rowStart; row-- {
				result = append(result, grid[row][colEnd])
			}
			colEnd--
		}

		// Traverse across to the left
		if colStart <= colEnd {
			for col := colEnd; col >= colStart; col-- {
				result = append(result, grid[rowStart][col])
			}
			rowStart++
		}
	}
	return result
}
