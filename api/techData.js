// import client from '../utils/client';

const endpoint = 'https://vocabyoulary-490c6-default-rtdb.firebaseio.com';

const getTech = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getTech;
