/**
 *  Creates a snippet of the original string.
 *
 *  @param {string} string The original string that needs to be snipetted.
 *  @param {number} stopAt The position of characters that will be cut until.
 *  @returns The sliced strings plus "..."
 */
export const snippet = (string, stopAt = 100) => {
  return string.slice(0, stopAt) + "...";
};

/**
 *  Add a symbol to signifies userid (@)
 *
 *  @param {string} userid
 *  @returns @ + userid
 */
export const alias = (userid) => {
  return `@${userid}`;
};

/**
 *  A Python range function duplicate.
 *  Generates from start number to stop number a list in between.
 *
 *  @param {number} start The starting number of the number array
 *  @param {number} stop The stopping number of the number array
 *  @param {number} step Increment or decrement by specified amount instead of default.
 *  @returns A list of numbers
 */
export const range = function(start, stop, step) {
  if (typeof stop == "undefined") {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step == "undefined") {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
};

/**
 *  Python random.choice function duplicate.
 *  Randomly selects one item from the provided array and returns.
 *
 *  @param {Array<>} arr
 *  @returns Items in array
 */
export const randomChoice = (arr) => {
  const size = arr.length;
  return arr[Math.floor(Math.random() * size)];
};

/**
 *  Generates random hash color code.
 *  @returns Hash color code
 */
export const randomColor = () => {
  return (
    "#" +
    Math.random()
      .toString()
      .slice(2, 8)
  );
};
