function getMostActiveDevs(requestData) {
  const url = `https://api.github.com/repos/${requestData.userId}/${requestData.repoId}/commits?per_page=100`;
  const startDate = new Date(new Date() - requestData.days * 24 * 60 * 60 * 1000);
  console.log(startDate);
  return fetch(url)
    .then(result => result.json())
    .then(result => arrrHandler(result, startDate.toJSON()));
}

function arrrHandler(arr, startDate) {
  const authors = {};
  const calculatedAuthors = [];
  arr
    .map(({ commit: { author } }) => author)
    .filter(({ date }) => date >= startDate)
    .forEach(({ name, email }) => {
      if (authors.hasOwnProperty([email])) {
        authors[email].count += 1;
      } else {
        authors[email] = { name: name, count: 1 };
      }
    });

  for (const elem in authors) {
    calculatedAuthors.push({ email: elem, name: authors[elem].name, count: authors[elem].count });
  }
  const maxCommits = Math.max.apply(
    null,
    calculatedAuthors.map(el => el.count),
  );
  const result = calculatedAuthors.filter(({ count }) => count >= maxCommits);
  return result;
}
// https://api.github.com/repos/facebook/facebook-ios-sdk
getMostActiveDevs({ days: 30, userId: 'facebook', repoId: 'facebook-ios-sdk' });
