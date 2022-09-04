<template>
    <!-- component -->
<nav id="header" class="w-full z-30 top-10 shadow-lg border-b border-gray-300 py-1 rounded-lg">
      <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label for="menu-toggle" v-if="!showMenu" @click="showMenu = !showMenu" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input class="hidden" type="checkbox" id="menu-toggle">
         
         <div v-if="showMenu" class="md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <!-- Navigation link -->
            <nav>
               <ul class="md:flex items-center justify-between text-base text-black pt-4 md:pt-0">
                  <li @click="showPage" v-for="nav in navs" :key="nav.title">
                     <NuxtLink 
                        :to="nav.route" 
                        class="inline-block no-underline hover:text-blue-600 font-medium text-lg py-2 px-4 lg:-ml-2"
                        :class="{'text-gray-500': isActive(nav.route)}"
                     >
                     {{ nav.title }}
                        <font-awesome-icon :icon="nav.icon"/>
                     </NuxtLink>      
                  </li>
               </ul>
            </nav>
            <!-- Navigation link -->
         </div>
         
         <div v-if="!showMenu" class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div class="auth flex items-center w-full md:w-full">
               <a href="https://github.com/rijalBinHusen">
                  <font-awesome-icon class="text-xl" :icon="['fab', 'github']" />
               </a>
               <!-- <button class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button> -->
            </div>
         </div>
      </div>
   </nav>
</template>

<script lang="ts" setup>
   const navs = [
      { title: 'Home', route: '/', icon: 'home'},
      { title: 'Blog', route: '/blog', icon: 'newspaper'},
      { title: 'About', route: '/', icon: 'user'},
      { title: 'Github repo', route: '/projects', icon: 'diagram-project'}
   ]

   const showMenu = ref(false)

   const route = useRoute()

   const isActive = (nowRoute: String) => {
      // console.log(route)
      return nowRoute.includes(route.name)
   }

   const mobileView = ref(false)

   const showPage = () => {
      if(mobileView.value) {
         showMenu.value = false
      }
   }

   const checkScreen = () => {
        if(window.innerWidth <= 750) {
            mobileView.value = true;
            showMenu.value = false
            return
        }
            mobileView.value = false;
            showMenu.value = true
      }

   onBeforeMount(() => {
      window.addEventListener('resize', checkScreen)
   })
</script>