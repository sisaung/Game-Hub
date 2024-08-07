import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, errors: null, isLoading: null });

export default useGenres;
