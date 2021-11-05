<template>
  <div class="min-h-screen">
    <div class="carousel-wrapper">
      <VueSlickCarousel v-bind="slickOptions">
        <div v-for="i in 5" :key="i" class="img-wrapper">
          <img :src="`./${i}.jpg`" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
      },
    }
  },
}
</script>

<style>
.carousel-wrapper {
  padding: 40px;
  @apply bg-green-300;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
