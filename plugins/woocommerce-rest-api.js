import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api_wp = new WooCommerceRestApi({
  url: "http://127.0.0.1:8000",
  consumerKey: "ck_551d1ad9d485c133bbdc7cd79b168022b7633ae0",
  consumerSecret: "cs_d4ffe12a53151a7cabcf05669896108c574d1cee",
  version: "wc/v3",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/Json'
  }

});

export default api_wp
