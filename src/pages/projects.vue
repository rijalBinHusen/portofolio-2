<template>
<div class="flex flex-wrap flex-row overflow-auto">
<!-- <pre> {{ repos }} </pre> -->
    <!-- Card repos -->
    <div v-for="repo in repos" :key="repo" class="flex-shrink px-4 w-screen md:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
        <!-- service block -->
        <div class="rounded-lg py-8 px-9 mt-5 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 w-full">
            <h3 class="text-lg leading-normal mb-3 font-semibold text-black">
                {{ repo?.name }}
                <font-awesome-icon :icon="['fab', 'github']" /> 
            </h3>
            <p class="mb-3">Description: <span class="text-gray-500 ">{{ repo?.description || "No description" }}</span></p>
            <p class="text-sm"> Last update: 
                <span class="text-gray-500">{{ new Date(repo?.pushed_at).toLocaleString() }} </span>
            </p>
            <p ><span class="text-sm">Tech: </span>
                <!-- <pre> {{ repo?.topics }} </pre> -->
                <font-awesome-icon 
                    v-for="lang in repo?.topics" :key="lang" 
                    class="ml-1 text-lg" 
                    :icon="brandIconColor(lang).icon"
                    :style="{color: brandIconColor(lang).color }"
                />
            </p>
        </div>
        <!-- end service block -->
    </div>
    <!-- End of card repos -->
    <!-- Skeleton loading -->
    <!-- <div v-else v-for="num in [ ...Array(12).keys() ]" :key="num" class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
        <div class="rounded-lg lg:w-80 py-8 px-6 mt-5 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <Skeleton :rows="1" />
        </div>

    </div> -->
    <!-- End of skeleton loading -->
</div>
</template>

<script setup lang='ts'>

let repos = ref([])

const getRepository = async () => {
    await useFetch("https://api.github.com/users/rijalBinHusen/repos").then((res) => {
        renewLists(res?.data.value)
        window.localStorage.setItem('repository', JSON.stringify({
            repos: res.data.value,
            expired: new Date().getTime() + 86400000
        })
        )
    })
}

const renewLists = (newRepos) => {
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
        let getLocalRepos = JSON.parse(window.localStorage.getItem('repository'))
        // if local storage expired
        if(!getLocalRepos?.repos || new Date().getTime() > getLocalRepos.expired ) {
            // we do anything for you
            getRepository()
            return
        }
        renewLists(getLocalRepos.repos)
    }

})



const brandIconColor = (lang: String) => {
    if(lang === 'vue') {
        return {
            icon: 'fa-brands fa-vuejs',
            color: 'green'
        }
    }
    else if(lang === 'javascript') {
        return {
            icon: 'fa-brands fa-js',
            color: 'orange'
        }
    }
    else if(lang === 'bootstrap') {
        return {
            icon: 'fa-brands fa-bootstrap',
            color: 'blue'
        }
    }
    else if(lang === 'nodejs') {
        return {
            icon: 'fa-brands fa-node-js',
            color: 'green'
        }
    }
    else if(lang === 'react') {
        return {
            icon: 'fa-brands fa-react',
            color: 'blue'
        }
    }
    else if(lang === 'css') {
        return {
            icon: 'fa-brands fa-css3',
            color: 'pink'
        }
    }
    return {
        icon: 'fa-brands fa-html5',
        color: 'blue'
    }
}

</script>