<template v-if="isShow && modalType">
  <transition>
    <SuccessesModal v-if="modalType === 'SuccessesModal'" />
    <ErrorModal v-else-if="modalType === 'ErrorModal'" />
    <DynamicModal v-else-if="modalType === 'DynamicModal'" />
    <ConfirmationModal v-else-if="modalType === 'ConfirmationModal'" />
    <MetamaskConnectModal v-else-if="modalType === 'MetamaskConnectModal'" />
    <BasePayStatusDialog v-else-if="modalType === 'BasePayStatusDialog'" />
  </transition>
</template>

<script>
import { useModalStore } from "@/stores/modal";
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "IndexModal",
  setup() {
    const modalStore = useModalStore();
    const isShow = computed(() => modalStore.isShow);
    const modalType = computed(() => modalStore.modalType);
    return {
      isShow,
      modalType,
    };
  },
});
</script>

<style scoped lang="scss"></style>
