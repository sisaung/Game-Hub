import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import ClipLoader from "react-spinners/ClipLoader";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenresLists = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, errors } = useGenres();

  if (errors) return null;

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

      <h1 className="text-2xl font-bold mb-3 font-serif"> Genres </h1>

      {data.map((genre) => (
        <div key={genre.id} className="flex items-center gap-3">
          <img
            src={getCroppedImageUrl(genre.image_background)}
            className="h-10 w-10 my-1 rounded-lg object-cover"
          />
          <button
            onClick={() => onSelectGenre(genre)}
            className={`text-lg text-left hover:underline ${
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
