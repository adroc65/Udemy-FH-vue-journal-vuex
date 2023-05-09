<template>
    <div>
        <button>
            <i 
                class="fa fa-2x"
                :class="icon"
            ></i>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: 'fa-plus',
            },
        },
    }
</script>

<style lang="scss" scoped>
button{
    position: fixed;
    background:#2c3e50;
    color: whitesmoke;
    bottom: 20px;
    right: 20px;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition:.3s;
}
button:hover {
    transform:rotate(90deg);
}

</style>