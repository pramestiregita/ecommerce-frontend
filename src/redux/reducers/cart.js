const initialState = {
  data: [],
  summary: 0,
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Login First',
      };
    }
    case 'ADD_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        alertMsg: action.payload.data.message,
      };
    }
    case 'GET_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        // alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.results,
        summary: action.payload.data.summary,
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
