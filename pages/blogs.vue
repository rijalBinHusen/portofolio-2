<template>
  <main>
    <h1>My blogs</h1>
    <ul>
        <li v-for="post in posts" :key="post._path">
          <nuxt-link :to="`${post._path}`"> {{ post.title }} </nuxt-link>
        </li>
      </ul>
        <!-- <pre>{{ posts }}</pre> -->
  </main>
</template>

<script setup>
    const posts = await 
                        queryContent()  
                        .sort({ date: -1 }) // show latest articles first  
                        .where({ _partial: false }) // exclude the Partial files  
                        .find();
</script>
