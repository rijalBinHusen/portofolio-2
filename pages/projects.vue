<template>
<div class="flex flex-wrap flex-row overflow-auto">
    <!-- Card repos -->
    <div v-for="repo in repos" :key="repo" class="flex-shrink px-4 w-screen md:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
        <!-- service block -->
        <div class="rounded-lg py-8 px-9 mt-5 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 w-full">
            <h3 class="text-lg leading-normal mb-3 font-semibold text-black">
                {{ repo?.name }}
                <!-- <font-awesome-icon :icon="['fab', 'github']" />  -->
            </h3>
            <p class="mb-3">Description: <span class="text-gray-500 ">{{ repo?.description || "No description" }}</span></p>
            <p class="text-sm"> Last update: 
                <span class="text-gray-500">{{ new Date(repo?.pushed_at).toLocaleString() }} </span>
            </p>
            <p ><span class="text-sm">Tech: </span>
                <pre> {{ repo?.topics }} </pre>
                <!-- <font-awesome-icon 
                    v-for="lang in repo?.topics" :key="lang" 
                    :class="$store.getters['fontAwesomeBrandColor'](lang ? lang : 'false')+ ' ml-1 text-lg'" 
                    :icon="$store.getters['fontAwesomeBrand'](lang ? lang : 'false')" 
                /> -->
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

const repos = await useFetch("https://api.github.com/users/rijalBinHusen/repos").then((res) => res?.data)

// import Skeleton from "./SkeletonLoading.vue"
    // components: {
    //     Skeleton
    // },
    // data() {
    //     return {
    //         repos: []
    //     }
    // },
    // async mounted() {
    //     // / get all github repository
    //     await this.$store.dispatch("getGithub")
    //     // then get languages that contain in the each repository
    //     // await this.$store.dispatch("getRepositoryLanguages")
    //     // after 1,5 second, Get the repository from the state
    //     setTimeout(() => {
    //         this.repos = this.$store.getters["gitRepos"]
    //         // console.log(this.$store.state.gitRepos)
    //         // console.log(this.$store.state.repoLanguages)
    //     }, 1500)
    //     // this.http.get("https://api.github.com/users/rijalBinHusen/events")
    //     // .then( (response) => this.github = response.data )
    //     // .catch(function (error) {
    //     // });
    // },
</script>