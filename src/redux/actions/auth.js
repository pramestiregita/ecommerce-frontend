export default {
  login: (data) => ({
    type: 'AUTH_USER',
    payload: data,
  }),
  logout: () => ({
    type: 'LOGOUT_USER',
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
