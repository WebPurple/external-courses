// const requestURL = 'https://jsonplaceholder.typicode.com/users/';

function someFetch(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        resolve(xhr.response);
      }
      reject(xhr.response);
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    if (body === null) {
      xhr.send();
    } else {
      xhr.send(JSON.stringify(body));
    }
  });
}

module.exports = someFetch;
