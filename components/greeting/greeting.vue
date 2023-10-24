<template>
  <div class="greeting-wrapper">
    <transition name="fade">
      <img
        class="greeting-background"
        v-if="previousImage"
        :src="previousImage"
        alt="background"
      />
    </transition>
    <transition name="fade">
      <img
        class="greeting-background"
        :key="currentImage"
        :src="currentImage"
        alt="background"
      />
    </transition>
    <div class="greeting-content app-container">
      <img src="/images/DP_small_logo.svg" alt="" class="greeting-logo" />
      <p class="greeting-text">
        {{ $t("greeting.title") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppGreeting",
  data() {
    return {
      images: [
        "/images/pictures/greeting_ship.png",
        "/images/pictures/greeting_carriage.png",
      ],
      currentIndex: 0,
      previousIndex: null,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    previousImage() {
      if (this.previousIndex !== null) {
        return this.images[this.previousIndex];
      }
      return null;
    },
  },
  mounted() {
    setInterval(() => {
      this.previousIndex = this.currentIndex;
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 6000);
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.greeting-wrapper {
  width: 100%;
  height: calc(100vh - 65px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .greeting-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    user-select: none;
    object-position: 90% 50%;
  }
  .greeting-content {
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 52px 0 0 100px;
    box-sizing: border-box;
    .greeting-text {
      width: 37%;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: $app-white;
      margin: 40px 0 0 0;
    }
    .greeting-send-message-button {
      max-width: 180px;
      width: 100%;
      height: 38px;
      border-radius: 3px;
      background-color: $app-brand-main;
      outline: none;
      border: none;
      margin: 20px 0 0 0;
      padding: 0;
      cursor: pointer;
      transition: 0.3s;
      color: $app-white;
      font-size: 16px;
      font-family: "Ubuntu";
      font-weight: 700;
      &:hover {
        transform: scale(1.01) translate(4px, 0);
      }
    }
  }
}
@include max($tablet-l) {
  .greeting-wrapper {
    .greeting-content {
      padding: 32px 0 0 50px;
      .greeting-text {
        width: 90%;
        font-size: 18px;
        text-shadow: -5px 5px 9px rgba(0, 0, 0, 0.6);
      }
    }
  }
}
@include max($phone-l) {
  .greeting-wrapper {
    height: calc(100vh - 65px);
    .greeting-content {
      padding: 22px 0 0 30px;
      .greeting-logo {
        width: 100px;
      }
      .greeting-text {
        width: 95%;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: $app-white;
        margin: 10px 0 0 0;
      }
    }
  }
}
</style>