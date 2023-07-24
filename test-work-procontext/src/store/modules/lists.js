export default {
  state: {
    lists: [],
  },
  getters: {
    allLists(state) {
      return state.lists;
    },
  },
  mutations: {},
  actions: {
    async fecthLists(ctx) {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const lists = await res.json();
      ctx.commit("updateLists", lists);
    },
  },
  modules: {
    updateLists(state, lists) {
      state.lists = lists;
    },
  },
};
