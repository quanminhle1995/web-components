<template>
  <div class="lst-product">
    <div v-for="item in products" key="item" class="card">
      <a :href="`/${dataProduct(item).seo_name}.html`">
        <h5>{{ dataProduct(item).product }}</h5>
        <img
          width="300px"
          height="auto"
          :src="dataProduct(item).main_pair.detailed.image_path"
          :alt="dataProduct(item).seo_name"
        />
        <div v-html="dataProduct(item).short_description">
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
const products = ref(); 
const productsObject = ref();
const dataProduct = (id: any) => {
  console.log(productsObject.value[id].seo_name);
  return productsObject.value[id];
};
axios.get("https://dev.nguyenkimmall.com/may-lanh/?format=json").then((res) => {
  console.log(res.data);
  productsObject.value = res.data.products;
  products.value = Object.keys(productsObject.value);
});

const addMetaData = () => {
  var meta = document.createElement("meta");
  meta.setAttribute("http-equiv", "X-UA-Compatible");
  meta.setAttribute("content", "IE=Edge");
  document.getElementsByTagName("head")[0].appendChild(meta);
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.lst-product {
  display: flex;
  flex-wrap: wrap;
  .lst-product-category {
    color: red;
  }
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 0 1rem 0 1rem;
    padding: 1rem;
    width: 30%;
    word-break: break-word;
    margin-bottom: 1rem;
    img {
      width: 300px;
      height: auto;
    }
  }
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
