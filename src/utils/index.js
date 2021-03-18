export const snippet = (string, stopAt) => {
  let number = 100;

  if (stopAt) number = stopAt;
  return string.slice(0, stopAt) + "...";
};

// Helper
export const alias = (userid) => {
  return `@${userid}`;
};

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

export const randomChoice = (arr) => {
  const size = arr.length;
  return arr[Math.floor(Math.random() * size)];
};

export const randomColor = () => {
  return (
    "#" +
    Math.random()
      .toString()
      .slice(2, 8)
  );
};
