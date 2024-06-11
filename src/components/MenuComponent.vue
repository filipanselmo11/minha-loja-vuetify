<script lang="ts" setup>
const menuProps = defineProps<{
  textBtn: string,
  optionsList: object
}>();
</script>

<template>
  <v-menu open-on-hover location="center">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">
        {{ menuProps.textBtn }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, id) in menuProps.optionsList"
        :key="id">
          <v-list-item-title class="text-center">
            {{ item.titulo }}
          </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
