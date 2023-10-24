import { routes } from "../constants/router";

export const APP_NAVIGATION = (context: any) => {
  return [
    {
      id: 1,
      name: "aboutCompany",
      text: context.$t("appHeader.appMenu.aboutCompany"),
      to: routes.aboutUs,
    },
    {
      id: 2,
      name: "services",
      text: context.$t("appHeader.appMenu.services"),
      to: routes.services,
    },
    {
      id: 3,
      name: "application",
      text: context.$t("appHeader.appMenu.application"),
      to: routes.application,
    },
    // {
    //   id: 4,
    //   name: "contacts",
    //   text: context.$t("appHeader.appMenu.contacts"),
    //   to: routes.contacts,
    // },
  ];
};
