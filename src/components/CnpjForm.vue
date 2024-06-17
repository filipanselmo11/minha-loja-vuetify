<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import TextComponent from './TextComponent.vue';

defineProps<{
  cnpj: String,
  nomeEmpresa: String,
  emailEmpresa: String,
  senhaEmpresa: String,
  telefoneEmpresa: String,
  cep: String,
  endereco: String,
  cidade: String,
  estado: String,
  numero: Number
}>();

defineEmits([
  'update:cnpj',
  'update:nomeEmpresa',
  'update:emailEmpresa',
  'update:senhaEmpresa',
  'update:telefoneEmpresa',
  'update:cep',
  'update:endereco',
  'update:cidade',
  'update:estado',
  'update:numero',
  'goLogin'
]);

</script>

<template>
  <v-form>
      <v-card max-width="590">
        <v-container>
          <v-row>
            <v-col cols="6">
                <TextComponent
                  :model-value="cnpj"
                  label="CNPJ"
                  placeholder="Digite o CNPJ"
                  type="text"
                  @update:model-value="$emit('update:cnpj', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="nomeEmpresa"
                label="Nome Fantasia"
                placeholder="Digite o nome fantasia da empresa"
                type="text"
                @update:model-value="$emit('update:nomeEmpresa', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="emailEmpresa"
                label="E-mail"
                placeholder="Digite o email da empresa"
                type="email"
                @update:model-value="$emit('update:emailEmpresa', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="senhaEmpresa"
                label="Senha"
                placeholder="Digite uma senha"
                type="password"
                @update:model-value="$emit('update:senhaEmpresa', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="telefoneEmpresa"
                label="Telefone"
                placeholder="Digite o telefone da empresa"
                type="text"
                @update:model-value="$emit('update:telefoneEmpresa', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="cep"
                label="CEP"
                placeholder="Digite o CEP da empresa"
                type="text"
                @update:model-value="$emit('update:cep', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="endereco"
                label="Endereço"
                placeholder="Digite o endereço da empresa"
                type="text"
                @update:model-value="$emit('update:endereco', $event)"
              />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="cidade"
                label="Cidade"
                placeholder="Digite a cidade da empresa"
                type="text"
                @update:model-value="$emit('update:cidade', $event)"
              />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="estado"
                label="Estado"
                placeholder="Digite o estado da empresa"
                type="text"
                @update:model-value="$emit('update:estado', $event)"
              />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="numero"
                label="Número"
                placeholder="Digite o número da empresa"
                type="text"
                @update:model-value="$emit('update:numero', $event)"
              />
            </v-col>
            <v-col cols="12" class="text-center">
              <ButtonComponent
               text-button="Cadastrar"
               size="large"
               @click-event="$emit('goLogin', $event)"/>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
</template>
