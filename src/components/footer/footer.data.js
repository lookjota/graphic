import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Community,
      path: 'https://api.instagram.com/grafica.santafe/',
      title: 'Instagram',
      description:
        'Siga nossa Insta, periodicamente postamos diversas referências de arte.',
    },
    {
      id: 2,
      iconSrc: Chat,
      path: 'https://api.whatsapp.com/send?phone=556199549-6939&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20',
      altText: 'Community',
      title: 'Whatsapp',
      description:
        'Mende uma messagem ou ligue, Contatos: 99549-6939 / 3377-1700',
    },
    {
      id: 3,
      iconSrc: Github,
      path: '#home',
      altText: 'Github',
      title: 'Endereço',
      description:
        'ADE QD 3 Conjunto B Lote 13 Loja 1 Pró DF - Ceilândia, Brasília - DF, 72237-320.',
    },
  ],
  menuItem: [
    {
      path: '#home',
      label: 'Início',
    },
    {
      path: '#feature',
      label: 'Serviços',
    },
    {
      path: '#pricing',
      label: 'Projetos',
    },
    {
      path: '#testimonial',
      label: 'Sobre',
    },
    {
      path: '#contact',
      label: 'Contatos',
    },
  ],
};
