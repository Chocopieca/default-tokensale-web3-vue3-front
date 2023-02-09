<template>
  <BaseModal :modalSize="'small'">
    <div class="flex-center flex-column">
      <img
        class="w-100"
        src="@/assets/icon/metamask_icon.svg"
        alt="metamask"
      >
      <div class="size24-weight700 mb-5 text-uppercase text-align-center">
        <div>Connect your</div>
        <div>metamask account</div>
      </div>
      <BaseButton :buttonSize="breakpointWidth > 960 ? 'middle' : 'small'" class="flex-center" @buttonClick="connectMetamask">Connect wallet</BaseButton>
    </div>
  </BaseModal>
</template>

<script>
import {defineComponent, computed} from "vue";
import {useWeb3Store} from "@/stores/web3";
import {useModalStore} from "@/stores/modal";
import metamaskImg from "@/assets/img/metamask.svg";

export default defineComponent({
  name: "MetamaskConnectModal",
  setup() {
    const modalStore = useModalStore();
    const web3Store = useWeb3Store();

    const options = computed(() => modalStore.options);

    async function hideModal() {
      await modalStore.hideModal();
    }

    async function showModal(payload) {
      await modalStore.showModal(payload);
    }

    async function ConnectToMetamask(payload) {
      try {
        await web3Store.ConnectToMetamask(payload);
      } catch (e) {
        console.log('ConnectToMetamask failed: ', e)
      }
    }

    return {
      options, web3Store,
      metamaskImg,
      hideModal, showModal, ConnectToMetamask,
    };
  },
  methods: {
    async connectMetamask() {
      try {
        await this.ConnectToMetamask();
        // if (this.options?.route) {
        //   this.$router.push(this.options.route);
        // }
        await this.hideModal();
      } catch (e) {
        await this.hideModal();
        await this.showModal({
          type: 'ErrorModal',
          options: {
            message: e
          }
        })
      }
    }
  }
}
)</script>

<style scoped lang="scss">
.metamask-img {
  max-width: 130px;
  max-height: 120px;
}
</style>
