<template>
    <a 
        v-if="href" 
        :href="href" 
        class="btn"
    >
        {{ text }}
    </a>
    
    <button 
        v-else 
        type="button" 
        class="btn"
    >
        {{text}}
    </button>
                
</template>

<script setup lang="ts">

defineProps({
    text: String,
    href: String,
})

const btnClass = "inline-block rounded bg-red-300 px-6 pb-2 pt-2.5 font-medium uppercase leading-normal font-semi-bold text-lg shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]";

</script>

<style scoped>
    .btn {
        display: inline-block;
        padding: 0.2rem 2rem 0.2rem 2rem;
        font-weight: bold;
        text-transform: uppercase;
        font-size: medium;
        border: salmon solid 1px;
        box-shadow: 0px 5px 5px pink;
    }
</style>