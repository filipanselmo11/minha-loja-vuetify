<script lang="ts" setup>
import { useRouter } from 'vue-router';

defineProps<{
  valueProd?: any,
  loading?: boolean,
}>();

defineEmits(['goCarrinho', 'update:valueProd', 'onClick']);

const items = [
  { id: 1, titulo: 'Manaus-AM' },
  { id: 2, titulo: 'Parintins-AM' },
  { id: 3, titulo: 'Tefé-AM' },
  { id: 4, titulo: 'Barcelos-AM' },
  { id: 5, titulo: 'São Gabriel da Cachoeira-AM' },
];
// const loading = ref(false);
// const loaded = ref(false);

// const onClick = () => {
//   loading.value = true;
//   setTimeout(() => {
//     loading.value = false;
//     loaded.value = true;
//   }, 2000);
// }

// const goCarrrinho = () => {
//   console.log('Ir para página de carrinho de compras');
// }


const router = useRouter();

const goLogin = () => {
  router.push('/login');
}

const goCadastro = () => {
  router.push('/cadastro');
}

const goHome = () => {
  router.go(-1);
}

</script>
<template>
  <v-app-bar height="60" :elevation="2" rounded density="compact">
    <div class="d-flex justify-start pa-4">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            {{ items[0].titulo }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, id) in items" :key="id">
            <v-list-item-title>
              {{ item.titulo }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex justify-end pa-6">
      <v-btn-toggle rounded="xl">
        <v-btn @click="goLogin">Entrar</v-btn>
        <v-btn @click="goCadastro">Cadastrar</v-btn>
        <v-btn>Área do Representante</v-btn>
      </v-btn-toggle>
    </div>
  </v-app-bar>
  <div>
    <v-app-bar :elevation="2" rounded>
      <v-app-bar-title>
        <v-btn @click="goHome" variant="text">Minha Loja</v-btn>
      </v-app-bar-title>
      <v-btn @click="$emit('goCarrinho', $event)" icon="mdi mdi-cart-outline"></v-btn>
        <v-text-field
        :model-value="valueProd"
        class="pa-4 mr-8"
        max-width="400"
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Buscar produto"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="$emit('onClick', $event)"
        @update:model-value="$emit('update:valueProd', $event)">
      </v-text-field>
    </v-app-bar>
  </div>
</template>
