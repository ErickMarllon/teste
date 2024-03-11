export const formAuthTypes = {
  login: {
    type: 'login',
    Title: 'Acessar',
    textSubmit: 'Acessar',
    textFooter: 'Não tem uma conta?',
    textFooterButton: 'Inscrever-se',
  },
  register: {
    type: 'register',
    Title: 'Registre-se',
    textSubmit: 'Registrar',
    textFooter: 'Já tem uma conta?',
    textFooterButton: 'Conecte-se',
  },
};

export const initialValueFields = {
  login: { email: 'admin2@teste.com', senha: '123456' },
  register: {
    nome: '',
    email: '',
    telefone: '',
    senha: '',
  },
};

export const initialErrorState = { error: false, message: '', path: '' };
