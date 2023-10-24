<template>
  <div class="request-wrapper">
    <div class="request-content app-container">
      <img
        src="/images/pictures/request_one.png"
        alt="request image"
        class="request-image"
      />
      <div class="request-content-info">
        <h5 class="request-content-info-description">
          {{ $t("request.description") }}
        </h5>
        <a
          class="request-content-info-send"
          download=""
          href="/form/Форма Заявки.docx"
        >
          {{ $t("request.button") }}
        </a>
      </div>
      <img
        src="/images/pictures/request_two.png"
        alt="request image"
        class="request-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppRequest",
  methods: {
    downloadForm() {},
  },
};
</script>

<style lang="scss" scoped>
.request-wrapper {
  width: 100%;
  height: 900px;
  background-color: $app-brand-secondary;
  display: flex;
  justify-content: center;
  align-items: center;
  .request-content {
    padding: 40px 0 0 0;
    display: flex;
    justify-content: space-between;
    .request-content-info {
      margin: 58px 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      .request-content-info-description {
        // width: 290px;
        padding: 0 20px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        color: $app-lighter-gray;
        text-align: center;
      }
      .request-content-info-send {
        height: 37px;
        border: none;
        border-radius: 3px;
        outline: none;
        padding: 0 34px;
        background-color: $app-brand-main;
        font-size: 14px;
        font-weight: 700;
        line-height: 37px;
        color: $app-white;
        transition: 0.3s;
        &:hover {
          transform: scale(1.01) translate(4px, 0);
        }
      }
    }
  }
}
@include max($desktop-s) {
  .request-wrapper {
    height: 520px;
    .request-content {
      padding: 40px 40px 0 40px;
    }
  }
}
@include max($tablet-l) {
  .request-wrapper {
    .request-content {
      justify-content: center;
      .request-image {
        display: none;
      }
      .request-content-info {
        margin: 0;
        .request-content-info-description {
          width: 100%;
          padding: 0 10px;
          font-size: 14px;
        }
      }
    }
  }
}
@include max($phone-l) {
  .request-wrapper {
    .request-content {
      padding: 20px 10px 0 10px;
      .request-content-info {
        .request-content-info-description {
          width: 100%;
        }
      }
    }
  }
}
</style>