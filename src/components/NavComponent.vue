<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" id="navbarNav">
          <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">All</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/unknown">Unknown</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/female">Female</router-link>

          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/male">Male</router-link>

          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/genderless">Genderless</router-link>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name:"NavComponent",
}
</script>

<style scoped>
@media (min-width: 992px) {
  #navbarNav {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  #navitem{
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 10px;
  }
}
</style>