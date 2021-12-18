function fetch(url) {
  return new Promise((succed, fail) => {
    console.log(url);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => succed(xhr.response);
    xhr.onerror = () => fail(xhr.status);
    xhr.ontimeout = () => {
      console.log(`${xhr.status}: ${xhr.statusText}`);
    };
    xhr.send();
  });
}

module.export = fetch;
