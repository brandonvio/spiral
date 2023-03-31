package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestTraverseRectangle(t *testing.T) {
	sp := Spiral{}
	var grid = [][]int{
		{1, 2, 3, 4, 5},
		{6, 7, 8, 9, 10},
		{11, 12, 13, 14, 15},
		{16, 17, 18, 19, 20},
		{21, 22, 23, 24, 25},
	}
	result := sp.Traverse(grid)
	expected := []int{1, 6, 11, 16, 21, 22, 23, 24, 25, 20, 15, 10, 5, 4, 3, 2, 7, 12, 17, 18, 19, 14, 9, 8, 13}
	assert.Equal(t, result, expected)
}

func TestTraverseSquare(t *testing.T) {
	sp := Spiral{}
	var grid = [][]int{
		{1, 2, 3, 4, 5},
		{6, 7, 8, 9, 10},
		{11, 12, 13, 14, 15},
		{16, 17, 18, 19, 20},
	}
	result := sp.Traverse(grid)
	expected := []int{1, 6, 11, 16, 17, 18, 19, 20, 15, 10, 5, 4, 3, 2, 7, 12, 13, 14, 9, 8}
	assert.Equal(t, result, expected)
}
