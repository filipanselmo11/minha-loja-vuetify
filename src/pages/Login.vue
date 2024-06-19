<script lang="ts" setup>
import BreadCumbComponent from '@/components/BreadCumbComponent.vue';
import LoginForm from '@/components/LoginForm.vue';
import CadastroForm from '@/components/CadastroForm.vue';
import { ref, } from 'vue';
const items = [
  {
    title: 'Home',
    disabled: false,
    href: '/',
  },
  {
    title: 'Login',
    disabled: true,
    href: '/login',
  },
];

const email = ref('');
const senha = ref('');
const field = ref('');
const radios = ref('fisica');

// watchEffect(() => {
//   if(email.value) {
//     console.log(email.value)
//   }
// });

// watchEffect(() => {
//   if(senha.value) {
//     console.log(senha.value)
//   }
// });

// watchEffect(() => {
//   if(field.value) {
//     console.log(field.value)
//   }
// });

const login = () => {
  const dados = {
    'email': email.value,
    'senha': senha.value
  }
  console.log('Login realizado com sucesso');
  console.log('DADOS ', dados);
  email.value = '';
  senha.value = '';
}

const cadastro = () => {
  if(radios.value === 'fisica') {
    const dados = {
      'cpf': field.value
    }
    console.log('Cadastro realizado com sucesso');
    console.log('DADOS ', dados);
  } else {
    const dados = {
      'cnpj': field.value
    }
    console.log('Cadastro realizado com sucesso');
    console.log('DADOS ', dados);
  }
  field.value = '';
}

</script>

<template>
  <div class="d-flex justify-start">
    <BreadCumbComponent :items="items" />
  </div>
  <v-row class="d-flex justify-space-around" no-gutters>
    <section id="login">
      <LoginForm v-model:email="email" v-model:senha="senha" @realizar-login="login"/>
    </section>
    <section id="primeiro-acesso">
      <CadastroForm v-model:field="field" v-model:radios="radios" @realizar-cadastro="cadastro"/>
    </section>
  </v-row>
</template>
