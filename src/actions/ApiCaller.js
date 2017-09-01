import axios from 'axios';
import requestConfig from './ApiConfig.js';

var createInstance = () => {
  var config = requestConfig;
  
  config = {
    ...config,
    validateStatus: (status) => {
      return status === 200;
    },
  };

  var instance = new axios.create(config);
  return instance;
}

const ApiCaller = createInstance();

export default ApiCaller;
