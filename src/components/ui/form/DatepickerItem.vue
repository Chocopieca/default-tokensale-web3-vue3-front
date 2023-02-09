<template>
  <div
    :class="datePickerClass"
    class="d-flex justify-end w-100"
    :style="{ paddingTop: label ? '20px' : '0' }"
  >
    <Transition>
      <span class="date-picker-label-tip" v-if="label && labelIsVisible">
        {{ label }}
      </span>
    </Transition>
    <DatePicker
      v-model="selectedTime"
      text-input
      range
      :placeholder="label"
      :disabled="disabled"
      :enable-time-picker="false"
      class="date-picker-input"
      @focus="labelIsVisible = true"
      @blur="labelIsVisible = false"
    />
    <BaseButton
      v-if="withButton"
      :disabled="disabled"
      buttonColorClass="transparent"
      height="40px"
      width="70px"
      @click="onSubmitDate"
    >Select</BaseButton>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  name: "DatepickerItem",
  props: {
    modelValue: {
      type: Object,
      default: () => {},
    },
    label: {
      type: String,
      default: "Select Date",
    },
    buttonColor: {
      type: String,
      default: "light-turquoise",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    withButton: {
      type: Boolean,
      default: false,
    },
    inputSize: {
      type: String,
      default: "normal",
      validate(val) {
        return ["normal", "wide"].includes(val);
      },
    },
  },
  data() {
    return {
      labelIsVisible: false,
      selectedTime: [new Date(), new Date(Date.now() + 86400000)],
    };
  },
  mounted() {
    if (this.modelValue.dateFrom || this.modelValue.dateTo) {
      this.selectedTime = [
        new Date(this.modelValue.dateFrom),
        new Date(this.modelValue.dateTo),
      ];
    }
    this.onSubmitDate();
  },
  computed: {
    datePickerClass() {
      const mainClass = this.withButton
        ? "date-picker-with-button"
        : "date-picker";
      return `${mainClass} ${this.inputSize}`;
    },
  },
  methods: {
    onSubmitDate() {
      const date = {
        dateFrom: moment(this.selectedTime[0]).format("YYYY-MM-DD"),
        dateTo: moment(this.selectedTime[1]).format("YYYY-MM-DD"),
      };
      this.$emit("update:modelValue", date);
    },
  },
  watch: {
    selectedTime() {
      if (!this.withButton) this.onSubmitDate();
    },
  },
});
</script>

<style scoped lang="scss">
.date-picker {
  :deep(.dp__input) {
    border: 1px solid #777777;
    border-radius: 7px;
    min-height: 43px;
  }

  &.normal {
    :deep(.dp__input_wrap) {
      width: 300px;
    }
  }

  &.wide {
    :deep(.dp__input_wrap) {
      width: 100%;
    }
  }

  &-label-tip {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 12px;
  }

  &-with-button {
    :deep(.dp__input_wrap) {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    :deep(button) {
      font-size: 16px;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
