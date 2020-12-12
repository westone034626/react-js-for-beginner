# axios에 대해 알게 된 것들

1. axios 객체 생성
   아래와 같이 axios를 api로 instance화 시키면서 얻는 장점은?
   baseURL, api_key, language등 공통적인 값들에 대해서 굳이 또 다시 설정해야할 필요가 없으니 api라는 형태로 틀을 뽑아놓는 것이다. 이렇게하면 요구되는 params에 따라 내용이 다 다른 api request를 만들 때 코드의 재사용을 할 수 있게 된다.

   ```
   const api = axios.create({
       baseURL: "https://api.themoviedb.org/3/",
       params: {
           api_key: "blablabla",
           language: "en-US"
       }
   });
   ```

2. export const moviesApi = {}, export const tvApi = {}
   처음으로 export default blabla 형태가 아닌 export const blabla를 사용했다. 해당 코드는 api.js에 저장되어있는데 default 키워드가 없으므로 api.js를 import해오는 곳에서는 moviesApi or tvApi를 명시해야하겠지. 아직 정확한 문법은 모르겠지만 es6문법 강의를 들을 때 있었던 내용이라 어렴풋이 기억이 난다.

3. moviesApi의 내부
   nowPlaying, upcoming, popular, movieDetail, search처럼 다양한 함수형 property들이 존재한다. 이 함수들은 movie api의 특정 조건에 따라 request하고 그 결과를 반환해준다.

   ```
   export const moviesApi = {
   nowPlaying: () => api.get("movie/now_playing"),
   upcoming: () => api.get("movie/upcoming"),
   popular: () => api.get("movie/popular"),
   movieDetail: (id) =>
       api.get(`movie/${id}`, {
       params: {
           append_to_response: "videos",
       },
    };
   search: (term) =>
       api.get("search/movie", {
       params: {
           query: encodeURIComponent(term),
       },
   };
   ```

4. movieDeail, search 함수 자세히 들여다보기
   movieDetail와 search는 params가 더 필요하다. 그래서 다른 함수들과 다르게 api.get 부분에 추가적인 parameter가 들어간다. 아래와 같이 {} 사이에 params를 넣는 방식으로 넣어야한다. 그러면 위에서 정의해놓은 api에 추가적으로 params가 더해진다.

   ```
   // 중략

   movieDetail: (id) =>
       api.get(`movie/${id}`, {
       params: {
           append_to_response: "videos",
       },
    };
   search: (term) =>
       api.get("search/movie", {
       params: {
           query: encodeURIComponent(term),
       },
   };

   // 중략
   ```

5. append_to_response, encodeURIComponent
   각각 detail, search에 존재하는 것들인데 먼저 append_to_response는 필수는 아니다. 하지만 특정 movie or tv에 대한 detail request를 할 시 트레일러 영상이나 썸네일을 얻기 위해서 설정해줘야하는 property이다.

   encodeURIComponent를 설명하기에 앞서 query부터 말하자면 query는 search request에 필요한 필수적인 property이다. 인자로 term을 받고 query: term을 해도 되겠지만 사실 안된다. 왜냐하면 term안에 공백이라거나 특수문자가 들어가면 URI로 전달될 때 값이 변형되기 때문이다. 그래서 encode를 해줘야하는데 그때 필요한 함수가 encodeURIComponent인 것이다.
