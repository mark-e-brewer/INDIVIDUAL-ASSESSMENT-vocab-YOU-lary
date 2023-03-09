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
      } else {
        resolve([data]);
      }
    })
    .catch(reject);
});

const getSingleTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/term/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

const createTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/term.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/term/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getTerms,
  getSingleTerm,
  createTerm,
  updateTerm,
};
