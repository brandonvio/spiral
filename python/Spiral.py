class Spiral:
    def Traverse(self, grid):
        row_start, row_end, col_start, col_end = 0, len(grid) - 1, 0, len(grid[0]) - 1
        result = []

        while row_start <= row_end and col_start <= col_end:
            # Traverse down along the left
            result += [grid[row][col_start] for row in range(row_start, row_end + 1)]
            col_start += 1

            # Traverse across the bottom to the right
            result += [grid[row_end][col] for col in range(col_start, col_end + 1)]
            row_end -= 1

            # Traverse up along the right
            if row_start <= row_end:
                result += [grid[row][col_end] for row in range(row_end, row_start - 1, -1)]
                col_end -= 1

            # Traverse across to the left
            if col_start <= col_end:
                result += [grid[row_start][col] for col in range(col_end, col_start - 1, -1)]
                row_start += 1

        return result
