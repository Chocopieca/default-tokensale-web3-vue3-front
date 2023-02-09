<template>
  <BaseModal :modalSize="'small'">
    <div class="text-align-center h-100">
      <div
        :class="getFontSize(700, [36, 36, 32, 32, 32])"
        class="text-uppercase"
      >Something went wrong.</div>
      <div>{{ options.message }}</div>
    </div>
  </BaseModal>
</template>

<script>
import {useModalStore} from "@/stores/modal";
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "ErrorModal",
  setup() {
    const modalStore = useModalStore();
    const options = computed(() => modalStore.options)
    return {options};
  },
}
)</script>

<style scoped lang="scss">
.booked-movie {
  background: #373737;
  box-shadow: inset #000000 0 0 20px 3px;
  border: 2px solid white;
  padding: 20px 60px;
}
</style>
