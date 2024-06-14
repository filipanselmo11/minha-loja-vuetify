<script lang="ts" setup>
import BreadCumbComponent from '@/components/BreadCumbComponent.vue';
import CnpjForm from '@/components/CnpjForm.vue';
import CpfForm from '@/components/CpfForm.vue';
import RadioButtonComponent from '@/components/RadioButtonComponent.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const items = [
  {
    title: 'Home',
    disabled: false,
    href: '',
    goHome: () => console.log('HOME')
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
const cnpj = ref('');
const nomeFantasia = ref('');
const razaoSocial = ref('');
const emailEmpresa = ref('');
const senhaEmpresa = ref('');
const telefoneEmpresa = ref('');
const cep = ref('');
const endereco = ref('');
const cidade = ref('');
const estado = ref('');
const numero = ref(0);


const router = useRouter();

const goLogin = () => {
  const dados = {
    'nome': nome.value,
    'cpf': cpf.value,
    'email': email.value,
    'rg': rg.value,
    'senha': senha.value,
    'telefone': telefone.value,
    'cnpj': cnpj.value,
    'nome fantasia': nomeFantasia.value,
    'razao social': razaoSocial.value,
    'email empresa': emailEmpresa.value,
    'telefone da empresa': telefoneEmpresa.value,
    'cep': cep.value,
    'estado': estado.value,
    'numero': numero.value
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
      <CnpjForm
        v-model:cnpj="cnpj"
        v-model:nome-fantasia="nomeFantasia"
        v-model:razao-social="razaoSocial"
        v-model:email-empresa="emailEmpresa"
        v-model:senha-empresa="senhaEmpresa"
        v-model:telefone-empresa="telefoneEmpresa"
        v-model:cep="cep"
        v-model:endereco="endereco"
        v-model:cidade="cidade"
        v-model:estado="estado"
        v-model:numero="numero"
        @go-login="goLogin"/>
    </section>
  </v-row>
</template>
