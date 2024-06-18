<script lang="ts" setup>
import BreadCumbComponent from '@/components/BreadCumbComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { useAveStore } from '@/stores/frios/aveStore';
import { onMounted, ref } from 'vue';
const items = [
  {
    title: 'Frios',
    disabled: false,
    href: '',
  },
  {
    title: 'Aves',
    disabled: true,
    href: '/frios/aves',
  }
];

const aveStore = useAveStore();

const dialog = ref(false);
const temEmbalagem = ref(false);

const openDialog = () => {
  dialog.value = true;
}

const closeDialog = () => {
  dialog.value = false;
}

onMounted(() => {
  aveStore.getAves();
  temEmbalagem.value = true;
});

</script>

<template>
  <div class="d-flex justify-start">
    <BreadCumbComponent :items="items"/>
  </div>
    <section id="aves" class="d-flex ml-4">
      <div v-if="aveStore.loading">
        <h1>Carregando Aves...</h1>
      </div>
      <v-row
        v-else
        class="mt-2"
        no-gutters>
          <v-col
            class="mt-3"
            cols="3"
            v-for="(item, id) in aveStore.aves"
            :key=id>
              <CardComponent
                :nome="item.nome"
                :image="item.image"
                :codigo="item.codigo"
                :preco="item.preco"
                :embalagem="item.embalagem"
                :tem-embalagem="temEmbalagem"
                :dialog="dialog"
                @open-dialog="openDialog"
                @close-dialog="closeDialog"
              />
          </v-col>
      </v-row>
    </section>
</template>
