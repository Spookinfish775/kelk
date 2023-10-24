<template>
  <div class="app-language-selector-warapper">
    <button
      @click="showLangList"
      class="app-language-selector"
      ref="langSelector"
    >
      {{ currentLang }}
    </button>
    <Transition name="fade" mode="out-in">
      <ul
        v-if="langListVisible"
        class="app-language-selector-lang-list"
        ref="langList"
      >
        <li
          v-for="(locale, index) in locales"
          :key="index"
          class="app-language-selector-lang-list-item"
          @click="changeLang(locale)"
        >
          {{ locale }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "AppLanguageSelector",
  data() {
    return {
      langListVisible: false,
    };
  },
  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
    locales() {
      let currentLocales = this.$i18n.availableLocales.filter(
        (el) => el !== this.currentLang
      );
      return currentLocales;
    },
  },
  methods: {
    handleOutsideClick() {
      window.addEventListener("click", (e) => {
        const target = e.target;
        if (
          !target.closest(".app-language-selector-lang-list") &&
          !target.closest(".app-language-selector")
        ) {
          this.langListVisible = false;
        }
      });
    },
    showLangList() {
      this.langListVisible = !this.langListVisible;
    },
    changeLang(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("locale", locale);
      this.langListVisible = false;
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
  },
  mounted() {
    this.handleOutsideClick();
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.app-language-selector-warapper {
  position: relative;
  .app-language-selector {
    border: none;
    background-color: transparent;
    outline: none;
    color: $app-white;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 4px;
    padding: 6px;
    &:hover {
      box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.25);
    }
    text-transform: uppercase;
  }
  .app-language-selector-lang-list {
    margin: 0;
    background-color: $app-white;
    padding: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    position: absolute;
    top: 30px;
    left: -5px;
    z-index: 1000;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    .app-language-selector-lang-list-item {
      box-sizing: border-box;
      font-size: 16px;
      color: $app-black;
      transition: 0.2s;
      width: 100%;
      padding: 4px;
      text-transform: uppercase;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        transform: translate(1px);
        background-color: rgba($color: $app-brand-secondary, $alpha: 0.2);
      }
    }
  }
}
</style>