// import Swal from "sweetalert2";

import { types } from "../types/types";
import { startLoading, finishLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    setTimeout(() => {
      dispatch(
        login(
          "e0708c34-c87b-4686-91b0-f7c0086a6193",
          "Hugs",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUsIm5hbWUiOiJIdWdvIEFMY2FsYSIsInJvbCI6IlVTRVIiLCJpYXQiOjE2Mjk5OTUxNjksImV4cCI6MTYzMDAwMjM2OX0.VV4VwJobKkzwszh3ICY-84rjfRIp4J5DPBSfTv2Pr-4"
        )
      );
      dispatch(finishLoading());
      localStorage.setItem(
        "Token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUsIm5hbWUiOiJIdWdvIEFMY2FsYSIsInJvbCI6IlVTRVIiLCJpYXQiOjE2Mjk5OTUxNjksImV4cCI6MTYzMDAwMjM2OX0.VV4VwJobKkzwszh3ICY-84rjfRIp4J5DPBSfTv2Pr-4"
      );
    }, 2000);
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(
        login(
          "e0708c34-c87b-4686-91b0-f7c0086a6193",
          "Hugs",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUsIm5hbWUiOiJIdWdvIEFMY2FsYSIsInJvbCI6IlVTRVIiLCJpYXQiOjE2Mjk5OTUxNjksImV4cCI6MTYzMDAwMjM2OX0.VV4VwJobKkzwszh3ICY-84rjfRIp4J5DPBSfTv2Pr-4"
        )
      );
      dispatch(finishLoading());
      localStorage.setItem(
        "Token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUsIm5hbWUiOiJIdWdvIEFMY2FsYSIsInJvbCI6IlVTRVIiLCJpYXQiOjE2Mjk5OTUxNjksImV4cCI6MTYzMDAwMjM2OX0.VV4VwJobKkzwszh3ICY-84rjfRIp4J5DPBSfTv2Pr-4"
      );
    }, 2000);
  };
};

export const login = (uid, displayName, token) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    token,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
