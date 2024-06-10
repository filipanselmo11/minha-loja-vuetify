<script lang="ts" setup>
import { ref } from 'vue';
const items = [
  { id: 1, titulo: 'Manaus-AM' },
  { id: 2, titulo: 'Parintins-AM' },
  { id: 3, titulo: 'Tefé-AM' },
  { id: 4, titulo: 'Barcelos-AM' },
  { id: 5, titulo: 'São Gabriel da Cachoeira-AM' },
];
const loading = ref(false);
const loaded = ref(false);

const onClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
}

const goCarrrinho = () => {
  console.log('Ir para página de carrinho de compras');
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
        <v-btn>Entrar</v-btn>
        <v-btn>Cadastrar</v-btn>
        <v-btn>Área do Representante</v-btn>
      </v-btn-toggle>
    </div>
  </v-app-bar>
  <div>
    <v-app-bar :elevation="2" rounded>
      <v-app-bar-title class="pa-4">Minha Loja</v-app-bar-title>
      <v-btn @click="goCarrrinho" icon="mdi mdi-cart-outline"></v-btn>
        <v-text-field
        class="pa-4 mr-8"
        max-width="400"
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Buscar produto"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="onClick">
      </v-text-field>
    </v-app-bar>
  </div>
</template>
