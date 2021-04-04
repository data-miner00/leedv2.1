import * as utils from "@/utils";

describe("All functions within utilities", () => {
  it("should get correct snippet string", () => {
    const testString = "This is a long long test string";
    const desiredLength = 20;
    const expected = "This is a long long ...";

    expect(utils.snippet(testString, desiredLength)).toMatch(expected);
  });

  it("should add an leading @ to string", () => {
    const testString = "1803151";

    const expected = "@1803151";

    expect(utils.alias(testString)).toMatch(expected);
  });

  describe("Python range function", () => {
    const input = 5;

    it("should give list from 0 to 4", () => {
      const expected = [0, 1, 2, 3, 4];

      expect(utils.range(input)).toStrictEqual(expected);
    });

    it("should give list from 2 to 4", () => {
      const expected = [2, 3, 4];

      expect(utils.range(2, input)).toStrictEqual(expected);
    });

    it("should give 2 to 5 with one jump", () => {
      const expected = [2, 4];

      expect(utils.range(2, input, 2)).toStrictEqual(expected);
    });
  });

  // it("should pick a choice from an array", () => {
  //   const input = [1, 2, 3, 4, 5];

  //   expect(utils.randomChoice(input)).toContain
  // })

  it("should return # with 6 trailing numbers", () => {
    expect(utils.randomColor()).toMatch(/^#\d{6}$/);
  });
});
