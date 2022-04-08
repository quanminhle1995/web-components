<template>
  <slot name="title"></slot>
  <div class="content">
    <img :src="imageDesktop" />
  </div>
  <slot name="footer"> </slot>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
const props = defineProps({
  imageMobile: String,
  imageDesktop: String,
});
const dataHeader = ref();
axios
  .get(
    "https://dev.nguyenkimmall.com/esi.php?path_file=blocks-static_templates-header_list_brands&cache=true"
  )
  .then((res) => {
    dataHeader.value = res.data;
  })
  .catch((e) => {
    console.log(e);
  });
</script>

<style scoped lang="scss">
.nk-header {
  height: 300px;
  h1 {
    color: red;
    font-weight: bold;
  }
  padding: 0 0 0 264px;
}
</style>
