const template = "<div><h1> hi VUE 3 {{message}}</h1></div>";
const data = function data() {
  return {
    message: "working",
  };
};
const app = {template,data,};
Vue.createApp(app).mount("#hi");
const Counter = {
  data() {
    return {
      counter: 1,
    };
  },

  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};

Vue.createApp(Counter).mount("#counter");
