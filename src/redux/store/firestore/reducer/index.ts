type FirestoreInitialState = {
  errors: Array<any>;
  isLoading: boolean;
  content: Array<any>;
};

let initialState: FirestoreInitialState = {
  errors: [],
  isLoading: false,
  content: [],
};

export const firestoreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
