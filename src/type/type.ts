interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  year: number;
  type: "series" | "movie";
  rating: "MA 15+" | "R 18+" | "PG" | "G" | "PG-13";
  genre:
    | "Drama"
    | "Comedy"
    | "Action"
    | "Horror"
    | "Sci-Fi"
    | "Romance"
    | "Documentary";
  language:
    | "English"
    | "Spanish"
    | "French"
    | "German"
    | "Chinese"
    | "Japanese"
    | "Korean"
    | "Hindi"
    | "Other";
}

export type { Movie };
