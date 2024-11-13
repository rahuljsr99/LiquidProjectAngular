export interface Movie {
    movieID: number;
    title: string;
    releaseDate: string; // Date string in ISO format
    genres: string[] | null; // Assuming genres could be an array of strings or null
    description: string;
    poster: string | null; // URL or path to the movie poster, or null if not available
    budget: number;
    revenue: number;
    imdbRating: number;
    rottenTomatoesRating: number;
    price: number;
    isActive: boolean;
    createdAt: string; // Date string in ISO format
    updatedAt: string; // Date string in ISO format (possibly an empty or default value)
    createdBy: string;
    updatedBy: string;
  }