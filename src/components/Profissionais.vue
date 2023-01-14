<template>
    <div class="border py-4 px-3 rounded-3 bg-primary shadow-lg">
        <div class="row">
            <div class="col">
                <h5 class="text-white ms-3"><i class="bi-file-person me-2"></i>Profissionais</h5>
                <ul class="nav nav-tabs border-0">
                    <li class="nav-item">
                        <router-link class="nav-link text-white"
                            :to="{ name: 'profissionais', params: { tipo: 'enfermeiros' } }">Enfermeiros</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white"
                            :to="{ name: 'profissionais', params: { tipo: 'socorristas' } }">Socorristas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white"
                            :to="{ name: 'profissionais', params: { tipo: 'medicos' } }">Médicos</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="text-white">
        <div class="row mt-3">
            <div class="col-11 mx-auto bg-white py-3 px-4 rounded-3">
                <span><router-view name="profissionais" /></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profissionais',
}
</script>

<style scoped>
.router-link-exact-active {
    font-weight: bold;
}
</style>
