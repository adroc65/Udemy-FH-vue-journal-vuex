<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>
    <FabAddEntry />
</template>

<script>
    import { defineAsyncComponent } from "vue"

    export default {
        components: {
            FabAddEntry: defineAsyncComponent(() => import( '../components/FabAddEntry.vue' )),
        }
    }
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}

</style>