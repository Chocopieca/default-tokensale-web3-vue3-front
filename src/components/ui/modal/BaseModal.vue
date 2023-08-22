<template>
  <div class="overlay" @click="hideModal">
    <div class="mx-4">
      <div
        class="modal-form flex-center"
        :class="modalSize === 'small' ? 'modal-form-small' : ''"
        @click.stop=""
      >
        <BaseIcon
          class="modal-form-close"
          iconName="cross-inline-icon.svg"
          @click="hideModal"
        />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { useModalStore } from "@/stores/modal";
import crossInlineIcon from "@/assets/icon/cross-inline-icon.svg";
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseModal",
  setup() {
    const modalStore = useModalStore();
    function hideModal() {
      modalStore.hideModal();
    }
    return { crossInlineIcon, hideModal };
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
  min-height: 500px;
  max-width: 1028px;
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
  }

  &-small {
    min-height: 200px;
    max-width: 700px;
  }
}
</style>
