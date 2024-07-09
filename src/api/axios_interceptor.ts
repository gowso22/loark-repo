import axios from 'axios'

const API_KEY = 'API키를 받으세요'

const instance = axios.create({
  baseURL :  "https://developer-lostark.game.onstove.com",

})


// 요청이 전달되기 전에 작업 수행 혹은 요청 오류가 있는 함수를 받음
instance.interceptors.request.use(
  //작업 수행
  (config) => {

    config.headers['accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${API_KEY}`;

    return config;
  },
  // 요청 오류
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);


// 응답 interceptor
// instance.interceptors.response.use(
//   (response) => {
   

//     return response;
//   },
//   async (error) => {

//     return Promise.reject(error);
//   }
// );

export default instance;