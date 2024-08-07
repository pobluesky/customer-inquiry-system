const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://배포주소/api';

export default BASE_URL;