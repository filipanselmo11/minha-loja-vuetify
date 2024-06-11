<script lang="ts" setup>
const cardProps = defineProps<{
  image: string,
  nome: string,
  quantidade: number,
  preco: string
}>();
</script>

<template>
  <v-card class="mx-auto" max-width="344">
    <v-img height="200px" :src="cardProps.image" cover></v-img>
    <v-card-title>
      {{ cardProps.nome }}
    </v-card-title>
    <v-card-subtitle>
      {{ cardProps.quantidade }}
    </v-card-subtitle>
    <v-card-text>
      {{ cardProps.preco }}
    </v-card-text>
    <div class="d-flex justify-center mb-2">
      <v-btn>Comprar</v-btn>
    </div>
  </v-card>
</template>
