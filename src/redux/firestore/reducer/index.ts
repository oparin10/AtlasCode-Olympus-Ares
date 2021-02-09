type FirestoreInitialState = {
  errors: Array<any>;
  content: Array<any>;
};

let initialState: FirestoreInitialState = {
  errors: [],
  content: [],
};

export const firestoreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
