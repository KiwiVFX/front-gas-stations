import axios from "axios";

export function initAllGasStations({ commit }) {
  try {
    axios
      // .get(
      //   'https://api.tel-aviv.gov.il/gis/Layer?layerCode=548'
      // )
      .get("https://gas-stations-back.onrender.com/")
      .then((res) => {
        commit("ALL_GAS_STATIONS", res.data);
      });
  } catch (error) {
    this.$q.notify({
      color: "red-5",
      progress: true,
      textColor: "white",
      icon: "warning",
      position: "bottom-left",
      message: error.message,
    });
  }
}
export function changeProvider({ commit }, payload) {
  try {
    commit("CHANGE_PROVIDER", payload);
    commit("START_LOADING");
  } catch (error) {
    this.$q.notify({
      color: "red-5",
      progress: true,
      textColor: "white",
      icon: "warning",
      position: "bottom-left",
      message: error.message,
    });
  }
}
