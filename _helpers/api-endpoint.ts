/* eslint-disable prettier/prettier */
function server() {
  return "https://mdw-backend-todo.vercel.app/api/api/";}

export const ApiConfigs = {
  base_url: server(),
  /* -------------------------------- */

  apis: {
    auth: {
      user: { register: "user/create" },
      login: "user/login",
      currentUserLogin: "user",
    },

    user:{
      getAllTask:"read",
    }
  },
};
