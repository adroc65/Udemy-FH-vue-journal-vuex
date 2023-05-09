<template>
    <div class="entry-list-container">
        <div class="input-group mb-3 p-2">
            <span class="input-group-text" id="buscar-entrada"><i class="fa fa-search"></i></span>
            <input type="text" class="form-control" placeholder="Buscar Entrada" aria-label="buscar" aria-describedby="buscar-entrada">
        </div>
        <div class="entry-scrollarea">
            <SingleEntry
                v-for="item in 100"
                :key="item"
            />
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue"
    export default {
        components: {
            SingleEntry: defineAsyncComponent(() => import( './SingleEntry.vue' )),
        }
    }
</script>

<style lang="scss" scoped>

.entry-list-container{
    border-width: 5px solid #2c3e50;
    height: calc( 100vh - 56px );
}
.entry-scrollarea{
    height: calc( 100vh - 110px );
    overflow: scroll;

}

</style>
