<template>
  <div class="app-footer-wrapper">
    <div class="footer-content">
      <div class="footer-header">
        <img
          src="/images/DP_logo.svg"
          alt="logo big"
          class="footer-header-big-logo"
        />
        <img
          src="/images/DP_small_logo.svg"
          alt="logo small"
          class="footer-header-small-logo"
        />
      </div>
      <div class="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2693.392532203134!2d58.426436689598894!3d37.956115687844054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDU3JzIyLjMiTiA1OMKwMjUnMzYuOCJF!5e1!3m2!1sru!2s!4v1698044495662!5m2!1sru!2s"
          :width="mapWidth"
          height="120"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="footer-contacts">
        <h3 class="footer-contacts-title">
          {{ $t("footer.contacts") }}
        </h3>
        <div class="footer-contacts-item">
          <img
            src="/images/icons/ft_location.svg"
            alt="location icon"
            class="footer-contacts-item-image"
          />
          <p class="footer-contacts-item-title">
            24, 2127 (G.Kuliev) Str., Ashgabat., 744015, Turkmenistan
          </p>
        </div>
        <div class="footer-contacts-item">
          <img
            src="/images/icons/ft_phone.svg"
            alt="phone icon"
            class="footer-contacts-item-image"
          />
          <a class="footer-contacts-item-title" href="tel:+99312754177">
            +993 12 754177
          </a>
        </div>
        <div class="footer-contacts-item">
          <img
            src="/images/icons/ft_fax.svg"
            alt="phone icon"
            class="footer-contacts-item-image"
          />
          <a class="footer-contacts-item-title" href="tel:+99312754177">
            +993 12 754194
          </a>
        </div>
        <div class="footer-contacts-item">
          <img
            src="/images/icons/ft_mail.svg"
            alt="mail icon"
            class="footer-contacts-item-image"
          />
          <a
            class="footer-contacts-item-title"
            target="blank"
            :href="`mailto:info@danapikir.com.tm?subject=${$t('mail.theme')}`"
          >
            Info@danapikir.com.tm
          </a>
        </div>
      </div>
      <h4 class="footer-rights">
        {{ `${$t("footer.rights")} ${getYear()}` }}
      </h4>
    </div>
    <img
      src="/images/pictures/footer-building.png"
      alt="dana pikir building"
      class="footer-image"
    />
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    mapWidth() {
      if (window.innerWidth >= 1920) {
        return 600;
      } else if (window.innerWidth >= 1024) {
        return 400;
      } else if (window.innerWidth <= 480) {
        return 300;
      } else if (window.innerWidth <= 380) {
        return 100;
      }
    },
  },
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.app-footer-wrapper {
  width: 100%;
  height: 400px;
  background-color: $app-gray;
  display: flex;
  justify-content: space-between;
  .footer-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 6% 0 27%;
    .footer-header {
      margin: 54px 0 0 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      position: relative;
      .footer-header-big-logo {
        width: 125px;
        height: 20px;
      }
      .footer-header-small-logo {
        width: 48px;
        height: 60px;
        position: absolute;
        top: -100%;
        right: 0;
      }
    }
    .footer-map {
      margin: 8px 0 0 0;
    }
    .footer-contacts {
      margin: 12px 0 0 0;
      .footer-contacts-title {
        font-size: 14px;
        line-height: 18px;
        font-weight: 700;
        color: $app-white;
        margin: 0 0 6px 0;
      }
      .footer-contacts-item {
        display: flex;
        align-items: center;
        gap: 4px;
        margin: 4px 0 0 0;
        transition: 0.3s;

        .footer-contacts-item-image {
          width: 16px;
          height: 16px;
          transition: 0.3s;
          cursor: pointer !important;
        }
        ._second {
          margin: 0 0 0 20px;
        }
        .footer-contacts-item-title {
          font-size: 14px;
          line-height: 18px;
          font-weight: 400;
          color: $app-light-gray !important;
          transition: 0.3s;
          cursor: pointer !important;
        }
        &:hover {
          transform: scale(1.02);
          .footer-contacts-item-title {
            color: $app-white !important;
          }
        }
      }
    }
    .footer-rights {
      margin: 40px 0 0 0;
      font-size: 14px;
      font-weight: 400;
      color: $app-white;
    }
  }
}
@include max($desktop-m) {
  .app-footer-wrapper {
    .footer-content {
      padding: 0 6% 0 16%;
    }
  }
}
@include max($desktop-s) {
  .app-footer-wrapper {
    .footer-content {
      padding: 0 3% 0 8%;
    }
  }
}
@include max($tablet-l) {
  .app-footer-wrapper {
    .footer-image {
      display: none;
    }
    .footer-content {
      padding: 0 40px 0 40px;
    }
  }
}
@include max($phone-m) {
  .app-footer-wrapper {
    .footer-content {
      padding: 0 10px 0 10px;
      .footer-header {
        .footer-header-small-logo {
          display: none;
        }
      }
    }
  }
}
</style>