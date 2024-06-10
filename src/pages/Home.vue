<script lang="ts" setup>
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
</script>

<template>
  <div class="d-flex pa-2 mt-2.5">
    <div class="mr-4">
      <v-menu location="center">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">Frios</v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, id) in friosList"
          :key="id">
            <v-list-item-title>
              {{ item.titulo }}
            </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
    <div class="mr-2">
      <v-menu location="center">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">Limpeza</v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, id) in limpezaList"
          :key="id">
            <v-list-item-title>
              {{ item.titulo }}
            </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
  </div>
  <div class="carrossel">
    <h1>CARROSSEL</h1>
  </div>
</template>
