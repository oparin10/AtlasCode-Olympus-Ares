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
  isLoading: boolean;
  error: Array<AuthenticationError | null>;
};

let initialState: AuthenticationInitialState = {
  isAuth: false,
  authUser: {
    userDisplayName: null,
    userEmail: null,
    userRole: null,
  },
  isLoading: false,
  error: [],
};

if (localAuthData) {
  initialState = { ...initialState, isAuth: true };
} else {
  initialState = { ...initialState, isAuth: false };
}

export const authenticationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
