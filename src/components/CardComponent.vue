<script lang="ts" setup>
import DialogComponent from '../components/DialogComponent.vue';
const cardProps = defineProps<{
  image: string,
  nome: string,
  quantidade: number,
  preco: string,
  dialog: boolean
}>();

defineEmits(['openDialog','closeDialog','update:dialog']);
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
      <DialogComponent
        :image="cardProps.image"
        :nome="cardProps.nome"
        :dialog="cardProps.dialog"
        @update:dialog="$emit('update:dialog', $event)"
        @open-dialog="$emit('openDialog', $event)"
        @close-dialog="$emit('closeDialog', $event)"
      />
    </div>
  </v-card>
</template>
