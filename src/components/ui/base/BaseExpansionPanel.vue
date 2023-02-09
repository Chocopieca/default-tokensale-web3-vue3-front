<template>
  <div
    class="expansion-panel overflow-hidden"
    :class="getExpansionStyle"
    :style="{ background: expansionBG }"
  >
    <div
      class="expansion-panel-title d-flex justify-space-between"
      :class="isPanelActive ? 'active' : ''"
      @click="togglePanel"
    >
      <slot name="title" />
      <div class="icon"></div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="isPanelActive"
        ref="content"
        class="expansion-panel-content"
        :style="{ background: expansionBG }"
      >
        <div class="py-5">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseExpansionPanel",
  data() {
    return {
      isPanelActive: false,
    };
  },
  props: {
    expansionBG: {
      type: String,
      default: "#FFFFFF",
    },
    expansionStyle: {
      type: String,
      default: "default",
      validate(val) {
        return ["default", "classic"].includes(val);
      },
    },
  },
  methods: {
    togglePanel() {
      this.isPanelActive = !this.isPanelActive;
    },
  },
  computed: {
    getExpansionStyle() {
      switch (this.expansionStyle) {
        case "classic":
          return "expansion-panel-classic";
        default:
          return "expansion-panel-default";
      }
    },
  },
});
</script>

<style scoped lang="scss">
.expansion-panel {
  text-align: left;
  transition: 0.4s;

  &-default {
    box-shadow: 0 0 15px #95959570;
    border-radius: 15px;
  }

  &-classic {
    border-radius: 0;
  }

  &-title {
    padding: 10px;
    width: 100%;
    cursor: pointer;
    &.active {
      border-radius: 15px 15px 0 0;
      & .icon:after {
        transform: rotate(90deg);
      }
    }

    & .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      &:after {
        content: "\276E";
        transform: rotate(-90deg);
        font-size: 20px;
        float: right;
        color: #777;
        margin-left: 5px;
        transition: 0.4s;
      }
    }
  }

  &-content {
    padding: 0 10px;
    border-radius: 0 0 15px 15px;
  }
}
</style>
