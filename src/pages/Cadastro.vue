<script lang="ts" setup>
import BreadCumbComponent from '@/components/BreadCumbComponent.vue';
import CpfForm from '@/components/CpfForm.vue';
import RadioButtonComponent from '@/components/RadioButtonComponent.vue';
import { ref } from 'vue';
const items = [
  {
    title: 'Home',
    disabled: false,
    href: '',
  },
  {
    title: 'Cadastro',
    disabled: true,
    href: '/cadastro',
  },
];

const radios = ref('fisica');

const nome = ref('');
const cpf = ref('');
const email = ref('');

</script>

<template>
  <div class="d-flex justify-start">
    <BreadCumbComponent :items="items"/>
  </div>
  <div>
    <RadioButtonComponent v-model:radios="radios"/>
  </div>

  <v-row class="d-flex justify-space-around" no-gutters>
    <section v-if="radios === 'fisica'" id="cpf-form">
      <CpfForm v-model:cpf="cpf" v-model:nome="nome" v-model:email="email"/>
    </section>
    <section v-else id="cnpj-form">
      <span>Form do CNPJ</span>
    </section>
  </v-row>
</template>
