import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () =>
    ({
      isLoading: false,
      isShow: false,
      modalType: "",
      options: null,
      startedStage: 1,
      completedStage: null,
    }),
  getters: {},
  actions: {
    setLoader(data) {
      this.isLoading = data;
    },
    showModal(data) {
      this.modalType = data.type;
      this.options = data.options;
      this.isShow = true;
    },
    hideModal() {
      this.isShow = false;
      this.modalType = "";
      this.options = null;
    },
    setUnclicable() {
      this.options = {
        ...this.options,
        isUnclosable: true,
      };
    },
    setStartedStage(val) {
      this.startedStage = val;
    },
    setCompletedStage(val) {
      this.completedStage = val;
    },
  },
});
