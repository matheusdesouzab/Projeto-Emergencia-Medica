<template>
  <div>

    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ $store.state.titulo }}</a>
      </div>
    </nav>

    <div class="container">

      <div class="row mt-5">
        <div class="col-6 p">
          <profissionais />
        </div>

        <div class="col-6">
          <equipamentos />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col">
          <configuracao-equipe />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col">
          <equipes />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfiguracaoEquipe from './ConfiguracaoEquipe.vue'
import Equipamentos from './Equipamentos.vue'
import Equipes from './Equipes.vue'
import Profissionais from './Profissionais.vue'

import { mapActions, mapMutations } from 'vuex'

export default {
  components: {
    ConfiguracaoEquipe,
    Equipamentos,
    Equipes,
    Profissionais
  },
  name: 'Index',
  props: {
    msg: String
  },
  methods: {
    ...mapMutations(['setEnfermeiros', 'setSocorristas', 'setMedicos', 'setCarros', 'setTelefones', 'setKitsDeReanimacao']),
    ...mapActions(['fetchEquipamentos', 'fetchProfissionais'])
  },
  created() {
    this.fetchEquipamentos({
      type: 'fetchEquipamentos'
    })
    this.fetchProfissionais()
  }
}
</script>
