<template>
  <div class="advantages-wrapper">
    <div class="advantages-content app-container">
      <div class="advantages-content-info">
        <h2 class="advantages-content-info-title">
          {{ $t("advantages.title") }}
        </h2>
        <div class="advantages-content-info-items">
          <div class="_line"></div>
          <div class="advantages-content-info-item">
            <div class="_point"></div>
            <h4 class="advantages-content-info-item-text">
              {{ $t("advantages.pointOne") }}
            </h4>
          </div>
          <div class="advantages-content-info-item">
            <div class="_point"></div>
            <h4 class="advantages-content-info-item-text">
              {{ $t("advantages.pointTwo") }}
            </h4>
          </div>
          <div class="advantages-content-info-item">
            <div class="_point"></div>
            <h4 class="advantages-content-info-item-text">
              {{ $t("advantages.pointThree") }}
            </h4>
          </div>
          <div class="advantages-content-info-item">
            <div class="_point"></div>
            <h4 class="advantages-content-info-item-text">
              {{ $t("advantages.pointFour") }}
            </h4>
          </div>
          <div class="advantages-content-info-item">
            <div class="_point"></div>
            <h4 class="advantages-content-info-item-text">
              {{ $t("advantages.pointFive") }}
            </h4>
          </div>
          <div class="advantages-content-info-item">
            <div class="_point"></div>
            <h4 class="advantages-content-info-item-text">
              {{ $t("advantages.pointSix") }}
            </h4>
          </div>
        </div>
      </div>
      <div class="advantages-content-image">
        <transition name="fade">
          <img
            class="advantages-image"
            v-if="previousImage"
            :src="previousImage"
            alt="advantages image"
          />
        </transition>
        <transition name="fade">
          <img
            class="advantages-image"
            :key="currentImage"
            :src="currentImage"
            alt="advantages image"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAdvantages",
  data() {
    return {
      images: [
        "/images/pictures/advantages_1.png",
        "/images/pictures/advantages_2.png",
        "/images/pictures/advantages_3.png",
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

.advantages-wrapper {
  width: 100%;
  height: 460px;
  background-color: $app-brand-secondary;
  .advantages-content {
    padding: 58px 0 0 0;
    display: flex;
    justify-content: space-between;
    .advantages-content-info {
      .advantages-content-info-title {
        font-size: 32px !important;
        font-weight: 700;
        color: $app-gray;
        margin: 0 0 8px 0;
      }
      .advantages-content-info-items {
        display: flex;
        flex-direction: column;
        position: relative;
        ._line {
          height: 96%;
          width: 1px;
          background-color: rgba($color: $app-white, $alpha: 0.3);
          position: absolute;
          top: 18px;
          left: 3.5px;
        }
        .advantages-content-info-item {
          margin: 14px 0 0 0;
          display: flex;
          align-items: center;
          gap: 22px;
          ._point {
            width: 9px;
            height: 9px;
            border-radius: 100%;
            background-color: $app-white;
            transition: 0.3s;
          }
          .advantages-content-info-item-text {
            font-size: 20px;
            line-height: 30px;
            transition: 0.3s;
          }
          &:hover {
            ._point {
              background-color: $app-brand-main;
            }
            .advantages-content-info-item-text {
              color: $app-brand-main;
            }
          }
        }
      }
    }
    .advantages-content-image {
      border-radius: 40px;
      overflow: hidden;
      width: 380px;
      height: 340px;
      position: relative;
      .advantages-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
@include max($desktop-m) {
  .advantages-wrapper {
    .advantages-content {
      padding: 58px 40px 0 40px;
      gap: 20px;
    }
  }
}
@include max($desktop-s) {
  .advantages-wrapper {
    height: 460px;
    .advantages-content {
      .advantages-content-info {
        .advantages-content-info-items {
          .advantages-content-info-item {
            .advantages-content-info-item-text {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
@include max($tablet-m) {
  .advantages-wrapper {
    width: 100%;
    height: 860px;
    .advantages-content {
      padding: 58px 20px 0 20px;
      flex-direction: column;
      gap: 40px;
      .advantages-content-info {
        .advantages-content-info-title {
          font-size: 32px !important;
        }
        .advantages-content-info-items {
          .advantages-content-info-item {
            ._point {
              width: 9px !important;
              height: 9px !important;
              border-radius: 100%;
            }
            .advantages-content-info-item-text {
              font-size: 20px;
              line-height: 30px;
            }
          }
        }
      }
      .advantages-content-image {
        width: 100%;
        height: 340px;
        .advantages-image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
@include max($phone-l) {
  .advantages-wrapper {
    width: 100%;
    height: 860px;
    .advantages-content {
      padding: 38px 10px 0 10px;
      flex-direction: column;
      gap: 40px;
      .advantages-content-info {
        .advantages-content-info-title {
          font-size: 32px !important;
        }
        .advantages-content-info-items {
          .advantages-content-info-item {
            gap: 11px;
            ._point {
              position: absolute;
            }
            .advantages-content-info-item-text {
              font-size: 16px;
              font-weight: 400;
              line-height: 20px;
              margin: 0 0 0 20px;
            }
          }
        }
      }
      .advantages-content-image {
        width: 100%;
        height: 340px;
        .advantages-image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>