<template>
  <div>
    <AppHeader />
    <transition name="fade">
      <NuxtPage />
    </transition>
    <AppFooter id="contacts" />
  </div>
</template>

<script>
import AppHeader from "../components/layout/app-header.vue";
import AppFooter from "../components/layout/app-footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
