<script lang="ts" setup>
import BreadCumbComponent from '@/components/BreadCumbComponent.vue';
import LoginForm from '@/components/LoginForm.vue';
const items = [
  {
    title: 'Home',
    disabled: false,
    href: '',
  },
  {
    title: 'Login',
    disabled: true,
    href: '/login',
  },
];

</script>

<template>
  <div class="d-flex justify-start">
    <BreadCumbComponent :items="items" />
  </div>
  <!-- <div class="d-flex justify-end mr-3 mb-3">
    <v-btn>Voltar</v-btn>
  </div> -->
  <section id="login">
    <LoginForm />
  </section>
  <section id="primeiro-acesso"></section>
</template>
