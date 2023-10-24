<template>
  <div class="app-main-page">
    <AppGreeting />
  </div>
</template>

<script>
import AppGreeting from "../components/greeting/greeting.vue";

export default {
  components: {
    AppGreeting,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app-main-page {
  width: 100%;
}
</style>