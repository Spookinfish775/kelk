<template>
  <div class="values-wrapper">
    <h2 class="values-title">
      {{ $t("values.title") }}
    </h2>
    <div class="values-list app-container">
      <div class="values-list-item">
        <div class="values-list-item-box">
          <img
            src="/images/icons/vl_client.svg"
            alt="client icon"
            class="values-list-item-box-img"
          />
          <span class="values-list-item-box-title">
            {{ $t("values.clients") }}
          </span>
        </div>
        <span class="values-list-item-description">
          {{ $t("values.clientsDescription") }}
        </span>
      </div>
      <div class="values-list-item">
        <div class="values-list-item-box">
          <img
            src="/images/icons/vl_security.svg"
            alt="client icon"
            class="values-list-item-box-img"
          />
          <span class="values-list-item-box-title">
            {{ $t("values.reliability") }}
          </span>
        </div>
        <span class="values-list-item-description">
          {{ $t("values.reliabilityDescription") }}
        </span>
      </div>
      <div class="values-list-item">
        <div class="values-list-item-box">
          <img
            src="/images/icons/vl_versatility.svg"
            alt="client icon"
            class="values-list-item-box-img"
          />
          <span class="values-list-item-box-title">
            {{ $t("values.versatility") }}
          </span>
        </div>
        <span class="values-list-item-description">
          {{ $t("values.versatilityDescription") }}
        </span>
      </div>
      <div class="values-list-item">
        <div class="values-list-item-box">
          <img
            src="/images/icons/vl_professionalism.svg"
            alt="client icon"
            class="values-list-item-box-img"
          />
          <span class="values-list-item-box-title">
            {{ $t("values.professionalism") }}
          </span>
        </div>
        <span class="values-list-item-description">
          {{ $t("values.professionalismDescription") }}
        </span>
      </div>
      <div class="values-list-item">
        <div class="values-list-item-box">
          <img
            src="/images/icons/vl_inovation.svg"
            alt="client icon"
            class="values-list-item-box-img"
          />
          <span class="values-list-item-box-title">
            {{ $t("values.innovativeness") }}
          </span>
        </div>
        <span class="values-list-item-description">
          {{ $t("values.innovativenessDescription") }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppValues",
};
</script>

<style lang="scss" scoped>
.values-wrapper {
  width: 100%;
  height: 600px;
  background: url("/images/pictures/values_bg.svg");
  .values-title {
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;
    color: $app-gray;
    text-align: center;
    padding: 140px 0 0 0;
  }
  .values-list {
    padding: 48px 0 0 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
    .values-list-item {
      width: 17%;
      height: 310px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      .values-list-item-box {
        width: 100%;
        height: 165px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: $app-white;
        box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
        -webkit-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
        -moz-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
        cursor: default;
        transition: 0.3s;
        .values-list-item-box-img {
          width: 38px;
          height: 38px;
        }
        .values-list-item-box-title {
          font-size: 16px;
          font-weight: 700;
          color: $app-gray;
          text-align: center;
          height: 36px;
        }
      }
      .values-list-item-description {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: $app-light-gray;
        text-align: center;
        padding: 0 10px;
        transition: 0.3s;
      }
      &:hover {
        .values-list-item-box {
          transform: scale(1.02);
          box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.21);
          -webkit-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.21);
          -moz-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.21);
        }
        .values-list-item-description {
          transform: scale(1.02);
          color: $app-gray;
        }
      }
    }
  }
}
@include max($desktop-s) {
  .values-wrapper {
    height: 1260px;
    .values-title {
      padding: 70px 40px 0 40px;
    }
    .values-list {
      padding: 48px 40px 0 40px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      .values-list-item {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        .values-list-item-box {
          width: 48%;
          height: 100%;
        }
        .values-list-item-description {
          padding: 0;
          width: 48%;
        }
      }
    }
  }
}
@include max($tablet-m) {
  .values-wrapper {
    height: 1160px;
    .values-title {
      padding: 20px 0 0 0;
    }
    .values-list {
      padding: 20px 20px 0 20px;
      gap: 10px;
      .values-list-item {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        .values-list-item-box {
          width: 48%;
          height: 100%;
          .values-list-item-box-title {
            font-size: 14px;
          }
        }
        .values-list-item-description {
          padding: 0;
          width: 48%;
        }
      }
    }
  }
}
@include max($phone-m) {
  .values-wrapper {
    height: 1200px;
    .values-list {
      padding: 20px 10px 0 10px;
      gap: 20px;
    }
  }
}
</style>