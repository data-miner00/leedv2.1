export const snippet = (string, stopAt) => {
  let number = 100;

  if (stopAt) number = stopAt;
  return string.slice(0, stopAt) + "...";
};
