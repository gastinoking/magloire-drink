<template>
  <div class="h-full min-h-screen overflow-hidden bg-gray-100 rounded">
    <Menu />
    <div class="bg-gray-200 h-72">
      <img src="9.jpg" alt="" class="object-cover w-full h-full" />
    </div>
    <div class="mx-4 lg:mx-16">
      <div class="block-categories">
        <Blockcategories v-for="ele in 3" :key="ele" />
      </div>
    </div>

    <!-- <div class="mx-4 lg:mx-16">
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
      >
        <div v-for="item in 28" :key="item">
          <Card :post="item" />
        </div>
      </div>
    </div> -->

    <div class="relative py-16 mx-16 mt-16">
      <VueSlickCarousel v-bind="slickOptions" ref="slick">
        <div v-for="item in 28" :key="item" class="relative">
          <Card :post="item" />
          <div
            class="absolute inset-0 w-full h-full overflow-hidden border border-red-300 rounded-lg "
          ></div>
        </div>
      </VueSlickCarousel>
      <div class="absolute top-0 z-40 right-2">
        <button
          type="button"
          class="bg-gray-300 border rounded-full w-9 h-9 slick-prev pull-left"
          @click="next"
        >
          <i
            class="text-2xl text-gray-700 fa fa-angle-left"
            aria-hidden="true"
          ></i>
        </button>
        <button
          type="button"
          class="bg-gray-300 border rounded-full w-9 h-9 slick-next pull-right"
          @click="prev"
        >
          <i
            class="text-2xl text-gray-700 fa fa-angle-right"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import Blockcategories from '~/components/Blockcategories.vue'
import Menu from '~/components/elements/Menu.vue'
export default {
  methods: {
    next() {
      this.$refs.slick.next()
    },
    prev() {
      this.$refs.slick.prev()
    },
  },
  data() {
    return {
      slickOptions: {
        arrows: false,
        dots: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        touchThreshold: 5,
        autoplay: true,
        dotsClass: 'arrow-direction',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      },
    }
  },
  components: { Menu },
}
</script>

<style lang="scss">
.slick-slider {
  @apply relative -mr-4;

  .slick-slide {
    @apply pr-4;
  }

  .arrow-direction {
    display: flex !important;

    @apply bg-blue-100 w-full;
    ul {
      margin: 0 auto !important;
    }
    li {
      content: 'dsfdsq';
      @apply mr-3 h-5 w-5 rounded-full bg-gray-900 flex justify-center items-center;

      &.slick-active {
        @apply bg-gray-500;
      }
    }
  }
}

.block-categories {
  @apply grid-cols-3 gap-6 my-6 lg:grid;
}
</style>
