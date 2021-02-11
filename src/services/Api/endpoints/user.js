export default (client) => ({
  login: (params) => client.post('/login', params),
});
