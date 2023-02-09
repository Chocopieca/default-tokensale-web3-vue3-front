<template>
  <div
    class="bh-label"
    :style="{ paddingTop: label ? '20px' : '0' }"
  >
    <Transition>
      <span class="bh-label-tip" v-if="label && labelIsVisible">
        {{ label }}
      </span>
    </Transition>
    <textarea
      v-model="internalValue"
      :type="type ? type : 'text'"
      :placeholder="label"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @focus="labelIsVisible = true"
      @blur="labelIsVisible = false"
      :style="{ 'min-height': minHeight }"
    />
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseTextarea",
  props: {
    label: String,
    modelValue: String,
    disabled: Boolean,
    type: String,
    autocomplete: String,
    minHeight: {
      type: String,
      default: "100px",
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
      set(v) { this.$emit("update:modelValue", v) },
    },
  }
}
)
</script>

<style scoped lang="scss">
textarea {
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
