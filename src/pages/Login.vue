<script lang="ts" setup>
import BreadCumbComponent from '@/components/BreadCumbComponent.vue';
import LoginForm from '@/components/LoginForm.vue';
// import CadastroForm from '@/components/CadastroForm.vue';
import { ref, watchEffect } from 'vue';
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

const email = ref('');
const senha = ref('');
const cpf = ref('');

watchEffect(() => {
  if(email.value) {
    console.log(email.value)
  }
});

watchEffect(() => {
  if(senha.value) {
    console.log(senha.value)
  }
});

watchEffect(() => {
  if(cpf.value) {
    console.log(cpf.value)
  }
});

const login = () => {
  console.log('REALIZANDO LOGIN');
}

const cadastro = () => {
  console.log('REALIZANDO CADASTRO');
}

</script>

<template>
  <div class="d-flex justify-start">
    <BreadCumbComponent :items="items" />
  </div>
  <!-- <div class="d-flex justify-end mr-3 mb-3">
    <v-btn>Voltar</v-btn>
  </div> -->
  <v-row class="d-flex justify-space-around" no-gutters>
    <section id="login">
      <LoginForm v-model:email="email" v-model:senha="senha" @realizar-login="login"/>
    </section>
    <section id="primeiro-acesso">
      <CadastroForm v-model:cpf="cpf" @realizar-cadastro="cadastro"/>
    </section>
  </v-row>
</template>
