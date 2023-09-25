import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../test/helpers/renderWithRouter";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  test("test navigation", () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId("main-link");

    expect(mainLink).toBeInTheDocument();
  });

  test("test about page redirect", () => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId("about-link");

    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("test users page redirect", () => {
    renderWithRouter(<Navbar />);
    const usersLink = screen.getByTestId("users-link");

    userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
