import useGenres from "./hooks/useGenres";

const GenresLists = () => {
  const { genres, isLoading, errors } = useGenres();

  return (
    <div>
      {genres.map((genre) => (
        <p key={genre.id}> {genre.name} </p>
      ))}
    </div>
  );
};

export default GenresLists;
