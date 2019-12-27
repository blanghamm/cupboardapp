const initialState = {
  stocknumber: 0,
};

function stockReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('+1');
      return {...state, count: state.stocknumber + 1};
    case 'DECREMENT':
      console.log('-1');
      return {...state, count: state.stocknumber - 1};
    default:
      console.log(state);
      return state;
  }
}

export default stockReducer;
