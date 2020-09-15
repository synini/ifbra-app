import Vue from "vue";
import Vuex from "vuex";
import evaluation from "./modules/evaluation";
import score from "./modules/score";
import theme from "./modules/theme";
import personal from "./modules/personal";
import bodyFunctions from "./modules/bodyFunctions";
import fuzzy from "./modules/fuzzy";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    evaluation,
    score,
    theme,
    personal,
    bodyFunctions,
    fuzzy
  }
});
