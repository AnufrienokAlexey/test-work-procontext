import { createStore } from "vuex";
import lists from "@/store/modules/lists";

export default createStore({
  modules: {
    lists,
  },
});
