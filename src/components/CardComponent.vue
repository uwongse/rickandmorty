<template>
  <div class="cards my-5">
    <div class="all" v-for="data in datacard" :key="data.id">
      <div class="card" @click="showMore(data.id)"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <img
          :src="`${data.image}`"
          class="img-fluid"
          :alt="`${data.name}`"
          style="height: 15rem"
        />
        <div class="card-body">
          <div>
            <p class="card-text">
              {{ data.status }}
            </p>
          </div>
          <div>
            <h6 class="card-title">
              {{ data.name }}
            </h6>
          </div>

          <div>
            <p class="card-text">Last Known location:</p>
          </div>
          <div>
            <b class="card-text">
              {{ data.location.name }}
            </b>
          </div>
          <div>
            <div>
              <p class="card-text">First seen in:</p>
            </div>
            <b class="card-text">
              {{ data.location.name }}
            </b>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    datacard: {
      type: Array,
    },
  },
  methods: {
    showMore(id) {
      this.$emit("showModal", id);
    }
  },
};
</script>

<style scoped>
.all {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 25rem;
}
.card-body {
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.cards {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .card-body {
    font-size: 1rem;
  }
  .all {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 15rem;
  }
  .cards {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
