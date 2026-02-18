import type { Movie } from "../../type/type";
import "./MovieCard.css";

interface MovieCardProps {
  movie?: Movie;
  isActive?: boolean;
  isSkeleton?: boolean;
  dataIndex?: number;
}

export default function MovieCard({
  movie,
  isActive = false,
  isSkeleton = false,
  dataIndex,
}: MovieCardProps) {
  if (isSkeleton) {
    return (
      <div className="movie-card skeleton" aria-hidden="true">
        <div className="skeleton-image" />
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div
      className={`movie-card${isActive ? " active" : ""}`}
      data-index={dataIndex}
      aria-label={movie.title}
    >
      <a href={"#"}>
        <img src={movie.image} alt={movie.title} loading="lazy" />
      </a>
    </div>
  );
}
