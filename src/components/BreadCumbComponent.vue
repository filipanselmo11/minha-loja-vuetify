<script lang="ts" setup>
const breadCumProps = defineProps<{
  items: any
}>();
</script>

<template>
  <v-breadcrumbs :items="breadCumProps.items">
    <template v-slot:prepend>
      <v-icon icon="$vuetify" size="small"></v-icon>
    </template>
  </v-breadcrumbs>
</template>
