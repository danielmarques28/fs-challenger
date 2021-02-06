import http from './http';

function index() {
  const url = `/users`;
  return http.get(url);
}

function getRemainingBrooches(id) {
  const url = `/users/${id}/remaining_brooches`;
  return http.get(url);
}

function getAllInteractions(id) {
  const url = `/users/${id}/all_interactions`;
  return http.get(url);
}

const endpoints = { index, getRemainingBrooches, getAllInteractions };

export default endpoints;
