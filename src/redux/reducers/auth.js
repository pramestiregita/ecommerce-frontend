const initialState = {
  isLogin: false,
  isError: false,
  token: '',
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'AUTH_USER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'AUTH_USER_FULFILLED': {
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        token: action.payload.data.token,
        isLoading: false,
        isLogin: true,
        alertMsg: 'Successfully login',
      };
    }
    case 'LOGOUT_USER': {
      localStorage.removeItem('token');
      return {
        isLogin: false,
        isError: false,
        token: '',
        alertMsg: 'Logout Successfully',
      };
    }
    case 'SET_TOKEN': {
      return {
        ...state,
        isLogin: true,
        token: action.payload,
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        alertMsg: '',
      };
    }
    case 'SIGN_UP_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SIGN_UP_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'SIGN_UP_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: 'Create user successfully',
      };
    }
    default: {
      return state;
    }
  }
};
