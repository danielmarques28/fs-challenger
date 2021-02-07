import http from './http';

function create(body) {
  const url = `/user_brooches`;
  return http.post(url, body);
}

const endpoints = { create };

export default endpoints;
