import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        titulo: 'Emergências Médicas',
        equipe: {
            enfermeiro: 'João Paulo',
            socorrista: 'Paulo da Silva',
            medico: 'Matheus de Souza',
            carro: 'PBA2019',
            telefone: '75988186743',
            kitDeReanimacao: 'Kit 0001'
        }
    }
})