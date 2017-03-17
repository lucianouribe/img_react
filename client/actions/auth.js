export const refreshLogin = (user = null) => {
  return (dispatch) => {
    if (user) {
      dispatch(setUser(user))
    } else {
      $.ajax({
        url: 'api/users/info',
        type: 'GET',
        dataType: 'JSON'
      }).done( user => {
        // console.log('you have hitted setuser');
        // console.log(user);
        dispatch(setUser(user));
      }).fail( err => {
        console.log(err)
      });
    }
  }
}

export const logout = (router) => {
  // console.log('logout dispatcher arrived');
  return (dispatch) => {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE'
    }).done( () => {
      dispatch(setUser())
    }).fail( err => {
      console.log(err)
    })
  }
}

const setUser = (user = {}) => {
  return { type: 'USER', ...user }
}
