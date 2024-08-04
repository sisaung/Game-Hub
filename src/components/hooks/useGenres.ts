import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Genre {
  id: number;
  name: string;
}

interface fetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<fetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, errors, isLoading };
};

export default useGenres;
