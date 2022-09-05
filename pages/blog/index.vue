<template>
<div>
  <h1>Blog</h1>
  <div>
    <div v-for="{ _path: slug, title, date } in blogPosts" :key="slug">
      <NuxtLink class="no-underline" :to="slug">
          <div class="text-xl font-extrabold">
            {{ title }}
          </div>
          <span>
            <font-awesome-icon icon="calendar-days"/> {{ date.slice(0, 10) }}
          </span>
      </NuxtLink>

    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const blogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .find();
</script>
