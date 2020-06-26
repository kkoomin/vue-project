// import qs from "qs";
// import router from "@/router";
import axios from "axios";
import router from "@/router";

const state = { images: [] };

const getters = { allImages: (state) => state.images };

const mutations = { setImages: (state, images) => (state.images = images) };

const actions = {
  // 첫번째 인자 : context, 두번째 인자 : event
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
  uploadImages({ rootState }, event) {
    const fullUrl = "https://api.imgur.com/3/image";
    const images = event.target.files;
    const config = {
      headers: {
        Authorization: `Bearer ${rootState.auth.token}`,
      },
    };

    const promises = [];

    try {
      images.forEach((image) => {
        const formData = new FormData();
        formData.append("image", image);
        // FormData 형식에 image key value 값으로 보내야 함
        promises.push(axios.post(fullUrl, formData, config));
      });

      console.log(promises);

      Promise.all(promises).then(() => router.push("/"));
    } catch {
      (err) => console.error(err.response);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
