<template>
  <div>
    <Menu />
    <h2>Lise des vins</h2>

    <div class="grid grid-cols-5 gap-5">
      <div v-for="product in products" :key="product.id" class="relative">
        <ProductCard :product="product" />
      </div>
    </div>

    <div class="">
      <button @click="commander" class="max-w-sm p-4 bg-green-700">
        commender 1
      </button>
      <button @click="orderProduct" class="max-w-sm p-4 bg-blue-700">
        commender 2
      </button>
    </div>

    <h2>Panier</h2>

    <div class="">
      <pre>
        {{ $store.getters['panier/cartProducts'] }}
      </pre>
    </div>

    <hr />

    <pre>
      {{ products }}
    </pre>
  </div>
</template>

<script>
import Menu from '~/components/elements/Menu.vue'
import api_wp from '~/plugins/woocommerce-rest-api'
import ProductCard from '~/components/products/ProductCard.vue'
import { mapGetters } from 'vuex'

export default {
  components: { Menu, ProductCard },
  mounted() {
    this.getProducts()
  },
  computed: {
    ...mapGetters({ products: 'products/all' }),
  },
  data() {
    return {}
  },
  methods: {
    orderProduct() {
      const data = {
        payment_method: 'bacs',
        payment_method_title: 'Direct Bank Transfer',
        set_paid: true,
        billing: {
          first_name: 'John',
          last_name: 'Doe',
          address_1: '969 Market',
          address_2: '',
          city: 'San Francisco',
          state: 'CA',
          postcode: '94103',
          country: 'US',
          email: 'john.doe@example.com',
          phone: '(555) 555-5555',
        },
        shipping: {
          first_name: 'John',
          last_name: 'Doe',
          address_1: '969 Market',
          address_2: '',
          city: 'San Francisco',
          state: 'CA',
          postcode: '94103',
          country: 'US',
        },
        line_items: [
          {
            product_id: 93,
            quantity: 2,
          },
          {
            product_id: 22,
            variation_id: 23,
            quantity: 1,
          },
        ],
        shipping_lines: [
          {
            method_id: 'flat_rate',
            method_title: 'Flat Rate',
            total: '10.00',
          },
        ],
      }

      api_wp
        .post('orders', data)
        .then((response) => {
          console.log(response.data)
          alert('SUCCES')
        })
        .catch((error) => {
          console.log(error)
          alert('ERROR')
        })
    },
    async commander() {
      const line_items = this.$store.getters['panier/cartProducts'].map((p) => {
        return {
          product_id: p.id,
          quantity: p.quantity,
        }
      })
      let order = {
        payment_method: 'bacs',
        payment_method_title: 'Direct Bank Transfer',
        set_paid: true,
        line_items: line_items,
        billing: {
          first_name: 'John',
          last_name: 'Doe',
          address_1: '969 Market',
          address_2: '',
          city: 'San Francisco',
          state: 'CA',
          postcode: '94103',
          country: 'US',
          email: 'john.doe@example.com',
          phone: '(555) 555-5555',
        },

        shipping: {
          first_name: 'Bienfoali',
          last_name: 'Damssan',
          address_1: '969 Market',
          address_2: '',
          city: 'San Francisco',
          state: 'CA',
          postcode: '94103',
          country: 'US',
        },

        shipping_lines: [
          {
            method_id: 'flat_rate',
            method_title: 'Flat Rate',
            total: '10.00',
          },
        ],
      }

      try {
        const rep = await api_wp.post('orders', order)
        alert('Commande passé ')
      } catch (error) {
        console.log(error)
      }
    },
    async getProducts() {
      api_wp
        .get('products', {
          per_page: 20, // 20 products per page
        })
        .then((response) => {
          // Successful request
          // this.products = response.data
          this.$store.dispatch('products/getAllProducts', response.data)
        })
        .catch((error) => {
          // Invalid request, for 4xx and 5xx statuses
          console.log('Response Status:', error.response.status)
          console.log('Response Headers:', error.response.headers)
          console.log('Response Data:', error.response.data)
        })
        .finally(() => {
          // Always executed.
        })
    },
  },

  async fetch() {},
  async asyncData({ params, $http }) {
    const products = []
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
