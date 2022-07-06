<template>
  <div >
    <all-component gender="genderless"></all-component>
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

<style>
#jumbo {
  z-index: 0;
  background: rgba(0, 0, 0, 0.7) url("../assets/jumbo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
}
#rickmorty {
  max-width: 400px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
