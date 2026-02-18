import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Carousel from "../src/components/Carousel/Carousel";
import type { Movie } from "../src/type/type";

const makeMovie = (id: number): Movie => ({
  id,
  title: `Movie ${id}`,
  description: "",
  type: "movie",
  image: `https://example.com/${id}.jpg`,
  rating: "PG",
  genre: "Drama",
  year: 2000,
  language: "English",
});

describe("Carousel component", () => {
  it("renders skeletons while loading", () => {
    const { container } = render(<Carousel items={[]} isLoading={true} />);
    const skeletons = container.querySelectorAll(".movie-card.skeleton");
    // Carousel uses itemsPerView=4 + 2 so skeletonCount should be 6
    expect(skeletons.length).toBe(6);
  });

  it("renders movie images when items are provided", async () => {
    const movies = [makeMovie(1), makeMovie(2), makeMovie(3)];
    render(<Carousel items={movies} isLoading={false} />);
    // images use alt text equal to movie.title
    const img = await screen.findByAltText("Movie 1");
    expect(img).toBeInTheDocument();
  });

  it("changes active card on ArrowRight when isActive=true", async () => {
    const movies = [makeMovie(1), makeMovie(2), makeMovie(3)];
    const { container } = render(
      <Carousel items={movies} isLoading={false} isActive={true} />,
    );

    // initial active should be the first movie (data-index=0)
    await waitFor(() => {
      const active = container.querySelector(".movie-card.active");
      expect(active).toBeTruthy();
    });

    // dispatch ArrowRight
    fireEvent.keyDown(window, { key: "ArrowRight" });

    await waitFor(() => {
      const active = container.querySelector(".movie-card.active");
      // active should move forward (data-index should be 1)
      expect(active?.getAttribute("data-index")).toBe("1");
    });
  });
});
