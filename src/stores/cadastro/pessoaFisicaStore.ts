import { defineStore } from 'pinia';
import { api } from '@/services/api';

export interface PessoaFisicaInterface {
  cpf: string,
  email: string,
  telefone: string,
  nome: string,
  senha: string,
  rg: string
}


export const usePessoaFisicaStore = defineStore('pessoaFisicaStore', {
  state: () => ({
    loading: true,
  }),
  actions: {
    async createPessoaFisica(pessoa: PessoaFisicaInterface): Promise<void> {
      this.loading = true;
      const body = {
        'cpf': pessoa.cpf,
        'email': pessoa.email,
        'telefone': pessoa.telefone,
        'senha': pessoa.senha,
        'rg': pessoa.rg
      };
      await api.post('/pessoas', body).then(res => {
        console.log(res.data)
      }).catch(error => {
        console.log(error)
      });
    }
  },
});
