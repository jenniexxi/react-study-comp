import { axiosInstance } from "./api";

// user Info
export type WriteInfo = {
  title: string;
  content: string;
  paytype: string;
  store: string;
  userseq: string;
  type: string;
  : string;
};

const WriteAPI = {
  getUserInfo: async (): Promise<WriteInfo> => {
    const resp = await axiosInstance.get("/user");
    return resp.data;
  }
};

export default WriteAPI;







export type List = {
    boardid: string;
    title: string;
    content: string;
    name: string;
    profileimage: string;
    like: number;
    viewer: number;
    type: string;
    createtime: string;
  };
  
  // post 방식
  export const getList = async (
    category: string,
    tab: string
  ): Promise<List[]> => {
    // Post는 body 를 통해서 데이터를 전달한다.
    // get은 주소를 통해서 전달한다.
    const body = { category: category, tab: tab };
  
    const result = await axiosInstance.post(`/list`, body);
  
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
  
    return result.data;
  };