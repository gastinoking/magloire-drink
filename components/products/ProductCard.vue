<template>
  <div class="my-carde" v-if="product">
    <div class="my-carde-img">
      <img :src="product.images[0]['src']" alt="" />
    </div>
    <!-- <div class="my-carde-action">Ajouter au panier</div> -->
    <div class="my-carde-content">
      <div class="my-carde-content-title">
        <h2 class="font-bold">{{ product.name }}</h2>
      </div>
      <div class="my-1 my-carde-content-prix">
        <h3 class="text-sm">{{ product.price }}</h3>
      </div>
      <div class="flex justify-center w-full mb-4">
        <span v-for="i in 5" :key="i">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-yellow-500 fill-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </span>
      </div>
      <div class=""></div>
      <!-- <div class="my-carde-content-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        exercitationem placeat sit
      </div> -->
    </div>
    <button
      @click="ajouterPanier(product)"
      class="flex items-center justify-between w-full px-4 py-2 text-xs leading-loose tracking-wide text-white uppercase bg-red-500 rounded "
    >
      <span class="inline-block"> Ajouter au panier</span>
      <i class="hidden text-lg fas fa-shopping-cart md:inline-block"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {
        images: {
          src: ''
        }
      },
    },
  },

  methods: {
    ajouterPanier(product) {
      this.$store.dispatch('panier/addProductToCart', product)
      alert('Ajouter au panier')
    },
  },
}
</script>

<style lang="scss" scoped>
.my-carde {
  @apply bg-white overflow-hidden rounded relative shadow-sm;

  :hover img {
    @apply scale-110 transform duration-500;
  }

  &-img {
    @apply aspect-w-9 aspect-h-16 relative overflow-hidden;
    img {
      @apply w-full h-full object-center object-cover;
    }
  }
  .my-carde-action {
    @apply absolute bottom-0   bg-black  w-full text-gray-100;
  }

  &-content {
    &-title {
      @apply text-sm text-red-600;
    }
    &-description {
      @apply text-sm;
    }
    @apply text-center p-3;
  }
}
</style>
