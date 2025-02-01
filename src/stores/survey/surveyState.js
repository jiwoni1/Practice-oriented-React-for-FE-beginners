import axios from "axios";
import { selector } from "recoil";

const surveyState = selector({
  key: "surveyState", // unique ID (with respect to other atoms/selectors)
  get: async () => {
    const res = await axios.get(
      `http://localhost:3001/surveys/${window.location.pathname.split("/")[2]}`
    );

    return res.data;
  },
});

export default surveyState;
