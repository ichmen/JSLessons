function getUserASAP(userId) {
  const requests = serverList.map(el => createPromise(userId, el));
  // const promisRes = Promise.race(requests);

  return Promise.resolve(Promise.race(requests));
}

const serverList = ['https://server.com/us/', 'https://server.com/eu/', 'https://server.com/au/'];

const createPromise = (userId, server) =>
  new Promise(resolver => {
    setTimeout(() => {
      resolver({ userData: { name: 'Tom', age: 17 }, source: `${server}${userId}` });
    }, timeOut());
  });

function timeOut() {
  return Math.round(Math.random() * 2000 + 1000);
}
let a = getUserASAP('22');
let b = createPromise(22, 55);

// resolver({ userData: { name: 'Tom', age: 17 }, sourse: server + userId });
