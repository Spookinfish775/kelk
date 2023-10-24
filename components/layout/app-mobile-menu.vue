<template>
  <div class="mobile-menu-wrapper" @click.self="closeMenu">
    <div class="mobile-menu" :class="{ _visible: menuVisible }">
      <nuxt-link class="mobile-menu-logo" to="/">
        <img
          src="/images/DP_small_logo.svg"
          alt="logo"
          class="mobile-menu-logo-img"
        />
      </nuxt-link>
      <div class="mobile-menu-navigation">
        <nuxt-link
          class="nav_link"
          v-for="(link, index) in appNavigation"
          :key="index"
          :to="link.to"
        >
          {{ link.text }}
        </nuxt-link>
      </div>
      <div class="mobile-menu-lang-selector">
        <h2 class="mobile-menu-lang-selector-title">
          {{ $t("appHeader.langList.title") }}
        </h2>
        <h5
          class="_lang-item"
          v-if="currentLang !== 'en'"
          @click="setLocale('en')"
        >
          {{ $t("appHeader.langList.en") }}
        </h5>
        <h5
          class="_lang-item"
          v-if="currentLang !== 'ru'"
          @click="setLocale('ru')"
        >
          {{ $t("appHeader.langList.ru") }}
        </h5>
        <h5
          class="_lang-item"
          v-if="currentLang !== 'tm'"
          @click="setLocale('tm')"
        >
          {{ $t("appHeader.langList.tm") }}
        </h5>
      </div>
      <div class="mobile-menu-contacts">
        <div class="mobile-menu-contacts-item">
          <img
            src="/images/icons/hd_phone.svg"
            alt="contact phone"
            class="_item-image"
          />
          <div class="_item-info">
            <a class="_item-info-title" href="tel:+99312754177">
              {{ $t("appHeader.contactUs") }}
            </a>
            <a class="_item-info-description" href="tel:+99312754177">
              {{ $t("appHeader.contactUsNumber") }}
            </a>
          </div>
        </div>
        <div class="mobile-menu-contacts-item">
          <img
            src="/images/icons/hd_message.svg"
            alt="contact phone"
            class="_item-image"
          />
          <div class="_item-info">
            <a class="_item-info-title" href="mailto:info@danapikir.com.tm">
              {{ $t("appHeader.mailUs") }}
            </a>
            <a
              class="_item-info-description"
              href="mailto:info@danapikir.com.tm"
            >
              info@danapikir.com.tm
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { APP_NAVIGATION } from "../../infrastructure/data-source/app-navigation";

export default {
  name: "AppMobileMenu",
  data() {
    return {
      menuVisible: false,
    };
  },
  computed: {
    appNavigation() {
      return APP_NAVIGATION(this);
    },
    currentLang() {
      return this.$i18n.locale;
    },
    locales() {
      return this.$i18n.availableLocales;
    },
    route() {
      return this.$router.currentRoute.value.fullPath;
    },
  },
  watch: {
    route() {
      this.closeMenu();
    },
  },
  methods: {
    transformMenu() {
      this.menuVisible = !this.menuVisible;
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("locale", locale);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba($color: $app-black, $alpha: 0.4);
  .mobile-menu {
    width: 340px;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: $app-lighter-gray;
    transform: translate(-300px);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .mobile-menu-logo {
      width: 100px;
      .mobile-menu-logo-img {
        width: 100%;
      }
    }
    .mobile-menu-navigation {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      .nav_link {
        font-size: 18px;
        font-weight: 700;
        color: $app-gray !important;
        margin: 10px 0;
        cursor: pointer;
      }
    }
    .mobile-menu-lang-selector {
      margin: 100px 0 0 0;
      width: 100%;
      .mobile-menu-lang-selector-title {
        width: 100%;
        font-size: 22px;
        font-weight: 400;
        color: $app-gray;
        margin: 0 0 20px 0;
      }
      ._lang-item {
        font-size: 18px;
        font-weight: 700;
        color: $app-gray;
        margin: 10px 0;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          color: $app-brand-main;
        }
      }
    }
    .mobile-menu-contacts {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 40px;
      margin: 60px 0 0 0;

      // transform: translate(-50%, 0);
      .mobile-menu-contacts-item {
        display: flex;
        gap: 10px;
        ._item-image {
          width: 40px;
          height: 40px;
        }
        ._item-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          ._item-info-title {
            font-size: 18px;
            font-weight: 700;
            color: $app-gray !important;
          }
          ._item-info-description {
            font-size: 22px;
            font-weight: 400;
            color: $app-gray !important;
          }
        }
      }
    }
  }
  ._visible {
    transform: translate(0);
  }
}
</style>