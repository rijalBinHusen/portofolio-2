<template>
<div class="overflow-auto">
  <div class="flex font-semibold text-3xl justify-center md:mt-28 my-8">
    <h1 class="heading">ALL REPOSITORIES</h1>
  </div>
<!-- <pre> {{ repos }} </pre> -->
    <div v-if="repos.length" class="flex flex-wrap flex-row mb-2">
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
import { ref, onMounted } from 'vue';
import CardProject from "./CardProject.vue";
import { Main } from '../../utils/githubResponse';

let repos = ref(<Main[]>[])

const getRepository = async () => {
    fetch('https://api.github.com/users/rijalBinHusen/repos')
	.then(response => response.json())
	.then(data => {
        renewLists(data)
        window.localStorage.setItem('repository', JSON.stringify({
            repos: data,
            expired: new Date().getTime() + 86400000
        })
        )
    })
	.catch(err => console.error(err));
}

const renewLists = (newRepos: Main[]) => {
    repos.value = newRepos.sort(function (a, b) {
          // return a?.pushed_at - b?.pushed_at;
          let x = a.pushed_at;
          let y = b.pushed_at;
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
}

onMounted(() => {
    if(!repos.value?.length) {
        // get local storage firstt
        let getLocalRepos: { repos: Main[], expired: number } = JSON.parse(window.localStorage.getItem('repository') || '{"repos":null,"expired":0}')
        // if local storage expired
        if(!getLocalRepos?.repos || new Date().getTime() > getLocalRepos.expired ) {
            // we do anything for you
            getRepository()
            return
        }
        renewLists(getLocalRepos.repos)
    }

})

</script>