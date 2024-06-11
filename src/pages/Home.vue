<script lang="ts" setup>
import { useProdStore } from '@/stores/ProdStore';
import { useDescStore } from '@/stores/DescStore';
import { onMounted } from 'vue';
import MenuComponent from '../components/MenuComponent.vue';
import CarrosselComponent from '../components/CarrosselComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import LoadComponent from '../components/LoadComponent.vue';

const friosList = [
  { id: 1, titulo: 'Ave' },
  { id: 2, titulo: 'Charque' },
  { id: 3, titulo: 'Congelados' },
  { id: 4, titulo: 'Frutas congeladas' },
  { id: 5, titulo: 'Laticinios' },
  { id: 6, titulo: 'Linguicas' },
];

const limpezaList = [
  { id: 1, titulo: 'Alcool em Gel' },
  { id: 2, titulo: 'Alcool Liquido' },
  { id: 3, titulo: 'Algodao' },
  { id: 4, titulo: 'Alvejantes' },
  { id: 5, titulo: 'Amaciantes' },
  { id: 6, titulo: 'Baldes' },
  { id: 7, titulo: 'Desifetantes' },
  { id: 8, titulo: 'Detergentes' },
  { id: 9, titulo: 'Dispenser' },
  { id: 10, titulo: 'Escova Dental' },
  { id: 11, titulo: 'Espanador' },
];

const papelariaList = [
  { id: 1, titulo: 'Almaco' },
  { id: 2, titulo: 'Almofada para carimbo' },
  { id: 3, titulo: 'Anti Impacto' },
  { id: 4, titulo: 'Apagadores' },
  { id: 5, titulo: 'Apontadores' }
];

const foodServiceList = [
  { id: 1, titulo: 'Acucar' },
  { id: 2, titulo: 'Amido de Milho' },
  { id: 3, titulo: 'Aroma Artificial' },
  { id: 4, titulo: 'Azeites' },
  { id: 5, titulo: 'Azeitonas' },
  { id: 6, titulo: 'Balas' },
];

const slides = [
  { id: 1, image: 'https://img.freepik.com/vetores-gratis/modelo-de-banner-de-venda-horizontal_23-2148897327.jpg?w=1380&t=st=1718119450~exp=1718120050~hmac=34af233e7a1454be2b3a2679739b645168d1edb1189eae55dc6ee20ca668bded' },
  { id: 2, image: 'https://img.freepik.com/psd-gratuitas/modelo-de-banner-com-compras-online_23-2148545459.jpg?w=1380&t=st=1718119714~exp=1718120314~hmac=e77201ce64dd20c4c656e7805a06db152a36620e7038498aa8c03b6879517db5' },
  { id: 3, image: 'https://img.freepik.com/psd-gratuitas/banner-de-midia-social-semana-do-consumidor-com-20-de-desconto_621600-2.jpg?t=st=1718119638~exp=1718120238~hmac=3543f180571de554ae1a874a7de1361f0e8ca1771348c75a71d2752f83f843d8' },
];

const prodStore = useProdStore();
const descStore = useDescStore();

onMounted(() => {
  prodStore.getProds();
  descStore.getDescs();
});

</script>

<template>
  <section id="opcoes" class="d-flex pa-2 mt-2.5">
    <div class="mr-2">
      <MenuComponent text-btn="Frios" :options-list="friosList" />
    </div>
    <div class="mr-2">
      <MenuComponent text-btn="Limpeza" :options-list="limpezaList" />
    </div>
    <div class="mr-2">
      <MenuComponent text-btn="Papelaria" :options-list="papelariaList" />
    </div>
    <div class="mr-2">
      <MenuComponent text-btn="Food Service" :options-list="foodServiceList" />
    </div>
  </section>
  <section id="destaques-slides" class="mt-5 text-center">
    <CarrosselComponent :slides="slides" />
  </section>
  <section id="ofertas" class="mt-4 text-center">
    <span>
      Ofertas da Semana
    </span>
    <div v-if="prodStore.loading">
      <LoadComponent/>
    </div>
    <v-row
      v-else
      class="mt-2"
      no-gutters>
      <v-col
        class="mt-3"
        cols="3"
        v-for="(item, id) in prodStore.produtos"
        :key="id">
          <CardComponent
            :nome="item.nome"
            :image="item.image"
            :preco="item.preco"
            :quantidade="item.quantidade"
          />
      </v-col>
    </v-row>
  </section>
  <section id="descartaveis-embalagens" class="mt-4 text-center">
    <span>
      Descartáveis e Embalagens
    </span>
    <div v-if="descStore.loading">
      <LoadComponent/>
    </div>
    <v-row
      v-else
      class="mt-2"
      no-gutters>
        <v-col
          class="mt-3"
          cols="3"
          v-for="(item, id) in descStore.descartaveis"
          :key="id">
            <CardComponent
              :nome="item.nome"
              :image="item.image"
              :preco="item.preco"
              :quantidade="item.quantidade"
            />
        </v-col>
    </v-row>
  </section>
</template>
