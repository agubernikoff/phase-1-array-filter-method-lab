function findMatching(drivers, string) {
  return drivers.filter(function (x) {
    return x.toLowerCase() == string.toLowerCase();
  });
}
function fuzzyMatch(drivers, letters) {
  const newArr = drivers.filter((x) => x.startsWith(letters));
  return newArr;
}
function matchName(drivers, str) {
  return drivers.filter((x) => x.name === str);
}
