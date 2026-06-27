import Container from '@/components/layouts/Container';
import MainLayout from '@/components/layouts/MainLayout';

const FavoritePage = () => {
  return (
    <MainLayout position='sticky'>
      <section id='favorite-list'>
        <Container>
          <h1>Favorite page</h1>
        </Container>
      </section>
    </MainLayout>
  );
};

export default FavoritePage;
