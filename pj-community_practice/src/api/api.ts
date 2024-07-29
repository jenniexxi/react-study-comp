import axios from "axios";

// axios url 써주기
export const axiosInstance = axios.create({
  // baseURL: "http://192.168.13.54:3030",
  baseURL: import.meta.env.VITE_API_SERVER,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// response 값의 형태
export type Category = {
  categorycd: string;
  cateogrynm: string;
};

// async (request parammeters 값을 넣어줌)
// get 방식
// (): Promise<Category[]> : promise를 쓴 이유는 함수가 리턴해주는 값의 타입을 말함
// getCategory

// type List

// post 방식
// getList

// Post는 body 를 통해서 데이터를 전달한다.
// get은 주소를 통해서 전달한다.

// response 예시
// 위쪽 export type List
// [
//   {
//     "boardid": "게시판 id",
//     "title": "제목",
//     "content": "글 작성 내용",
//     "name": "작성자 이름",
//     "profileimage": "http:// .....png",
//     "like": 0,
//     "viewer": 0,
//     "type": "0,1",
//     "createTime": "string"
//   }
// ]

// export 만 쓰는것은, 여러개의 api를 가져와야 할 수도 있기 때문에.
// object 방식으로 여러개 가져올 수도 있음.
// axios 로 하면 json 으로 안 바꿔줘도 됨
// fetch는 json 형식으로 안 주기 때문에 우리가 바꿔줘야함

// detail
// type ListContentsDetail

// getDetail

// deleteDetail