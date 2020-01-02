const initialState = {
  content: {}
};

function stockReducer(state = initialState, action) {
  switch (action.type) {  
    case 'ADD_TITLE':
      const {content} = action.payload;
      console.log(content);
      return {...state, content};
    default:
      return state;
  }
}

export default stockReducer;
