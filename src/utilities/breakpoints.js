export const getBreakPoint = (query) => {
  let px;
  switch (query) {
    case "mobile":
      px = 768;
      break;
    case "tablet":
      px = 1070;
      break;
  }
  return px;
};
