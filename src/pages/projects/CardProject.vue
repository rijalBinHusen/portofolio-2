<template>
    <div class="w-screen md:w-1/3 md:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
        <!-- service block -->
        <div class="rounded-lg py-6 px-9 mt-5 bg-red-100 bg-opacity-50 shadow-lg border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 w-full">
            <h3 class="text-lg leading-normal mb-3 font-semibold text-black">
                {{ repoName }}
            </h3>
            <p class="mb-3">Description: <span class="text-gray-500 ">{{ description || "No description" }}</span></p>
            <p class="text-sm"> Last update: 
                <span class="text-gray-500">{{ new Date(pushedAt).toISOString().slice(0, 10) }} </span>
            </p>
            <p ><span class="text-sm">Tech: </span>
                <!-- <pre> {{ repo?.topics }} </pre> -->
                <Icon 
                    v-for="lang in topics" 
                    :key="lang" width="18" class="inline"
                    :icon="brandIconColor(lang)"
                    style="margin-right:2px"
                />
                
            </p>
            <div class="flex mt-5 boder border-gray-400 border-t pt-3 justify-between">
                <a :href="htmlUrl" class="font-light" target="_blank">
                    <Icon
                        width="18" class="inline"
                        icon="fa-brands:github"
                    />
                    Source
                </a>

                <a v-if="homepage" :href="homepage" class="font-light" target="_blank">
                    <Icon
                        width="18" class="inline"
                        icon="mdi:web"
                    />
                    Demo
                </a>
                
            </div>
        </div>
        <!-- end service block -->
    </div>
</template>

<script lang="ts" setup>

import { defineProps } from "vue"
import { Icon } from "@iconify/vue"

const props = defineProps({
    repoName: String,
    description: String,
    pushedAt: String,
    topics: Array,
    homepage: String,
    htmlUrl: String,
})


const brandIconColor = (lang?: String) => {

if(lang === 'html') {
    return 'uil:html5'
}

else if(lang === 'typescript') {
    return 'logos:typescript-icon'
}

else if(lang === 'tailwind') {
    return 'logos:tailwindcss-icon'
}

else if(lang === 'nodejs') {
    return 'logos:nodejs-icon'
}

else if(lang === 'css') {
    return 'vaadin:css'
} 

else if(lang === 'astrojs') {
    return 'vscode-icons:file-type-astro'
}

else if(lang === 'mysql') {
    return 'carbon:sql'
}

return 'logos:'+lang
}

</script>