import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MovieCard from "../src/components/MovieCard/MovieCard";

const sampleMovie = {
  id: 1,
  title: "Sample Movie",
  description: "",
  type: "movie",
  image: "https://example.com/1.jpg",
  rating: "PG",
  genre: "Drama",
  year: 2020,
  language: "English",
};

describe("MovieCard component", () => {
  it("renders skeleton when requested", () => {
    const { container } = render(<MovieCard isSkeleton />);
    const skeleton = container.querySelector(".movie-card.skeleton");
    expect(skeleton).toBeTruthy();
    // skeleton should not contain an img
    const img = container.querySelector("img");
    expect(img).toBeNull();
  });

  it("renders movie image and link when movie provided", () => {
    render(<MovieCard movie={sampleMovie as any} dataIndex={5} />);
    const img = screen.getByAltText("Sample Movie");
    expect(img).toBeInTheDocument();
    const anchor = img.closest("a");
    expect(anchor).toBeTruthy();
    const card = containerQuery();
    expect(card?.getAttribute("data-index")).toBe("5");
  });
});

function containerQuery() {
  // helper to find movie-card container in document
  return document.querySelector(".movie-card");
}
