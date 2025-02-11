import mainApi from "./apis/mainApi";

function getSurvey(surveyId) {
  //   return mainApi.get(`/surveys/${window.location.pathname.split("/")[2]}`);
  // 근데 이 코드는 location에 의존성을 갖게됨
  // 그래서 인자로 따로 빼기
  return mainApi.get(`/surveys/${surveyId}`);
}

export default getSurvey;
