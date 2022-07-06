<template>
  <div data-bs-toggle="modal">
    <div id="jumbo" class="p-5 text-center bg-image rounded-3">
      <div class="mask">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <div id="rickmorty">
              <img src="../assets/rm.png" class="img-fluid" alt="rickymorty" />
            </div>
            <div class="input-group rounded">
              <input
                type="text"
                v-model="search"
                class="form-control rounded"
                placeholder="Buscar personaje..."
                v-on:keyup="searchData"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-component></nav-component>

    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <nav class="mt-5">
              <div class="botones">
                <a
                  type="button"
                  class="btn btn-dark"
                  @click="changePage(page - 1)"
                  >Anterior</a
                >
                <a
                  type="button"
                  class="btn btn-dark"
                  @click="changePage(page + 1)"
                  >Siguiente</a
                >
              </div>

              <p>Página: {{ page }}</p>
            </nav>
            <card-componet
              @showModal="showModal"
              :datacard="datacard"
            ></card-componet>
            <div>
              <!-- Modal -->
              <div
                class="modal fade bd-example-modal-lg"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="card" id="cardModal">
                    <div class="img1">
                      <img
                        id="imgModal"
                        src="../assets/bg.jpg"
                        alt=""
                        class="img-fluid w-100"
                      />

                      <img id="botonModal" src="../assets/close.svg" />
                    </div>

                    <div class="img2">
                      <img
                        :src="`${currentCharacter.image}`"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="datosArriba">
                      <p>{{ currentCharacter.status }}</p>
                      <p>{{ currentCharacter.name }}</p>
                      <p>{{ currentCharacter.species }}</p>
                    </div>

                    <div class="modal-body">
                      <div>
                        <b class="titulo">Informacion</b>
                        <div>
                          <p>Gender: {{ currentCharacter.gender }}</p>
                        </div>
                        <div>
                          <p>Origin {{ originName }}</p>
                        </div>
                        <div>
                          <p>Type: {{ currentCharacter.type }}</p>
                        </div>
                      </div>
                      <b class="titulo">Episodios</b>
                      <div class="episodes">
                        <div v-for="data in allEpisode" :key="data.id">
                          <div
                            id="cardpeli"
                            class="card px-1 py-2"
                            style="width: 12rem; height: 10rem"
                          >
                            <div class="card-text">
                              <p>{{ data.name }}</p>
                            </div>
                            <div class="card-text">
                              <strong>{{ data.episode }}</strong>
                            </div>
                            <div class="card-text">
                              <p>{{ data.air_date }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardComponet from "./CardComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
export default {
  name: "AllComponent",
   props: {
    gender: String,
  },
  components: {
    CardComponet,
    NavComponent,
  },
  created() {
    this.dataFilter();
  },
  methods: {
    dataFilter() {
      const params = {
        page: this.page,
        name: this.search,
        gender: this.gender
      };

      let result = axios
        .get("https://rickandmortyapi.com/api/character/", { params })
        .then((resp) => {
          this.datacard = resp.data.results;
          this.pages = resp.data.info.pages;
          console.log(this.pages);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changePage(page) {
      this.page = page <= 0 || page > this.pages ? this.page : page;
      this.dataFilter();
    },
    searchData() {
      this.page = 1;
      this.dataFilter();
    },
    showModal(id) {
      this.fetchOne(id);
    },
    async fetchOne(id) {
      let result = await axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((resp) => {
          this.currentCharacter = resp.data;
          this.modal = true;
          this.originName = resp.data.origin["name"];
          this.name = resp.data.name;
          let dataEpisode = resp.data.episode;
          //console.log(this.allEpisode);
          this.allEpisode = [];
          dataEpisode.forEach(async (element) => {
            //let indice = element.indexOf("https://rickandmortyapi.com/api/episode/");
            let extraida = element.substring(40, 45);
            //console.log(element,extraida);
            let result2 = await axios
              .get(`https://rickandmortyapi.com/api/episode/${extraida}`)
              .then((resp) => {
                this.allEpisode = this.allEpisode.concat(resp.data);

                console.log(this.allEpisode);
              });
          });

          console.log(this.name);
        });
    },
  },
  data() {
    return {
      datacard: [],
      pages: 1,
      page: 1,
      search: "",
      modal: false,
      currentCharacter: {},
      idEpisode: "",
      originName: "",
      episodeData: "",
      allEpisode: [],
      dataEpisode: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titulo {
  font-size: 1.6rem;
}
.datosArriba {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
#cardModal {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.img1 img {
  height: 200px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 100%;
}
.img2 img {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 7px solid #fff;
  margin-top: -80px;
}
.episodes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
}
#botonModal {
  height: 2em;
  width: 2em;
  position: absolute;
  top: 1em;
  right: 1em;
}
#imgModal {
  position: relative;
}
.botones {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
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
