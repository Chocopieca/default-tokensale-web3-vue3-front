<template>
  <div
    :style="{ paddingTop: label ? '20px' : '0' }"
    class="bh-label"
  >
    <Transition>
      <span class="bh-label-tip" v-if="label && labelIsVisible">
        {{ label }}
      </span>
    </Transition>
    <select
      v-model="internalValue"
      :placeholder="label"
      :disabled="disabled"
      @focus="labelIsVisible = true"
      @blur="labelIsVisible = false"
    >
      <option value="" disabled selected hidden>{{ label }}</option>
      <option
        v-for="item of selectOptions"
        :key="`select-options-${item.title}`"
        :value="item.value"
      >
        {{ item.title }}
      </option>
    </select>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseSelect",
  props: {
    label: String,
    modelValue: String,
    disabled: Boolean,
    selectOptions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      labelIsVisible: false,
    };
  },
  computed: {
    internalValue: {
      get() { return this.modelValue },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
  }
})
</script>

<style scoped lang="scss">
select {
  border: 1px solid #777777;
  background-color: #fff;
  border-radius: 7px;
  color: var(--color-text-1);
  padding: 13px 10px;
  height: 43px;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
  width: 100%;
  transition: all 0.3s ease;
  &::-webkit-input-placeholder {
    color: var(--color-text-2);
    transition: color 0.2s ease;
  }
  &:focus,
  &:focus-within,
  &:focus-visible {
    outline: none;
    border-color: var(--color-link-blue);
    background-color: var(--color-background-input);
    &::-webkit-input-placeholder {
      color: transparent;
    }
  }
  &[disabled] {
    background-color: var(--color-background-grey-1);
  }
  &.error {
    border-color: var(--color-border-error);
    background-color: var(--color-background-error);
  }
}

.bh-label {
  position: relative;
  display: block;
}
.bh-label-tip {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 12px;
}
</style>
