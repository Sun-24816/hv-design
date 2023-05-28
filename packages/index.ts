import { App } from "vue";
import components from "@hvdesign-plus/components";
export default {
  install: (app: App) => {
    components.forEach((comp) => app.use(comp));
  },
};
