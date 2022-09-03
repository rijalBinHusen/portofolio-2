<template>  
    <div>    
        <nav>      
            <NuxtLink to="/" class="link">
                Home
                <font-awesome-icon icon="fa-solid fa-home" class="text-sm" />
                <!-- <font-awesome-icon :icon="['fas', 'home']"  class="text-sm" /> -->
            </NuxtLink>      
            <NuxtLink to="/blog" class="link">
                Blog
                <font-awesome-icon icon="fa-solid fa-newspaper" class="text-sm" />
            </NuxtLink>    
        </nav>    
        <main>      
            <slot />    
        </main>  
    </div>
</template>

<style>
    .link {  margin-right: 1rem;}
</style>