// 매번 api 주소를 다 쓰기가 번거로움 -> 공식 문서에 나와있는 defaultUrl 또는
// 인스턴스를 생성해서 사용 (api 주소가 여러개인인 경우)
import axios from "axios";

const mainApi = axios.create({
  baseURL: "http://localhost:3001",
});

export default mainApi;
