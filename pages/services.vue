<template>
  <div class="services-wrapper">
    <div class="services-image">
      <img
        src="/images/pictures/services.jpg"
        alt="services image"
        class="services-image-img"
      />
    </div>
    <div class="services-info">
      <h2 class="services-title">
        {{ $t("services.title") }}
      </h2>
      <h2 class="services-description">
        {{ $t("services.description") }}
      </h2>
      <p
        v-for="(point, index) in pointList"
        :key="index"
        class="services-description-point"
      >
        {{ point }}
      </p>
    </div>
  </div>
  <AppAdvantages />
</template>

<script>
import AppAdvantages from "../components/company-advantages/advantages.vue";

export default {
  name: "AppServices",
  components: { AppAdvantages },
  data() {
    return {
      pointList: [
        this.$t("services.pointOne"),
        this.$t("services.pointTwo"),
        this.$t("services.pointThree"),
        this.$t("services.pointFour"),
        this.$t("services.pointFive"),
        this.$t("services.pointSix"),
        this.$t("services.pointSeven"),
        this.$t("services.pointEight"),
        this.$t("services.pointNine"),
        this.$t("services.pointTen"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services-wrapper {
  width: 100%;
  height: 685px;
  background-color: $app-lighter-gray;
  display: flex;
  .services-image {
    width: 100%;
    max-width: 500px;
    height: 100%;
    position: relative;
    .services-image-img {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.4);
    }
  }
  .services-info {
    margin: 45px 0 0 96px;
    .services-title {
      font-size: 32px;
      line-height: 42px;
      font-weight: 700;
      color: $app-gray;
    }
    .services-description {
      font-size: 22px;
      line-height: 34px;
      font-weight: 700;
      color: $app-brand-main;
      margin: 48px 0 40px 20px;
    }
    .services-description-point {
      font-size: 18px;
      line-height: 26px;
      font-weight: 500;
      color: $app-light-gray;
      margin: 0 0 0 20px;
      max-width: 740px;
    }
  }
}
@include max($desktop-s) {
  .services-wrapper {
    height: 820px;
    .services-info {
      margin: 25px 36px 0 36px;
      .services-title {
        font-size: 32px;
      }
      .services-description {
        margin: 28px 0 20px 10px;
      }
      .services-description-point {
        max-width: auto;
      }
    }
  }
}
@include max($tablet-l) {
  .services-wrapper {
    width: 100%;
    height: 1360px;
    flex-direction: column;
    .services-image {
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 600px;
    }
    .services-info {
      margin: 10px;
      .services-title {
        text-align: center;
      }
      .services-description {
        margin: 14px 0;
        text-align: center;
      }
      .services-description-point {
        margin: 20px 0 0 0;
        max-width: auto;
      }
    }
  }
}
@include max($phone-l) {
  .services-wrapper {
    width: 100%;
    height: 1120px;
    flex-direction: column;
    .services-image {
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 400px;
    }
    .services-info {
      .services-title {
        text-align: center;
      }
      .services-description {
        margin: 14px 0;
        text-align: center;
      }
      .services-description-point {
        margin: 10px 0 0 0;
        font-size: 14px;
      }
    }
  }
}
@include max($phone-m) {
  .services-wrapper {
    width: 100%;
    height: 1190px;
    flex-direction: column;
    .services-image {
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 400px;
    }
    .services-info {
      .services-title {
        text-align: center;
      }
      .services-description {
        margin: 14px 0;
        text-align: center;
      }
      .services-description-point {
        margin: 4px 0 0 0;
        font-size: 14px;
      }
    }
  }
}
</style>