<template>
  <BaseModal :modalSize="'small'">
    <div class="text-align-center">
      <h2 class="size36-weight700 mb-5">{{ options.title }}</h2>
      <div class="flex-center">
        <BaseGradientBlock
          v-for="(step, index) in options.steps"
          :key="index"
          width="120px"
          height="120px"
          class="mx-5"
        >
          <div class="pa-5">
            <BaseSpinner
              v-if="startedStage <= step && completedStage < step"
            />
            <img v-if="completedStage >= step" width="32" height="32" src="@/assets/img/success.svg" alt="completed stage">
          </div>
        </BaseGradientBlock>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import {useModalStore} from "@/stores/modal";
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "BasePayStatusDialog",
  setup() {
    const modalStore = useModalStore();

    const options = computed(() => modalStore.options);
    const startedStage = computed(() => modalStore.startedStage);
    const completedStage = computed(() => modalStore.completedStage);
    return {
      options, startedStage, completedStage
    }
  },
}
)</script>

<style lang="scss" scoped>
::v-deep.v-dialog__container {
  display: unset;
}
</style>
