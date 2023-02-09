<template>
  <div class="overlay" @click="hideModal">
    <div class="mx-4">
      <div
        class="modal-form pt-20"
        :class="modalSize === 'small' ? 'modal-form-small' : ''"
        @click.stop=""
      >
        <BaseIcon
          class="modal-form-close"
          iconName="cross-inline-icon.svg"
          @click="hideModal"
        />
        <div class="w-100">
          <component
            v-if="component"
            :is="component"
            :options="props"
            @close="hideModal"
            @submit="hideModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useModalStore } from "@/stores/modal";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "DynamicModal",
  setup() {
    const modalStore = useModalStore();
    function hideModal() {
      modalStore.hideModal();
    }
    const component = computed(() => modalStore.options.component);
    const props = computed(() => modalStore.options.props);
    return {
      component,
      props,
      hideModal,
    };
  },
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    modalSize: {
      type: String,
      default: "default",
    },
    bgImage: {
      type: String,
      default:
        "https://images.ctfassets.net/m8onsx4mm13s/04o85PLu9iwSFnzXgrQCfG/cc2d9a2db648ae7fd465db71be8cf07d/__static.gibson.com_product-images_USA_USA4QA350_Ebony_Ebony.jpg",
    },
  },
});
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  background: #00000040;
  padding-top: 25px;
  overflow: auto;
}

.modal-form {
  position: relative;
  border-radius: 7px;
  box-shadow: 0 2px 16px rgb(0 0 0 / 10%);
  min-height: 250px;
  max-width: 500px;
  padding: 20px 26px;
  margin: 0 auto;
  overflow: auto;
  background-color: white;
  background-image: v-bind(bgImage);
  background-size: cover;

  &-close {
    position: absolute;
    right: 25px;
    top: 25px;
    z-index: 1;
    cursor: pointer;
  }

  &-small {
    min-height: 200px;
    max-width: 700px;
  }
}
</style>
