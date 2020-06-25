import qs from "qs";
import router from "@/router";
import cookies from "vue-cookies";

// Cookie 값이 없으면 어차피 null이나 undefined가 나올 것
const state = { token: cookies.get("imgur_token") };

const getters = { isLoggedIn: (state) => !!state.token };

const mutations = {
  setToken: (state, token) => (state.token = token),
};

const actions = {
  logout: ({ commit }) => {
    // commit만 쓰고자 할 때, destructuring: context => {commit}
    // state.token 값 null로 바꾸기
    commit("setToken", null); // params = (함수명, param)
    cookies.remove("imgur_token");
  },
  login: () => {
    const ROOT_URL = "https://api.imgur.com";
    const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    const fullUrl = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;

    window.location.href = fullUrl;
  },
  finalizeLogin: ({ commit }, data) => {
    const token = qs.parse(data.replace("#", ""))["access_token"];
    commit("setToken", token);
    cookies.set("imgur_token", token);
    router.push("/");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
