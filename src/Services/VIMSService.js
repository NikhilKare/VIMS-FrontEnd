import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/policies');
  };

  export default {getAll};