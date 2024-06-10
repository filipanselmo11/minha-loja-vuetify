<template>
  <v-app>
    <NavbarComponent/>
    <v-main>
      <router-view />
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script lang="ts" setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
  //
</script>
