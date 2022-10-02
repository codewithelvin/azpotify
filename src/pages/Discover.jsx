import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import GenreSelector from '../components/GenreSelector';

const Discover = () => {
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || 'POP'
  );

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <GenreSelector genreListId={genreListId} />
      </div>

      {isFetching ? (
        <Loader title="Loading songs..." />
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {data?.map((song, i, songs) => (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              activeSong={activeSong}
              isPlaying={isPlaying}
              data={songs}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover;
