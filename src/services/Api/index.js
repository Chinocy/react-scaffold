import apisauce from 'apisauce';
import endpoints from './endpoints';

const client = apisauce.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
});

const defaultParams = {};
const endpointsFunctions = {};

const setToken = (token) =>
  client.setHeader('Authorization', `Bearer ${token}`);

const unsetToken = () => client.deleteHeader('Authorization');

const setMultipart = () =>
  client.setHeader('Content-Type', 'multipart/form-data');

Object.keys(endpoints).forEach((endpoint) => {
  endpointsFunctions[endpoint] = endpoints[endpoint](client, defaultParams);
});

export default {
  setToken,
  unsetToken,
  setMultipart,
  ...endpointsFunctions,
};
