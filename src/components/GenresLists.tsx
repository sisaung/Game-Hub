import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import ClipLoader from "react-spinners/ClipLoader";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresLists = ({ onSelectGenre, selectedGenre }: Props) => {
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
      {errors && <p> {errors} </p>}

      {data.map((genre) => (
        <div key={genre.id} className="flex items-center gap-3">
          <img
            src={getCroppedImageUrl(genre.image_background)}
            className="h-10 w-12 my-1 rounded-lg "
          />
          <button
            onClick={() => onSelectGenre(genre)}
            className={`text-lg hover:underline ${
              selectedGenre?.id === genre.id && "font-bold text-purple-400"
            } `}
          >
            {genre.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GenresLists;
