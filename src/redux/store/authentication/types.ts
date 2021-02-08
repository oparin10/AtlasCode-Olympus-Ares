// export const ACTION_TYPE = {
//   LOGIN_USER_START: "LOGIN_USER_START",
//   LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
//   LOGIN_USER_FAIL: "LOGIN_USER_FAIL",
//   // ------------------------------- \\
//   LOGOUT_USER_START: "LOGOUT_USER_START",
//   LOGOUT_USER_SUCCESS: "LOGOUT_USER_SUCCESS",
//   LOGOUT_USER_FAIL: "LOGOUT_USER_FAIL",
//   // ------------------------------- \\
//   CREATE_USER_START: "CREATE_USER_START",
//   CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
//   CREATE_USER_FAIL: "CREATE_USER_FAIL",
//   // ------------------------------- \\
//   CREATE_USER_WITH_FIELDS_START: "CREATE_USER_WITH_FIELDS_START",
//   CREATE_USER_WITH_FIELDS_SUCCESS: "CREATE_USER_WITH_FIELDS_SUCCESS",
//   CREATE_USER_WITH_FIELDS_FAIL: "CREATE_USER_WITH_FIELDS_FAIL",
// };

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";
export const LOGOUT_USER_START = "LOGOUT_USER_START";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAIL = "LOGOUT_USER_FAIL";
export const CREATE_USER_WITH_FIELDS_START = "CREATE_USER_WITH_FIELDS_START";
export const CREATE_USER_WITH_FIELDS_SUCCESS =
  "CREATE_USER_WITH_FIELDS_SUCCESS";
export const CREATE_USER_WITH_FIELDS_FAIL = "CREATE_USER_WITH_FIELDS_FAIL";

interface CreateUserWithFieldsStart {
  type: typeof CREATE_USER_WITH_FIELDS_START;
}

interface CreateUserWithFieldsSuccess {
  type: typeof CREATE_USER_WITH_FIELDS_SUCCESS;
}

interface CreateUserWithFieldsFail {
  type: typeof CREATE_USER_WITH_FIELDS_FAIL;
  error: string;
}

interface LoginUserActionStart {
  type: typeof LOGIN_USER_START;
}

interface LoginUserActionSuccess {
  type: typeof LOGIN_USER_SUCCESS;
  payload: object | null | any;
}

interface LoginUserActionFail {
  type: typeof LOGIN_USER_FAIL;
  error: string;
}

interface LogoutUserActionStart {
  type: typeof LOGOUT_USER_START;
}

interface LogoutUserActionSuccess {
  type: typeof LOGOUT_USER_SUCCESS;
}

interface LogoutUserActionFail {
  type: typeof LOGOUT_USER_FAIL;
  error: string;
}

export type CreateUserWithFieldsTypes =
  | CreateUserWithFieldsStart
  | CreateUserWithFieldsSuccess
  | CreateUserWithFieldsFail;

export type LogoutUserActionTypes =
  | LogoutUserActionStart
  | LogoutUserActionSuccess
  | LogoutUserActionFail;

export type LoginUserActionTypes =
  | LoginUserActionStart
  | LoginUserActionSuccess
  | LoginUserActionFail;

export type AuthenticationActionTypes =
  | CreateUserWithFieldsTypes
  | LogoutUserActionTypes
  | LoginUserActionTypes;
