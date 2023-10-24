<template>
  <Transition name="fade" mode="out-in">
    <div
      class="app-request-popup-wrapper"
      v-if="popupIsVisible"
      @click.self="close"
    >
      <div class="app-request">
        <h2 class="app-request-title">
          {{ $t("requestForm.title") }}
        </h2>
        <img
          src="/images/icons/cross.svg"
          alt="close icon"
          class="app-request-close-button"
          @click="close"
        />
        <div class="request-input-list">
          <div
            class="list-item"
            v-for="(input, index) in inputList"
            :key="index"
          >
            <h6 class="item-title">{{ input.title }}</h6>
            <input
              type="text"
              :placeholder="input.placeholder"
              class="item-input"
              :name="input.name"
              :value="formData[input.name]"
              @input="updateFormData(input.name, $event.target.value)"
            />
          </div>
        </div>
        <!-- @click="sendRequest" -->
        <button class="request-send-button">
          {{ $t("requestForm.send") }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "AppRequestPopup",
  data() {
    return {
      popupIsVisible: false,
      formData: {
        senderName: "",
        senderMail: "",
        senderPhoneFax: "",
        station: "",
        stationCode: "",
        stationEnd: "",
        stationEndCode: "",
        codeCargo: "",
        position: "",
        nameCargo: "",
        loadingContainer: "",
        volumeToSend: "",
        specialConditions: "",
        negabarDegree: "",
        specialWagons: "",
        containers: "",
      },
    };
  },
  computed: {
    inputList() {
      return [
        {
          name: "senderName",
          title: this.$t("requestForm.senderName"),
          placeholder: this.$t("requestForm.senderNamePlaceholder"),
        },
        {
          name: "senderMail",
          title: this.$t("requestForm.senderMail"),
          placeholder: this.$t("requestForm.senderMailPlaceholder"),
        },
        {
          name: "senderPhoneFax",
          title: this.$t("requestForm.senderPhoneFax"),
          placeholder: this.$t("requestForm.senderPhoneFaxPlaceholder"),
        },
        {
          name: "station",
          title: this.$t("requestForm.station"),
          placeholder: this.$t("requestForm.stationPlaceholder"),
        },
        {
          name: "stationCode",
          title: this.$t("requestForm.stationCode"),
          placeholder: this.$t("requestForm.stationCodePlaceholder"),
        },
        {
          name: "stationEnd",
          title: this.$t("requestForm.stationEnd"),
          placeholder: this.$t("requestForm.stationEndPlaceholder"),
        },
        {
          name: "stationEndCode",
          title: this.$t("requestForm.stationEndCode"),
          placeholder: this.$t("requestForm.stationEndCodePlaceholder"),
        },
        {
          name: "codeCargo",
          title: this.$t("requestForm.codeCargo"),
          placeholder: this.$t("requestForm.codeCargoPlaceholder"),
        },
        {
          name: "position",
          title: this.$t("requestForm.position"),
          placeholder: this.$t("requestForm.positionPlaceholder"),
        },
        {
          name: "nameCargo",
          title: this.$t("requestForm.nameCargo"),
          placeholder: this.$t("requestForm.nameCargoPlaceholder"),
        },
        {
          name: "loadingContainer",
          title: this.$t("requestForm.loadingContainer"),
          placeholder: this.$t("requestForm.loadingContainerPlaceholder"),
        },
        {
          name: "volumeToSend",
          title: this.$t("requestForm.volumeToSend"),
          placeholder: this.$t("requestForm.volumeToSendPlaceholder"),
        },
        {
          name: "specialConditions",
          title: this.$t("requestForm.specialConditions"),
          placeholder: this.$t("requestForm.specialConditionsPlaceholder"),
        },
        {
          name: "negabarDegree",
          title: this.$t("requestForm.negabarDegree"),
          placeholder: this.$t("requestForm.negabarDegreePlaceholder"),
        },
        {
          name: "specialWagons",
          title: this.$t("requestForm.specialWagons"),
          placeholder: this.$t("requestForm.specialWagonsPlaceholder"),
        },
        {
          name: "containers",
          title: this.$t("requestForm.containers"),
          placeholder: this.$t("requestForm.containersPlaceholder"),
        },
      ];
    },
  },
  methods: {
    open() {
      this.popupIsVisible = true;
      this.blockScroll();
    },
    close() {
      this.popupIsVisible = false;
      this.unlockScroll();
    },
    blockScroll() {
      document.body.style.overflow = "hidden";
    },
    unlockScroll() {
      document.body.style.overflow = "";
    },
    updateFormData(name, value) {
      this.formData[name] = value;
    },
    async sendRequest() {
      let data = new FormData();

      // data.append("senderName", this.formData.senderName);
      // data.append("senderMail", this.formData.senderMail);
      // data.append("senderPhoneFax", this.formData.senderPhoneFax);
      // data.append("station", this.formData.station);
      // data.append("stationCode", this.formData.stationCode);
      // data.append("stationEnd", this.formData.stationEnd);
      // data.append("stationEndCode", this.formData.stationEndCode);
      // data.append("codeCargo", this.formData.codeCargo);
      // data.append("position", this.formData.position);
      // data.append("nameCargo", this.formData.nameCargo);
      // data.append("loadingContainer", this.formData.loadingContainer);
      // data.append("volumeToSend", this.formData.volumeToSend);
      // data.append("specialCondition", this.formData.specialConditions);
      // data.append("negabarDegree", this.formData.negabarDegree);
      // data.append("specialWagons", this.formData.specialWagons);
      // data.append("containers", this.formData.containers);

      const response = await fetch("./sendmail.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });
      console.log(response);
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.app-request-popup-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: $app-black, $alpha: 0.7);
  backdrop-filter: blur(5px);
  .app-request {
    width: 100%;
    max-width: 750px;
    height: 100%;
    max-height: 860px;
    background-color: $app-white;
    border-radius: 4px;
    margin: 20px;
    padding: 18px 48px 48px 48px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    .app-request-title {
      font-size: 28px;
      line-height: 42px;
      font-weight: 700;
      color: $app-gray;
      text-align: center;
    }
    .app-request-close-button {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 28px;
      right: 28px;
    }
    .list-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .request-input-list {
      width: 100%;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      .list-item {
        width: 49%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
        .item-title {
          font-size: 16px;
          line-height: 25px;
          font-weight: 400;
          color: $app-gray-for-input-title;
        }
        .item-input {
          width: 100%;
          height: 44px;
          border: 1px solid $app-input-gray;
          border-radius: 4px;
          outline: none;
          padding: 0 0 0 16px;
          box-sizing: border-box;
          font-size: 14px;
          transition: 0.3s;
          &::placeholder {
            color: $app-input-placeholder-gray;
          }
          &:focus {
            border: 1px solid $app-brand-secondary;
          }
        }
      }
    }
    .request-send-button {
      width: 100%;
      height: 44px;
      font-size: 14px;
      line-height: 44px;
      font-weight: 700 !important;
      text-transform: uppercase;
      color: $app-white;
      background-color: $app-brand-main;
      border-radius: 4px;
      outline: none;
      border: none;
    }
  }
}
@include max($tablet-l) {
  .app-request-popup-wrapper {
    .app-request {
      width: 100%;
      max-width: 480px;
      height: 100%;
      max-height: 860px;
      margin: 20px;
      padding: 18px 18px 18px 18px;
      .request-input-list {
        width: 100%;
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        .list-item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
        }
      }
    }
  }
}
</style>