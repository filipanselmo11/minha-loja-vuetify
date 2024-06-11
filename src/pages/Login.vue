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
  <BreadCumbComponent :items="items" />
  <section id="login">
    <LoginForm/>
  </section>
  <section id="primeiro-acesso"></section>
</template>
