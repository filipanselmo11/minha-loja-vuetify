<script lang="ts" setup>
const props = defineProps<{
  slides: object
}>();
</script>

<template>
  <v-carousel
    height="420"
    show-arrows="hover"
    cycle
  >
    <v-carousel-item
      v-for="(item, id) in props.slides"
      :key="id"
      cover
      :lazy-src="item.image"
      :src="item.image"
    >
    </v-carousel-item>
  </v-carousel>
</template>
