import type { Movie } from "../../type/type";
import "./MovieCard.css";

interface MovieCardProps {
  movie?: Movie;
  isActive?: boolean;
  isSkeleton?: boolean;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  dataIndex?: number;
}

export default function MovieCard({
  movie,
  isActive = false,
  isSkeleton = false,
  onKeyDown,
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
      onKeyDown={onKeyDown}
      aria-label={movie.title}
    >
      <img src={movie.image} alt={movie.title} loading="lazy" />
    </div>
  );
}
