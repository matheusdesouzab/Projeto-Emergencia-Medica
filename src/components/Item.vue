<template>
    <div class="row d-flex align-items-center">
        <div class="col-1" v-if="dados.id" v-text="dados.id"></div>
        <div class="col" v-if="dados.nome" v-text="dados.nome"></div>
        <div class="col-2" v-if="dados.escala" v-text="dados.escala"></div>
        <div class="col-2" v-if="dados.turno" v-text="dados.turno"></div>
        <div class="col" v-if="dados.telefone" v-text="dados.telefone"></div>
        <div class="col" v-if="dados.placa" v-text="dados.placa"></div>
        <div class="col" v-if="dados.kit" v-text="dados.kit"></div>
        <div class="col-1 col-check bg-info">
            <i class="bi-check2-square text-light" style="cursor: pointer" @click="adicionarItemEquipe()"></i>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'Item',
    props: {
        dados: Object,
        tipo: String
    },
    methods: {
        ...mapMutations({
            setItemEquipe: 'setItemEquipe'
        }),
        adicionarItemEquipe() {
            let item = {
                tipo: this.tipo,
                dados: this.dados
            }
            this.setItemEquipe(item)
        }
    }
}
</script>

<style scoped>
.row > div{
    margin-top: 10px;
}
.col-check{
    border-radius:5px;
}
</style>