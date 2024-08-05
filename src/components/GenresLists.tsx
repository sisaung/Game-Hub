import useGenres from "@/hooks/useGenres";

const GenresLists = () => {
  const { data, isLoading, errors } = useGenres();

  return (
    <div>
      {data.map((genre) => (
        <p key={genre.id}> {genre.name} </p>
      ))}
    </div>
  );
};

export default GenresLists;
