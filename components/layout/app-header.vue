<template>
  <div class="app-header-wrapper">
    <transition name="fade">
      <AppMobileMenu
        v-show="menuOpened"
        @closeMenu="closeMenu"
        ref="mobileMenu"
      />
    </transition>
    <div class="app-header app-container">
      <nuxt-link class="app-header-logo" to="/">
        <img
          class="app-header-logo-img"
          src="/images/DP_logo.svg"
          alt="Dana Pikir logo"
        />
      </nuxt-link>
      <div class="app-header-menu">
        <nuxt-link
          v-for="(link, id) in appNavigation"
          :key="id"
          :to="link.to"
          class="app-header-menu-link"
        >
          {{ link.text }}
        </nuxt-link>
      </div>
      <div class="app-header-contacts">
        <div class="app-header-contacts-item">
          <div class="app-header-contacts-item-icon">
            <img
              class="app-header-contacts-item-icon-img"
              src="/images/icons/hd_phone.svg"
              alt="contact phone"
            />
          </div>
          <div class="app-header-contacts-item-text">
            <h5 class="app-header-contacts-item-title">
              {{ $t("appHeader.contactUs") }}
            </h5>
            <a
              class="app-header-contacts-item-description"
              href="tel:+99312754177"
            >
              {{ $t("appHeader.contactUsNumber") }}
            </a>
          </div>
        </div>
        <div class="app-header-contacts-item">
          <div class="app-header-contacts-item-icon">
            <img
              class="app-header-contacts-item-icon-img"
              src="/images/icons/hd_message.svg"
              alt="contact message"
            />
          </div>
          <div class="app-header-contacts-item-text">
            <h5 class="app-header-contacts-item-title">
              {{ $t("appHeader.mailUs") }}
            </h5>
            <a
              class="app-header-contacts-item-description"
              target="blank"
              :href="`mailto:info@danapikir.com.tm?subject=${$t('mail.theme')}`"
            >
              info@danapikir.com.tm
            </a>
          </div>
        </div>
      </div>
      <AppLanguageSelector class="_lang-selector" />
      <div
        class="app-header-burger-menu-button-wrapper"
        @click="openOrCloseMenu"
        :class="{ _opened: menuOpened, _fixed: menuOpened }"
      >
        <span class="app-header-burger-menu-button _top"></span>
        <span class="app-header-burger-menu-button _middle"></span>
        <span class="app-header-burger-menu-button _bottom"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { APP_NAVIGATION } from "../../infrastructure/data-source/app-navigation";

import AppMobileMenu from "../../components/layout/app-mobile-menu.vue";
import AppLanguageSelector from "../../components/layout/app-language-selector.vue";

export default {
  name: "AppHeader",
  components: {
    AppLanguageSelector,
    AppMobileMenu,
  },
  data() {
    return {
      menuOpened: false,
    };
  },
  computed: {
    appNavigation() {
      return APP_NAVIGATION(this);
    },
  },
  methods: {
    goToMain() {
      this.$router.push("/");
    },
    openOrCloseMenu() {
      this.menuOpened = !this.menuOpened;
      setTimeout(() => {
        this.$refs.mobileMenu.transformMenu();
      }, 10);
    },
    closeMenu() {
      this.$refs.mobileMenu.transformMenu();
      setTimeout(() => {
        this.menuOpened = !this.menuOpened;
      }, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.app-header-wrapper {
  width: 100%;
  height: 65px;
  background-color: $app-brand-secondary;
  .app-header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    .app-header-logo {
      cursor: pointer !important;
      .app-header-logo-img {
        cursor: pointer !important;
      }
    }
    .app-header-menu {
      display: flex;
      align-items: center;
      gap: 28px;
      .app-header-menu-link {
        color: $app-white;
        font-size: 16px;
        font-weight: 700;
        border-bottom: 2px solid transparent;
        transition: 0.3s;
        padding: 0 0 3px 0;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid $app-white;
        }
      }
    }
    .app-header-contacts {
      display: flex;
      gap: 28px;
      .app-header-contacts-item {
        display: flex;
        align-items: center;
        gap: 9px;
        width: 50%;
        .app-header-contacts-item-icon {
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          .app-header-contacts-item-icon-img {
            height: 28px;
          }
        }
        .app-header-contacts-item-text {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          height: 34px;
          .app-header-contacts-item-title {
            font-size: 12px;
            font-weight: 700;
          }
          .app-header-contacts-item-description {
            font-size: 14px;
            font-weight: 400;
            white-space: nowrap;
            cursor: pointer;
            transition: 0.3s;
            border-bottom: 1px solid transparent;
            &:hover {
              border-bottom: 1px solid $app-white;
            }
          }
        }
      }
    }
    .app-header-burger-menu-button-wrapper {
      display: none;
    }
  }
}
@include max($desktop-s) {
  .app-header-wrapper {
    .app-header {
      .app-header-menu {
        display: none;
      }
      .app-header-contacts {
        display: none;
      }
      ._lang-selector {
        display: none;
      }
      .app-header-burger-menu-button-wrapper {
        display: block;
        width: 36px;
        height: 28px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 20000;
        .app-header-burger-menu-button {
          width: 40px;
          height: 4px;
          background-color: $app-brand-main;
          position: relative;
          transition: 0.3s;
        }
      }
      ._fixed {
        position: fixed;
        right: 20px;
      }
      ._opened {
        ._top {
          transform: rotate(45deg) translate(10px, 7px);
        }
        ._middle {
          opacity: 0;
        }
        ._bottom {
          transform: rotate(-45deg) translate(10px, -7px);
        }
      }
    }
  }
}
</style>