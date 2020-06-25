// import qs from "qs";
// import router from "@/router";
import axios from "axios";

const state = { images: [] };

const getters = { allImages: (state) => state.images };

const mutations = { setImages: (state, images) => (state.images = images) };

const actions = {
  async fetchImages({ rootState, commit }) {
    // index를 부르는 것 = {rootState}
    const fullUrl = `https://api.imgur.com/3/account/me/images`;
    const config = {
      headers: {
        Authorization: `Bearer ${rootState.auth.token}`,
      },
    };
    try {
      const response = await axios.get(fullUrl, config);
      commit("setImages", response.data.data);
    } catch {
      (err) => console.error(err.response);
    }
  },
  uploadImages() {},
};

export default {
  state,
  getters,
  mutations,
  actions,
};
