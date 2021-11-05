<template>
  <div class="bg-white">
    <nav class="flex items-center justify-between mx-4 lg:mx-16">
      <h2 class="text-2xl font-black">LK</h2>
      <div class="">
        <nuxt-link to="/">Accueil</nuxt-link>
      </div>
      <div class="">
        <nuxt-link to="/vins">Vind</nuxt-link>
      </div>
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-16 h-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
