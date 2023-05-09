<template>
    <div 
        @click="$router.push({ name: 'entry', params: { id:10 }})" 
        class="entry-container mb-3 pointer p-2"
        >
        <!-- Title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">18</span>
            <span class="mx-1 fs-5">Septiembre</span>
            <span class="mx-2 fw-light">1965, sábado</span>
        </div>
        <div class="entry-description">
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, laboriosam! Dignissimos enim voluptate labore minima magnam. Quam non, deleniti nisi eum quas consequuntur earum impedit amet! Labore provident minima nesciunt.</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
    }
    .entry-description{
        font-size: 12px;
    }
}

</style>