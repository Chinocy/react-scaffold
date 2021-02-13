export default (client) => ({
  login: (params) => client.post('/login', params),
  signUp: (params) => client.post('sign-up', params),
});
