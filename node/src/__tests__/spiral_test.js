const Spiral = require("../spiral");

describe("Spiral", function () {
  const sp = new Spiral();
  it("should traverse a rectangle grid", function () {
    const grid = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    ];
    const result = sp.traverse(grid);
    console.log(result);
    const expected = [
      1, 6, 11, 16, 17, 18, 19, 20, 15, 10, 5, 4, 3, 2, 7, 12, 13, 14, 9, 8,
    ];
    expect(result).toEqual(expected);
  });

  it("should traverse a square grid", function () {
    const grid = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    const result = sp.traverse(grid);
    console.log(result);
    const expected = [
      1, 6, 11, 16, 21, 22, 23, 24, 25, 20, 15, 10, 5, 4, 3, 2, 7, 12, 17, 18,
      19, 14, 9, 8, 13,
    ];
    expect(result).toEqual(expected);
  });
});
