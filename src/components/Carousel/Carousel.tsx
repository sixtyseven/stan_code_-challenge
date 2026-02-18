import { useEffect, useState, useRef, useCallback } from "react";
import "./Carousel.css";
import MovieCard from "../MovieCard/MovieCard";
import type { Movie } from "../../type/type";

interface CarouselProps {
  items: Movie[];
  isLoading?: boolean;
  isActive?: boolean;
}

export default function Carousel({
  items,
  isLoading = false,
  isActive = false,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView = 4; // Fixed 4 items per view
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Keep activeIndex in bounds
  useEffect(() => {
    if (!items || items.length === 0) return;
    setActiveIndex((i) => Math.max(0, Math.min(i, items.length - 1)));
  }, [items]);

  // Scroll active item into view
  const scrollToActive = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeEl =
      container.querySelector<HTMLDivElement>(".movie-card.active");
    if (activeEl) {
      const rect = activeEl.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();
      const delta =
        rect.left - parentRect.left - (parentRect.width - rect.width) / 2;
      container.scrollBy({ left: delta, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    scrollToActive();
  }, [activeIndex, scrollToActive]);

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isActive) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, items.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        console.log(`Selected: ${items[activeIndex]?.title}`);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isActive, items, activeIndex]);

  // Windowed rendering
  const buffer = 1; // Number of items to render before and after the visible area
  const start = Math.min(
    Math.max(0, activeIndex - buffer),
    items.length - itemsPerView - buffer,
  );
  let end = Math.min(items.length, activeIndex + itemsPerView + buffer);
  if (6 < items.length) {
    // Start of the carousel may have less than 6 items, so ensure we render at least 6 for better UX
    end = Math.max(end, 6);
  }
  const windowed = items.slice(start, end);

  // Skeleton cards
  const skeletonCount = itemsPerView + 2; // Add some extra skeletons for better UX
  const skeletons = Array.from({ length: skeletonCount });

  return (
    <section className="carousel-section">
      <div
        className="carousel-wrap"
        tabIndex={isLoading ? -1 : 0}
        ref={containerRef}
        aria-roledescription="carousel"
      >
        {isLoading ? (
          skeletons.map((_, idx) => (
            <MovieCard key={`skeleton-${idx}`} isSkeleton />
          ))
        ) : (
          <>
            {start > 0 && <div className="spacer" aria-hidden />}
            {windowed.map((m: Movie, idx: number) => {
              const realIndex = start + idx;
              const isActiveIdx = realIndex === activeIndex;
              return (
                <MovieCard
                  key={m.id}
                  movie={m}
                  isActive={isActiveIdx}
                  dataIndex={realIndex}
                />
              );
            })}
            {end < items.length && <div className="spacer" aria-hidden />}
          </>
        )}
      </div>
    </section>
  );
}
