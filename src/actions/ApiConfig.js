const prodConfig = {
  baseURL: 'https://api.github.com',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3+json',
  },
}

const devConfig = {
  baseURL: 'https://api.github.com',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3+json',
  },
}

const requestConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default requestConfig;
