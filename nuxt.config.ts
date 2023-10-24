export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/static/scss/variables.scss";',
        },
      },
    },
  },

  ssr: false,
  build: {},
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
      "~/components",
    ],
  },
  css: ["~/static/scss/index.scss"],
  modules: [],
  plugins: [{ src: "@/plugins/i18n.ts", mode: "client" }],
  router: {},
});
