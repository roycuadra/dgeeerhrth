import axios from "axios";

const state = {
  designer: {
    loading: true
  }
};

const getters = {
  designer: state => state.designer
};

const actions = {
  async loadDesigner({ commit }) {
    commit("setDesignerLoading", true);

    const response = await axios.get("/api/dashboards/designer");
    response.data.data.loading = false;

    commit("setDesigner", response.data.data);
  }
};

const mutations = {
  setDesigner: (state, designer) => {
    state.designer = designer;
  },
  setDesignerLoading: (state, loading) => {
    state.designer.loading = loading;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
