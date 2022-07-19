/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Button } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Cartões de visita',
    text:
      'Demonstre profissionalismo com belos cartões de visita.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Adesivos',
    text:
      'Adesivos de primeira qualidade com preços abaixo do mercado.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Banners',
    text:
      'Belos banners de alta qualidade para apresentações ou eventos.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Produção de Cardápios',
    text:
      'Exiba os seus melhores pratos em cardápios da melhor qualidade.',
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Produção de Calendários',
    text:
      'Promova a marca de sua empresa com belos calendários de alta qualidade.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Produção de Cartaz',
    text:
      'Transmita as ideias de sua empresa com cartazes da melhor qualidade em Brasília.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Blocos de Serviços',
    text:
      'Blocos personalizados.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Mais Serviços',
    text:
      'Catálogos, crachás, Comandas, Cordão personalizado, envelope, etiquetas, impressão digital, livros, marcador de página, panfletos, revista.',
  },
  
];

export default function KeyFeature() {
  return (

    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>

        <SectionHeader
          slogan="Recursos de Qualidade"
          title="Serviços Gráficos"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
      {/* <Button>Fazer Orçamento</Button> */}
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
