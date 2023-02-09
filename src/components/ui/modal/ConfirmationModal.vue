<template>
  <BaseModal :modalSize="'small'">
    <div>
      <div class="mb-5 size24-weight400 text-center text-uppercase">
        {{ options.title }}
      </div>
      <BaseButton
        buttonColor="#5965D1"
        :disabled="isLoading"
        class="mb-5"
        @click="onConfirm"
      >
        Ok
      </BaseButton>
      <BaseButton
        buttonColor="#CE4848"
        :disabled="isLoading"
        class="mb-5"
        @click="hideModal"
      >
        Close
      </BaseButton>
    </div>
  </BaseModal>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useModalStore } from "@/stores/modal";

export default defineComponent({
  name: "ConfirmationModal",
  data() {
    return {
      isLoading: false,
    };
  },
  setup() {
    const modalStore = useModalStore();
    const options = computed(() => modalStore.options);

    async function hideModal() {
      await modalStore.hideModal();
    }

    return {
      options,
      hideModal,
    };
  },
  methods: {
    async onConfirm() {
      try {
        this.isLoading = true;
        await this.options.method();
      } catch (e) {
        console.log("Confirm error: ", e);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.booked-movie {
  background: #373737;
  box-shadow: inset #000000 0 0 20px 3px;
  border: 2px solid white;
  padding: 20px 60px;
}
</style>
