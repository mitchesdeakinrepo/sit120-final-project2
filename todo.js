import { createApp } from "vue";
import "./style.css";
import ToDoApp from "./todoapp.vue";

const tdapp = createApp(ToDoApp);
tdapp.mount("#todoapp");
