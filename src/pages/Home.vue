<script lang="ts" setup>
import { useProdStore } from '@/stores/ProdStore';
// import { useDescStore } from '@/stores/DescStore';
import { onMounted, ref } from 'vue';
import MenuComponent from '../components/MenuComponent.vue';
import CarrosselComponent from '../components/CarrosselComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import LoadComponent from '../components/LoadComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import { useRouter } from 'vue-router';
// import { useRootStore } from '@/stores/RootStore';

const friosList = [
  { id: 1, titulo: 'Ave'},
  { id: 2, titulo: 'Charque'},
  { id: 3, titulo: 'Congelados', friosClick: () => console.log('Congelados Clicado')},
  { id: 4, titulo: 'Frutas congeladas', friosClick: () => console.log('Frutas Congelados Clicado')},
  { id: 5, titulo: 'Laticinios', friosClick: () => console.log('Laticinios Clicado')},
  { id: 6, titulo: 'Linguicas', friosClick: () => console.log('Linguicas Clicado')},
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
  { id: 4, image: 'https://img.freepik.com/vetores-gratis/modelo-de-banner-de-venda-horizontal_23-2148897329.jpg?w=1380&t=st=1718807269~exp=1718807869~hmac=e17168932fed08046137fc39ae5eea0b120f27b7ed4815e8af376701051ebc83' }
];

const dialog = ref(false);
const valueProd = ref('');
const loading = ref(false);

const router = useRouter();

const openDialog = () => {
  dialog.value = true;
}

const closeDialog = () => {
  dialog.value = false;
}

const prodStore = useProdStore();
// const descStore = useDescStore();
// const rootStore = useRootStore();

onMounted(() => {
  prodStore.getProds();
  // descStore.getDescs();
  // rootStore.getRoot();
});

const onClick = () => {
  console.log('CLICKED');
}

const goCarrinho = () => {
  router.push('/meu-carrinho');
}
</script>

<template>
  <NavbarComponent
    :value-prod="valueProd"
    :loading="loading"
    @on-click="onClick"
    @go-carrinho="goCarrinho"
  />
  <section id="opcoes" class="d-flex pa-2 mt-2.5">
    <div class="mr-2">
      <MenuComponent text-btn="Frios" :options-list="friosList"/>
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
            :dialog="dialog"
            @open-dialog="openDialog"
            @close-dialog="closeDialog"
          />
      </v-col>
    </v-row>
  </section>
</template>
