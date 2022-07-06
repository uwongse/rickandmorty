<template>
  <div >
    <all-component gender="male"></all-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import AllComponent from "@/components/AllComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
export default {
  components: {
    AllComponent,
    FooterComponent
  },
  data: function () {
    return {

    };
  },
};
</script>


