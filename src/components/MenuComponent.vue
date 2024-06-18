<script lang="ts" setup>
defineProps<{
  textBtn: string,
  optionsList: any
}>();
</script>

<template>
  <v-menu open-on-hover location="center">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">
        {{ textBtn }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, id) in optionsList" :key="id" :value="id">
        <v-list-item-title class="text-center">
          {{ item.titulo }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
