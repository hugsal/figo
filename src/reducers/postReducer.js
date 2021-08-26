import { types } from "../types/types";

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getPost:
      return {
        post: action.payload,
      };

    case types.addLike:
      return {
        ...state,
        post: state.post.map((postal) => {
          if (postal.id === action.payload) {
            postal.likes += 1;
          }
          return postal;
        }),
      };
    default:
      return state;
  }
};
