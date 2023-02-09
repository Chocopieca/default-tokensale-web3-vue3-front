<template>
  <div class="d-inline-block cursor-pointer">
    <label class="d-flex justify-start align-center">
      <input
        v-model="internalValue"
        type="checkbox"
        :name="name"
      >
      <BaseIcon
        v-if="internalValue"
        iconName="check-circle.svg"
        :height="getHeight"
        :width="getWidth"
        :iconColor="{color: '#1BA930', hover: '#00BA1C'}"
      />
      <BaseIcon
        v-else
        iconName="check-circle.svg"
        :height="getHeight"
        :width="getWidth"
        :iconColor="{color: '#CCCCCC', hover: '#A7A7A7'}"
      />
      <span class="ml-1">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseCheckbox",
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '20px'
    },
    height: {
      type: String,
      default: '20px'
    },
  },
  computed: {
    internalValue: {
      get() { return this.modelValue },
      set(val) { this.$emit('update:modelValue', val) },
    },
    getHeight() {
      return this.height;
    },
    getWidth() {
      return this.width;
    },
  },
})
</script>

<style scoped>
input[type=checkbox] {
 display: none;
}
</style>
