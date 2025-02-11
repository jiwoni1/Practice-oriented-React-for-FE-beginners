// import axios from "axios";
import { selector } from "recoil";

// import mainApi from "../../services/apis/mainApi";
import getSurvey from "../../services/getServey";

const surveyState = selector({
  key: "surveyState", // unique ID (with respect to other atoms/selectors)
  get: async () => {
    // const res = await mainApi.get(
    //   `http://localhost:3001/surveys/${window.location.pathname.split("/")[2]}`
    // );
    // api 코드 분리

    const res = await getSurvey(window.location.pathname.split("/")[2]); // await를 붙여줘야함

    return res.data;
  },
});

export default surveyState;
