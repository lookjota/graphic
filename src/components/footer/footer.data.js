import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Instagram',
      description:
        'Siga nossa Insta, periodicamente postamos diversas referências de arte.',
    },
    {
      id: 2,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Whatsapp',
      description:
        'Mende uma messagem ou ligue,   Contaos: 3377-1700 / 99549-6939 .',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Endereço',
      description:
        'ADE QD 3 Conjunto B Lote 13 Loja 1 Pró DF - Ceilândia, Brasília - DF, 72237-320.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Início',
    },
    {
      path: '/',
      label: 'Serviços',
    },
    {
      path: '/',
      label: 'Projetos',
    },
    {
      path: '/',
      label: 'Sobre',
    },
    {
      path: '/',
      label: 'Contatos',
    },
  ],
};
