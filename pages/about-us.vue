<template>
  <div class="about-wrapper">
    <Gallery ref="_gallery" :imageIndex="image" />
    <div class="about-gallery app-container">
      <img
        src="/images/pictures/about_gallery_1.png"
        alt="about-picture 1"
        class="about-gallery-img"
        @click="openFullImage(0)"
      />
      <img
        src="/images/pictures/about_gallery_2.png"
        alt="about-picture 2"
        class="about-gallery-img"
        @click="openFullImage(1)"
      />
      <img
        src="/images/pictures/about_gallery_3.png"
        alt="about-picture 3"
        class="about-gallery-img"
        @click="openFullImage(2)"
      />
    </div>
    <div class="about-info app-container">
      <h2 class="about-info-title">
        {{ $t("about.title") }}
      </h2>
      <h5 class="about-info-description">
        {{ $t("about.footer") }}
      </h5>
      <div class="about-info-ways">
        <div class="about-info-ways-item">
          <img
            src="/images/icons/ab_railways.svg"
            alt="railway icon"
            class="about-info-ways-item-icon"
          />
          <span class="about-info-ways-item-description">
            {{ $t("about.railway") }}
          </span>
        </div>
        <div class="_line">
          <img src="/images/pictures/divider.svg" alt="" />
        </div>
        <div class="about-info-ways-item">
          <img
            src="/images/icons/ab_auto.svg"
            alt="auto icon"
            class="about-info-ways-item-icon"
          />
          <span class="about-info-ways-item-description">
            {{ $t("about.auto") }}
          </span>
        </div>
        <div class="_line">
          <img src="/images/pictures/divider.svg" alt="" />
        </div>
        <div class="about-info-ways-item">
          <img
            src="/images/icons/ab_sea.svg"
            alt="sea icon"
            class="about-info-ways-item-icon"
          />
          <span class="about-info-ways-item-description">
            {{ $t("about.sea") }}
          </span>
        </div>
        <div class="_line">
          <img src="/images/pictures/divider.svg" alt="" />
        </div>
        <div class="about-info-ways-item">
          <img
            src="/images/icons/ab_air.svg"
            alt="air icon"
            class="about-info-ways-item-icon"
          />
          <span class="about-info-ways-item-description">
            {{ $t("about.avia") }}
          </span>
        </div>
      </div>
      <h5 class="about-info-footer">
        {{ $t("about.description") }}
      </h5>
    </div>
  </div>
  <AppValues />
</template>

<script>
import AppValues from "../components/company-values/values.vue";
import Gallery from "../components/about-company/gallery.vue";

export default {
  name: "AppAbout",
  components: {
    AppValues,
    Gallery,
  },
  data() {
    return {
      image: null,
    };
  },
  methods: {
    openFullImage(imageNumber) {
      this.image = imageNumber;
      setTimeout(() => {
        this.$refs._gallery.open();
      }, 50);
    },
  },
};
</script>

<style lang="scss" scoped>
.about-wrapper {
  width: 100%;
  height: 870px;
  background-color: $app-brand-secondary;
  .about-gallery {
    padding: 54px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .about-gallery-img {
      width: 30%;
    }
  }
  .about-info {
    padding: 70px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .about-info-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 42px;
      color: $app-gray;
    }
    .about-info-description {
      width: 100%;
      margin: 16px 0 0 0;
      font-size: 22px;
      font-weight: 500;
      line-height: 38px;
      color: $app-white;
      text-align: center;
    }
    .about-info-ways {
      margin: 60px 0 0 0;
      width: 100%;
      height: 135px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .about-info-ways-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        width: 17%;
        .about-info-ways-item-icon {
          margin: 12px 0 0 0;
          width: 46px;
          height: 46px;
        }
        .about-info-ways-item-description {
          text-align: center;
          margin: 0 0 12px 0;
        }
      }
      ._line {
        height: 100%;
        img {
          object-fit: cover;
        }
      }
    }
    .about-info-footer {
      width: 50%;
      margin: 60px 0 0 0;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: $app-white;
      text-align: center;
    }
  }
}
@include max($desktop-m) {
  .about-wrapper {
    .about-gallery {
      padding: 54px 40px 0 40px;
    }
    .about-info {
      padding: 70px 40px 0 40px;
    }
  }
}
@include max($tablet-m) {
  .about-wrapper {
    height: 1060px;
    .about-gallery {
      padding: 24px 20px 0 20px;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      .about-gallery-img {
        width: 45%;
      }
    }
    .about-info {
      padding: 20px 20px 0 20px;
      .about-info-description {
        width: 100%;
        margin: 4px 0 0 0;
      }
      .about-info-ways {
        margin: 30px 0 0 0;
        height: 280px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        .about-info-ways-item {
          width: 47%;
        }
        ._line {
          display: none;
        }
      }
      .about-info-footer {
        width: 100%;
        margin: 40px 0 0 0;
      }
    }
  }
}
@include max($phone-m) {
  .about-wrapper {
    .about-gallery {
      padding: 24px 10px 0 10px;
    }
    .about-info {
      padding: 20px 10px 0 10px;
    }
  }
}
</style>