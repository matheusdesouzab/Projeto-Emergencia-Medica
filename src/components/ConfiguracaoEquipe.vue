<template>
  <div class="border py-4 px-3 rounded-3 bg-secondary shadow-lg">
    <div class="row">
      <div class="col">
        <h5 class="text-white ms-3"><i class="bi-boxes me-2"></i>Equipe</h5>
      </div>
    </div>
    <hr class="text-white">
    <div class="row mt-4 p-3">
      <div class="col-8">
        <p><span>Enfermeiro:</span> {{ enfermeiro }}</p>
        <p><span>Socorrista:</span> {{ socorrista }}</p>
        <p><span>Médico:</span> {{ medico }}</p>
        <p><span>Carro:</span> {{ carro }}</p>
        <p><span>Telefone:</span> {{ telefone }}</p>
        <p><span>Kit de reanimação:</span> {{ kitDeReanimacao }}</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" :src="require(`@/assets/ambulancias/${imgAmbulancia}`)">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-light fw-bold" @click="montarEquipe()">Montar equipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'ConfiguracaoEquipe',
  data: () => ({
    titulo: ''
  }),
  computed: {
    ...mapState({
      enfermeiro: state => state.equipe.enfermeiro,
      socorrista: state => state.equipe.socorrista,
      medico: state => state.equipe.medico,
      carro: state => state.equipe.carro,
      telefone: state => state.equipe.telefone,
      kitDeReanimacao: state => state.equipe.kitDeReanimacao,
      tituloCustomizadoLocal(state) {
        return this.titulo + state.equipe.carro
      }
    }),
    imgAmbulancia() {
      if (this.kitDeReanimacao) {
        return 'uti.png'
      }
      if (this.carro) {
        return 'simples.png'
      }
      return 'indefinida.png'
    }
  },
  methods: {
    montarEquipe(){
      let equipe = Object.assign({}, this.$store.state.equipe)
      this.$store.commit('adicionarEquipeEmEquipes', equipe)
    }
  }

}
</script>

<style scoped>
p span{
  color: white;
  font-weight: bold;
}
p{
  color: white;
}
</style>
