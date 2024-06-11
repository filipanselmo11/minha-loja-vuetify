<script lang="ts" setup>
const links = [
  'Home',
  'Sobre',
  'Contato',
  'Trabalhe conosco'
];
</script>

<template>
  <v-footer>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text">
          {{ link }}
      </v-btn>
      <v-col
        class="text-center mt-4"
        cols="12">
          {{ new Date().getFullYear() }} - <strong> &copy; Fílip Anselmo</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
