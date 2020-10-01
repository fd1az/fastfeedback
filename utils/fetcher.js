export const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-type': 'application/json', token }),
    credentials: 'same-origin'
  }).then((res) => res.json());
