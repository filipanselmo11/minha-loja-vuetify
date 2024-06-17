import { defineStore } from 'pinia';
import { api } from '@/services/api';

export interface PessoaJuridicaInterface {
  cnpj: string,
  email: string,
  nome: string,
  telefone: string,
  senha: string
  cep: string,
  endereco: string
  cidade: string,
  estado: string,
  numero: number
}

export const usePessoaJuridicaStore = defineStore('pessoaJuridicaStore', {
  state: () => ({
    loading: true,
  }),
  actions: {
    async createPessoaJuridica(empresa: PessoaJuridicaInterface): Promise<void> {
      this.loading = true;
      const body = {
        'cnpj': empresa.cnpj,
        'email': empresa.email,
        'nome': empresa.nome,
        'telefone': empresa.telefone,
        'senha': empresa.senha,
        'cep': empresa.cep,
        'endereco': empresa.endereco,
        'cidade': empresa.cidade,
        'estado': empresa.estado,
        'numero': empresa.numero
      };

      await api.post('/empresas', body, { headers: {'Access-Control-Allow-Origin': '*'}}).then(res => {
        console.log(res.data);
      }).catch(err => console.log(err));
      this.loading = false;
    }
  }
});
