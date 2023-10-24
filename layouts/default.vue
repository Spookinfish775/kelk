<template>
  <div>
    <AppHeader />
    <NuxtPage />
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
</style>