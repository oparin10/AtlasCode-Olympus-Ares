import {
  AuthenticationActionTypes,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
} from "../../types";

const localAuthData: boolean = JSON.parse(
  localStorage.getItem("localAuth") || "{}"
);

type AuthenticationError = {
  error: string;
  message: string;
};

type AuthenticationUser = {
  userDisplayName: string | null;
  userEmail: string | null;
  userRole: string | null;
};

type AuthenticationInitialState = {
  isAuth: boolean;
  authUser: AuthenticationUser;
  error: Array<AuthenticationError | null>;
};

let initialState: AuthenticationInitialState = {
  isAuth: false,
  authUser: {
    userDisplayName: null,
    userEmail: null,
    userRole: null,
  },
  error: [],
};

if (localAuthData) {
  initialState = { ...initialState, isAuth: true };
} else {
  initialState = { ...initialState, isAuth: false };
}

export const authenticationReducer = (
  state = initialState,
  action: AuthenticationActionTypes
) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return { ...state };

    case LOGIN_USER_SUCCESS:
      return { ...state, isAuth: true };

    case LOGIN_USER_FAIL:
      return { ...state, error: action.error };

    case LOGOUT_USER_START:
      return { ...state };

    case LOGOUT_USER_SUCCESS:
      return { ...state, isAuth: false };

    case LOGOUT_USER_FAIL:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
