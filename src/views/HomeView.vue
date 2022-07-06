<template>
  <div>
    <all-Component />
    <footer-component></footer-component>
  </div>
</template>

<script>
// @ is an alias to /src
import AllComponent from "@/components/AllComponent.vue";

import FooterComponent from "../components/FooterComponent.vue";
export default {
  name: "HomeView",
  components: {
    AllComponent,
    FooterComponent,
  },
  data: function () {
    return {};
  },
};
</script>


