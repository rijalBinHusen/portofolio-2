<template>
  <h1>Blog</h1>
  <ul>
    <li v-for="{ _path: slug, title } in blogPosts" :key="slug">
      <NuxtLink :to="slug">{{ title }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const blogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .find();
</script>
