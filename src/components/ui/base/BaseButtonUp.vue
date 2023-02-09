<template>
  <transition>
    <BaseButton
      width="50px"
      height="50px"
      class="button-up"
      @buttonClick="goTo"
    >
      <BaseIcon iconName="chevron-up.svg"/>
    </BaseButton>
  </transition>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseButtonUp",
  methods: {
    goTo() {
      document.querySelector('body').scrollIntoView({behavior: 'smooth'})
    }
  }
}
)
</script>

<style scoped lang="scss">
.button-up {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 25px 25px 0;
  z-index: 1;
}
</style>
