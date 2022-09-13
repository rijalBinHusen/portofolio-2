<template>
  <div class="flex flex-wrap flex-row overflow-auto">
    <div 
      class="mt-5 cursor-pointer flex-shrink px-4 w-screen md:w-1/3 lg:px-6 wow fadeInUp" 
      v-for="{ _path: slug, title, date, img, description } in blogs" :key="slug"
    >
      <NuxtLink class="no-underline" :to="slug">
        <div class="justify-center">
          <div class="py-2 rounded-lg w-96 text-gray-900 bg-white">
            <img :src="img" alt="blog" class="justify-center mx-4 w-11/12 rounded-lg">
            <div class="px-6 py-2 w-full rounded-t-lg">
                <p class="text-xl font-extrabold mb-2">
                  {{ title }}
                </p>
                <p class="border-b pb-2">
                  {{ description }}
                </p>
              <div>
                <font-awesome-icon icon="calendar-days"/> {{ date.slice(0, 10) }}
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
  </div>
</div>
</template>

<script setup lang="ts">
const blogs = ref([])

onMounted( async () => {
  blogs.value = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .find();
  })
</script>
