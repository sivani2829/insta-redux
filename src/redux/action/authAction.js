import {
  Failure,
  HandleLoginApi,
  HandleUserPostsApi,
  HandleUserStoriesApi,
  Pending,
  Success,
  loginUrl,
  postUrl,
  storiesUrl,
} from "../type/authType";

export const LoginUserApi = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: HandleLoginApi,
      payload: { apiStatus: Pending },
    });

    try {
      let options = {
        method: "POST",
        body: JSON.stringify(payload),
      };
      const response = await fetch(loginUrl, options);
      const data = await response.json();

      if (response.ok) {
        dispatch({
          type: HandleLoginApi,
          payload: {
            apiStatus: Success,
            username: payload.username,
            password: payload.password,
            jwtToken: data.jwt_token,
          },
        });
      } else {
        dispatch({
          type: HandleLoginApi,
          payload: { apiStatus: Failure, errorMsg: data.error_msg },
        });
      }
    } catch (e) {
      dispatch({
        type: HandleLoginApi,
        payload: {
          apiStatus: Failure,
          errorMsg: "error while fetching resource",
        },
      });
    }
  };
};

export const userStoriesApi = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: HandleUserStoriesApi,
      payload: { apiStatus: Pending },
    });

    try {
      let options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      };
      const response = await fetch(storiesUrl, options);
      const data = await response.json();
      const userStoriesData = data.users_stories;

      if (response.ok) {
        dispatch({
          type: HandleUserStoriesApi,
          payload: {
            apiStatus: Success,
            userstories: userStoriesData,
          },
        });
      } else {
        dispatch({
          type: HandleUserStoriesApi,
          payload: { apiStatus: Failure, errorMsg: data.error_msg },
        });
      }
    } catch (e) {
      dispatch({
        type: HandleUserStoriesApi,
        payload: {
          apiStatus: Failure,
          errorMsg: "error while fetching resource",
        },
      });
    }
  };
};

export const userPostsApi = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: HandleUserPostsApi,
      payload: { apiStatus: Pending },
    });

    try {
      let options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      };
      const response = await fetch(postUrl, options);
      const data = await response.json();
      const userpostsData = data.posts;

      if (response.ok) {
        dispatch({
          type: HandleUserPostsApi,
          payload: {
            apiStatus: Success,
            userposts: userpostsData,
          },
        });
      } else {
        dispatch({
          type: HandleUserPostsApi,
          payload: { apiStatus: Failure, errorMsg: data.error_msg },
        });
      }
    } catch (e) {
      dispatch({
        type: HandleUserPostsApi,
        payload: {
          apiStatus: Failure,
          errorMsg: "error while fetching resource",
        },
      });
    }
  };
};
