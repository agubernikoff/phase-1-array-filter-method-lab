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

const userInfo = {
  firstName: "Avi",
  lastName: "Flombaum",
  company: {
    name: "Flatbook Labs",
    jobTitle: "Developer Apprentice",
  },
  friends: [
    {
      firstName: "Nancy",
      lastName: "Burgess",
      company: {
        name: "Flatbook Labs",
        jobTitle: "Developer Apprentice",
      },
    },
    {
      firstName: "Corinna",
      lastName: "Jackson",
      company: {
        name: "Flatbook Labs",
        jobTitle: "Lead Developer",
      },
    },
  ],
};
console.log(userInfo.friends[0].company.name);
