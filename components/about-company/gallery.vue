<template>
  <Transition name="fade" mode="out-in">
    <div class="gallery-wrapper" v-if="popupIsVisible" @click.self="close">
      <button class="prev_button" @click="prevImage">
        <img
          src="/images/icons/arrow.svg"
          alt="prev icon"
          class="prev_button_icon"
        />
      </button>
      <Transition name="fade" mode="out-in">
        <img
          :src="images[currentIndex]"
          alt="gallery image"
          class="gallery_image"
        />
      </Transition>
      <button class="next_button" @click="nextImage">
        <img
          src="/images/icons/arrow.svg"
          alt="next icon"
          class="next_button_icon"
        />
      </button>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      popupIsVisible: false,
      images: [
        "/images/pictures/about_gallery_1_BIG.png",
        "/images/pictures/about_gallery_2_BIG.png",
        "/images/pictures/about_gallery_3_BIG.png",
      ],
      currentIndex: 0,
    };
  },
  props: {
    imageIndex: {
      required: true,
    },
  },
  watch: {
    imageIndex() {
      this.currentIndex = this.imageIndex;
    },
  },
  methods: {
    prevImage() {
      if (this.currentIndex >= 1) {
        this.currentIndex -= 1;
      } else if (this.currentIndex == 0) {
        this.currentIndex = 2;
      }
    },
    nextImage() {
      if (this.currentIndex <= 1) {
        this.currentIndex += 1;
      } else if (this.currentIndex == 2) {
        this.currentIndex = 0;
      }
    },
    open() {
      this.popupIsVisible = true;
      this.blockScroll();
    },
    close() {
      this.popupIsVisible = false;
      this.unlockScroll();
    },
    blockScroll() {
      document.body.style.overflow = "hidden";
    },
    unlockScroll() {
      document.body.style.overflow = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.gallery-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: rgba($color: $app-black, $alpha: 0.7);
  backdrop-filter: blur(5px);
  .prev_button {
    background-color: $app-white;
    outline: none;
    border: none;
    border-radius: 100%;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    .prev_button_icon {
      transform: rotate(180deg);
      margin: 0 2px 0 0;
    }
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .gallery_image {
    width: 100%;
    height: 100%;
    max-width: 1024px;
    max-height: 768px;
    padding: 20px;
    box-sizing: border-box;
  }

  .next_button {
    background-color: $app-white;
    outline: none;
    border: none;
    border-radius: 100%;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    .prev_button_icon {
      margin: 0 0 0 2px;
    }
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.9);
    }
  }
}
@include max($tablet-l) {
  .gallery-wrapper {
    gap: 0;
    .gallery_image {
      width: 100%;
      height: 100%;
      max-width: 640px;
      max-height: 480px;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
@include max($tablet-m) {
  .gallery-wrapper {
    .gallery_image {
      width: 100%;
      height: 100%;
      max-width: 480px;
      max-height: 360px;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
@include max($phone-l) {
  .gallery-wrapper {
    .gallery_image {
      width: 100%;
      height: 100%;
      max-width: 360px;
      max-height: 280px;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
@include max($phone-m) {
  .gallery-wrapper {
    .gallery_image {
      width: 100%;
      height: 100%;
      max-width: 280px;
      max-height: 180px;
      padding: 2px;
      box-sizing: border-box;
    }
  }
}
</style>