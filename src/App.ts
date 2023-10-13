import Vue from "vue";

export default Vue.extend({
  render(createElement) {
    return createElement("div", "render app");
  },
});
