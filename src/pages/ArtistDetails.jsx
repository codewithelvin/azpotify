import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtisitDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching,
    error,
  } = useGetArtisitDetailsQuery(artistid);

  if (isFetching) return <Loader title="Loading artist details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistid} artistData={artistData} />
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistid}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
