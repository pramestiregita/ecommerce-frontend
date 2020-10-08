const initialState = {
  isLogin: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER': {
      const { email, password } = action.payload;
      if (email === 'admin@mail.com' && password === '4321') {
        return {
          isLogin: true,
          isError: false,
          alertMsg: 'Login Succesfully!',
        };
      }
      return {
        isLogin: false,
        isError: true,
        alertMsg: 'Wrong email or password',
      };
    }
    case 'LOGOUT_USER': {
      return {
        isLogin: false,
        isError: false,
        alertMsg: 'Logout Successfully',
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
