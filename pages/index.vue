<template>
  <main>
    <section class="hero-section">
      <header>
        <h1 class="font-black text-8xl">Welcome to my site</h1>
        <p>Take a look at <NuxtLink to="/blog">my blog</NuxtLink></p>
      </header>
    </section>
      <ul>
        <li v-for="post in posts" :key="post._path">
          <nuxt-link :to="`${post._path}`"> {{ post.title }} </nuxt-link>
        </li>
      </ul>
        <!-- <pre>{{ posts }}</pre> -->
  </main>
</template>

<script setup>
    const { data: posts } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
