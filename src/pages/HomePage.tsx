import { usePopularMovies } from '@/hooks/useMovies';

const HomePage = () => {
  const { data } = usePopularMovies();

  console.log(data);
  return <div>HomePage</div>;
};

export default HomePage;
