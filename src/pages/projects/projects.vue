<template>
<div class="overflow-auto">
  <div :class="['flex font-semibold text-3xl justify-center', isOnlyProjects ? '' : ' md:mt-28 my-8']">
    <h1 class="heading">{{ isOnlyProjects ? 'Recent projects' : 'ALL REPOSITORIES' }}</h1>
  </div>
<!-- <pre> {{ repos }} </pre> -->
    <div v-if="repos.length" :class="['flex flex-wrap flex-row mb-2', isOnlyProjects ? 'justify-center' : '']">
        <!-- Card repos -->
        <CardProject 
            v-for="repo in repos" :key="repo.name"
            :repoName="repo.name" 
            :description="repo.description" 
            :pushedAt="repo.pushed_at" 
            :topics="repo.topics" 
            :homepage="repo.homepage" 
            :htmlUrl="repo.html_url" 
        />
    </div>
</div>
</template>

<script setup lang='ts'>
import { ref, onMounted, defineProps } from 'vue';
import CardProject from "./CardProject.vue";
import { Main } from '../../utils/githubResponse';
import { getRepositories } from "../../scripts/getRepositories"

let repos = ref(<Main[]>[])

const props = defineProps({
    isOnlyProjects: Boolean,
})

onMounted( async () => {
    if(!repos.value?.length) {
        const repositories = await getRepositories()
        let count = 0;
        console.log(props.isOnlyProjects)
        if(props.isOnlyProjects) {
            repos.value = repositories.filter((repo) => {
                if(count < 2 && repo.html_url) {
                    count++
                    return repo
                }
            })
        } else {
            repos.value = repositories;
        }
    }
})

</script>