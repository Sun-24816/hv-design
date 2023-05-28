import { createApp } from "vue";
import App from "./app.vue";
import hvdesignPlus from "hvdesign-plus";

const app = createApp(App);
app.use(hvdesignPlus);
app.mount("#app");
