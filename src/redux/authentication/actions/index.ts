import { RootStateOrAny } from "react-redux";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { auth as FirebaseAuth, db as Firestore } from "../../../firebase";
import {
  CreateUserWithFieldsTypes,
  CREATE_USER_WITH_FIELDS_START,
  LoginUserActionTypes,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LogoutUserActionTypes,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
} from "../../types";

export const loginUser = (
  email: string,
  password: string
): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => {
  return (dispatch: Dispatch<LoginUserActionTypes>) => {
    dispatch({
      type: LOGIN_USER_START,
    });

    FirebaseAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: result.user,
        });
      })
      .catch((error) => {
        let errorMessage: string = error.message.toString();

        dispatch({
          type: LOGIN_USER_FAIL,
          error: errorMessage,
        });
      });
  };
};

export const logoutUser = (): ThunkAction<
  void,
  RootStateOrAny,
  unknown,
  Action<string>
> => {
  return (dispatch: Dispatch<LogoutUserActionTypes>) => {
    dispatch({
      type: LOGOUT_USER_START,
    });

    FirebaseAuth.signOut()
      .then(() => {
        dispatch({ type: LOGOUT_USER_SUCCESS });
      })
      .catch((error) => {
        let errorMessage: string = error.message;

        dispatch({ type: LOGOUT_USER_FAIL, error: errorMessage });
      });
  };
};

export const createUserWithFields = (
  email: string,
  password: string,
  displayName: string,
  userRole: string,
  firstName: string,
  lastName: string,
  userTitle: string
) => {
  return (dispatch: Dispatch<CreateUserWithFieldsTypes>) => {
    dispatch({ type: CREATE_USER_WITH_FIELDS_START });
  };
};
