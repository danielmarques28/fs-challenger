import http from './http';

function login(body) {
  const url = `/users/login`;
  return http.post(url, body);
}

function index() {
  const url = `/users/all_users_except_current_user`;
  return http.get(url);
}

function getRemainingBrooches() {
  const url = `/users/remaining_brooches`;
  return http.get(url);
}

function getAllInteractions() {
  const url = `/users/all_interactions`;
  return http.get(url);
}

const endpoints = { login, index, getRemainingBrooches, getAllInteractions };

export default endpoints;
