<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(equipe, indice) in equipes" :key=indice>
                <Equipe :dados="equipe"></Equipe>
            </li>
        </ul>
    </div>
</template>

<script>
import Equipe from '@/components/Equipe'
import { mapState } from 'vuex'

export default {
    name: 'ListaEquipes',
    computed: {
        ...mapState(['equipes'])
    },
    components: {
        Equipe
    }
}
</script>