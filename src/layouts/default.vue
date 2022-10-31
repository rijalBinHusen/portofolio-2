<template>  
    <div>    
        <Navbar />
        <main>
            <slot />    
        </main>  
    </div>
</template>

<style>
    .link {  margin-right: 1rem;}
</style>

<script lang="ts" setup>
import Navbar from '../components/Navbar.vue';
</script>
