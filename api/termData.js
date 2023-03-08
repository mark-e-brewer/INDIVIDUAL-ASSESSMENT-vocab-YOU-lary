// import client from '../utils/client';

const endpoint = 'https://vocabyoulary-490c6-default-rtdb.firebaseio.com';

const getTerms = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/term.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
        console.warn(Object.values(data));
      } else {
        resolve([data]);
        console.warn(Object.values(data));
      }
    })
    .catch(reject);
});

export default getTerms;
