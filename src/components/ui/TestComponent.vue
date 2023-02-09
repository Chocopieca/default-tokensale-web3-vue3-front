<template>
  <div class="text-align-center">{{ getContent }}</div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useModalStore} from "@/stores/modal";

export default defineComponent({
  name: "TestComponent",
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const modalStore = useModalStore();
    const optionsStore = computed(() => modalStore.options ?? null);
    return { optionsStore };
  },
  computed: {
    getContent() {
      return this.optionsStore?.title ?? this.options?.title ?? null;
    }
  }
})
</script>

<style scoped>

</style>
