<script lang='ts' setup>
import BreadCumbComponent from '@/components/BreadCumbComponent.vue';

const items = [
  {
    title: 'Home',
    disabled: false,
    href: '/'
  },
  {
    title: 'Meu Carrinho',
    disabled: true,
    href: '/meu-carrinho'
  }
];
</script>

<template>
  <div class="d-flex justify-start">
    <BreadCumbComponent :items="items" />
  </div>
  <section id="carrinho">
    <div class="d-flex justify-center">
      <h2>Meu carrinho</h2>
    </div>
    <div class="d-flex justify-center mt-4">
      <span>
        O carrinho está vazio.
        Por favor adicione produtos ao carrinho.
        Para poder prosseguir com a compra.
      </span>
    </div>
  </section>
</template>
