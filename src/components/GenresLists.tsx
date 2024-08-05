import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import ClipLoader from "react-spinners/ClipLoader";

const GenresLists = () => {
  const { data, isLoading, errors } = useGenres();

  return (
    <div>
      {isLoading && (
        <ClipLoader
          color={"#36d7b7"}
          loading={isLoading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
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
