// 일반적으로 api 통신을 하는 함수들을 services라는 폴더에 그룹핑함.
// import axios from "axios";
import mainApi from "./apis/mainApi";

// axios.defaults.baseURL = "http://localhost:3001/answers";

function postAnswers(surveyId, data) {
  mainApi.post("/answers", { surveyId, data });
}

export default postAnswers;
