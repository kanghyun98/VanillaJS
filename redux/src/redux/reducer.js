const initialState = {
  a: 10,
  b: 20,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_A':
      return { ...state, a: action.payload };
    case 'CHANGE_B':
      return { ...state, b: action.payload };
    default:
      return state;
  }
};

export default reducer;
