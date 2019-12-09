export const state = () => ({
    name: null,
    status: true,
    token:null,
    chat:[]
  });

  export const getters = {
    IS_LOGGED: state => {
      if (state.token) return true;
      return false;
    },
    GET_TOKEN: state => state.token,
    GET_CURRENT_USER_NAME: state => state.name,
  };
  
  export const mutations = {
    SET_USER: (state, token) => {
      state.token = token;
    },
    SET_CURRENT_USER_NAME: (state, name) => {
      state.name = name;
    },
    SET_CHAT: (state, chat) => {
        state.chat.push(chat);
      },
      SET_STATUS: (state, status) => {
        state.status = status
      },
      CHANGE_STATUS:  (state) =>{
          if(state.status == true)
          {state.status= false}
          else{
            state.status = true
          }
      }
}