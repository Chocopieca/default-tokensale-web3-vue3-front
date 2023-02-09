<template>
  <div class="main-column">
    <div class="main-column-content">
      <slot />
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseGradientBlock",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
  computed: {
    getWidth() {
      return this.width;
    },
    getHeight() {
      return this.height;
    },
  }
}
)</script>

<style scoped lang="scss">
.main-column {
  $border: 2px;
  background: linear-gradient(90deg, #CCCCCC 7%, #A7A7A7 89%);
  border-radius: 20px;
  padding: $border;
  box-shadow: 0 0 15px #95959570;

  &-content {
    background: white;
    padding: 20px;
    border-radius: inherit;
    width: v-bind(getWidth);
    height: v-bind(getHeight);
  }
}
</style>
