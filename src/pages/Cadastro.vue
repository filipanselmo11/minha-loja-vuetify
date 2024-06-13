<script lang="ts" setup>
import BreadCumbComponent from '@/components/BreadCumbComponent.vue';
import CpfForm from '@/components/CpfForm.vue';
import RadioButtonComponent from '@/components/RadioButtonComponent.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
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
const rg = ref('');
const senha = ref('');
const telefone = ref('');

const router = useRouter();

const goLogin = () => {
  const dados = {
    'nome': nome.value,
    'cpf': cpf.value,
    'email': email.value,
    'rg': rg.value,
    'senha': senha.value,
    'telefone': telefone.value
  };
  router.push('/login');
  console.log('DADOS ', dados);
}

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
      <CpfForm
        v-model:cpf="cpf"
        v-model:nome="nome"
        v-model:email="email"
        v-model:rg="rg"
        v-model:senha="senha"
        v-model:telefone="telefone"
        @go-login="goLogin"/>
    </section>
    <section v-else id="cnpj-form">
      <span>Form do CNPJ</span>
    </section>
  </v-row>
</template>
