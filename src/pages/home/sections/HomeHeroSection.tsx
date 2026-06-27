import FadeOverlay from '@/components/ui/app-ui/FadeOverlay';
import { Button } from '@/components/ui/button';
import { useTrendingMovies } from '@/hooks/useMovies';
import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import { PlayIcon } from 'lucide-react';
const randomIndex = Math.floor(Math.random() * 20);

const HomeHeroSection = () => {
  const { data, isLoading, error } = useTrendingMovies('week');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const movies = data?.results;

  if (!movies) return null;

  const oneMovie = movies[randomIndex];
  const path = oneMovie.backdrop_path;

  if (!path) return null;
  const size = IMAGE_SIZES.backdrop.medium;
  const backdropImage = getImageUrl(path, size);
  return (
    <section id='hero-home-page' className='relative'>
      <div className='relative h-98 lg:h-auto -z-1'>
        <img
          src={backdropImage}
          alt={`${oneMovie.title} image`}
          className='size-full object-center object-cover'
        />
        <FadeOverlay
          position='bottom'
          className='h-55.25 lg:h-auto lg:inset-y-0'
        />
      </div>
      <div className='flex flex-col gap-3xl lg:gap-6xl px-4 lg:p-0 -mt-42.25 lg:mt-0 lg:absolute lg:top-74.5 lg:left-8xl xl:left-11xl max-w-158.75 mx-auto'>
        <div className='flex flex-col gap-sm'>
          <p className='font-bold text-display-xs lg:text-display-2xl'>
            {oneMovie.title}
          </p>
          <p className='text-sm text-neutral-400 lg:text-md'>
            {oneMovie.overview}
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-xl lg:max-w-119 '>
          <Button>
            Watch Trailer <PlayIcon />
          </Button>
          <Button variant={'outline'}>See Detail</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
