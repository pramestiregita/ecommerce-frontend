const initialState = {
  data: [],
  summary: 0,
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CHECKOUT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'CHECKOUT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
      };
    }
    case 'GET_CHECKOUT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CHECKOUT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_CHECKOUT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.results,
        // summary: action.payload.data.summary,
      };
    }
    default: {
      return state;
    }
  }
};
