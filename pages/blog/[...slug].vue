<template>
  <div>
    <ContentDoc
      :path="$route.params.slug ? `/blog/${$route.params.slug[0]}` : '/blog'"
      class="prose p-16 max-w-3xl m-auto"
    >
      <template #not-found>
        <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
      </template>
    </ContentDoc>
  </div>
</template>
