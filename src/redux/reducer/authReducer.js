import {
  HandleLoginApi,
  HandleUserPostsApi,
  HandleUserStoriesApi,
} from "../type/authType";

const initialState = {
  apiStatus: "",
  jwtToken: "",
  errorMsg: "",
  username: "",
  password: "",
  userstories: [],
  userposts: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HandleLoginApi:
      return { ...state, ...payload };
    case HandleUserStoriesApi:
      return { ...state, userstories: payload.userstories, ...payload };
    case HandleUserPostsApi:
      return { ...state, userposts: payload.userposts, ...payload };
    default:
      return state;
  }
};
export default reducer;
