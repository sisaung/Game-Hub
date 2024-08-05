import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";

const GenresLists = () => {
  const { data, isLoading, errors } = useGenres();

  return (
    <div>
      {data.map((genre) => (
        <div key={genre.id} className="flex items-center gap-3">
          <img
            src={getCroppedImageUrl(genre.image_background)}
            className="h-10 w-12 my-1 rounded-lg "
          />
          <p className="text-lg"> {genre.name} </p>
        </div>
      ))}
    </div>
  );
};

export default GenresLists;
