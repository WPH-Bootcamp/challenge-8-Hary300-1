import Container from '@/components/layouts/Container';
import MainLayout from '@/components/layouts/MainLayout';

const SearchPage = () => {
  return (
    <MainLayout position='sticky'>
      <section id='search-result-list'>
        <Container>
          <h1>SearchPage</h1>
        </Container>
      </section>
    </MainLayout>
  );
};

export default SearchPage;
