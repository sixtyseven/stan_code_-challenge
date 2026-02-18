import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header/Header";

describe("Header component", () => {
  it("renders default navigation items", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("TV Shows")).toBeInTheDocument();
    expect(screen.getByText("Movies")).toBeInTheDocument();
  });

  it("first nav item has active class by default", () => {
    const { container } = render(<Header />);
    const first = container.querySelector(".nav-item.active");
    expect(first).toBeTruthy();
    expect(first?.textContent).toBe("Home");
  });

  it("accepts custom navItems prop", () => {
    const items = [
      { label: "One", href: "#one" },
      { label: "Two", href: "#two" },
    ];
    render(<Header navItems={items} />);
    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
  });
});
