<script lang="ts" setup>
import BreadCumbComponent from '@/components/BreadCumbComponent.vue';
import CnpjForm from '@/components/CnpjForm.vue';
import CpfForm from '@/components/CpfForm.vue';
import RadioButtonComponent from '@/components/RadioButtonComponent.vue';
import { PessoaFisicaInterface, usePessoaFisicaStore } from '@/stores/cadastro/pessoaFisicaStore';
import { PessoaJuridicaInterface, usePessoaJuridicaStore } from '@/stores/cadastro/pessoaJuridicaStore';
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

const pessoaFisicaRefs = {
  nome: ref(''),
  cpf: ref(''),
  email: ref(''),
  rg: ref(''),
  senha: ref(''),
  telefone: ref('')
};

const pessoaJuridicaRefs = {
  cnpj: ref(''),
  nomeEmpresa: ref(''),
  emailEmpresa: ref(''),
  senhaEmpresa: ref(''),
  telefoneEmpresa: ref(''),
  cep: ref(''),
  endereco: ref(''),
  cidade: ref(''),
  estado: ref(''),
  numero: ref(0)
};

const router = useRouter();

const pessoaFisicaStore = usePessoaFisicaStore();

const pessoaJuridicaStore = usePessoaJuridicaStore();

const pessoaFisicaObj = ref<PessoaFisicaInterface>({
  nome: pessoaFisicaRefs.nome.value,
  cpf: pessoaFisicaRefs.cpf.value,
  email: pessoaFisicaRefs.email.value,
  telefone: pessoaFisicaRefs.telefone.value,
  senha: pessoaFisicaRefs.senha.value,
  rg: pessoaFisicaRefs.rg.value
});

const pessoaJuridicaObj = ref<PessoaJuridicaInterface>({
  cnpj: pessoaJuridicaRefs.cnpj.value,
  email: pessoaJuridicaRefs.emailEmpresa.value,
  nome: pessoaJuridicaRefs.nomeEmpresa.value,
  telefone: pessoaJuridicaRefs.telefoneEmpresa.value,
  senha: pessoaJuridicaRefs.senhaEmpresa.value,
  cep: pessoaJuridicaRefs.cep.value,
  endereco: pessoaJuridicaRefs.endereco.value,
  cidade:pessoaJuridicaRefs. cidade.value,
  estado: pessoaJuridicaRefs.estado.value,
  numero: pessoaJuridicaRefs.numero.value
});
// const pessoaFisicaObj = ref<PessoaFisicaInterface>({
//   cpf: '',
//   nome: '',
//   email: '',
//   telefone: '',
//   senha: '',
//   rg: ''
// });

// const pessoaJuridicaObj = ref<PessoaJuridicaInterface>({
//   cnpj: '',
//   email: '',
//   nome: '',
//   telefone: '',
//   senha: '',
//   cep: '',
//   endereco: '',
//   cidade: '',
//   estado: '',
//   numero: 0
// });

const goLoginFisico = () => {
  pessoaFisicaStore.createPessoaFisica(pessoaFisicaObj.value);
  router.push('/login');
}

const goLoginJuridico = () => {
  pessoaJuridicaStore.createPessoaJuridica(pessoaJuridicaObj.value);
  router.push('/login');
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
        v-model:cpf="pessoaFisicaRefs.cpf.value"
        v-model:email="pessoaFisicaRefs.email.value"
        v-model:nome="pessoaFisicaRefs.nome.value"
        v-model:rg="pessoaFisicaRefs.rg.value"
        v-model:senha="pessoaFisicaRefs.senha.value"
        v-model:telefone="pessoaFisicaRefs.telefone.value"
        @go-login="goLoginFisico"
      />
    </section>
    <section v-else id="cnpj-form">
      <CnpjForm
        v-model:cep="pessoaJuridicaRefs.cep.value"
        v-model:cidade="pessoaJuridicaRefs.cidade.value"
        v-model:cnpj="pessoaJuridicaRefs.cnpj.value"
        v-model:email-empresa="pessoaJuridicaRefs.emailEmpresa.value"
        v-model:endereco="pessoaJuridicaRefs.endereco.value"
        v-model:estado="pessoaJuridicaRefs.estado.value"
        v-model:nome-empresa="pessoaJuridicaRefs.nomeEmpresa.value"
        v-model:numero="pessoaJuridicaRefs.numero.value"
        v-model:senha-empresa="pessoaJuridicaRefs.senhaEmpresa.value"
        v-model:telefone-empresa="pessoaJuridicaRefs.telefoneEmpresa.value"
        @go-login="goLoginJuridico"
      />
    </section>
  </v-row>
</template>
