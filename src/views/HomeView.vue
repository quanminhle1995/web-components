

<script setup lang="ts">
import { ref } from "vue";

const arr = ref([1,2,3,4,5]);

const object = ref({
  id: 13,
  name: 'quan'
});
</script>

<template>
  <nk-header string-prop="1" number-prop="123"
    .users='arr' .object="object"></nk-header>
</template>
