function server() {
  return "http://192.168.1.16:8000/api/";}

export const ApiConfigs = {
  base_url: server(),
  /* -------------------------------- */

  apis: {
    auth: {
      user: { register: "users" },
      login: "user/login",
    },

    user:{
      getCurrentAccessList:"users/access/getCurrentAccessList",
    }
  },
};
