import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
import axios from "axios";
import AppRouter from "../AppRouter/AppRouter";
import { renderWithRouter } from "../test/helpers/renderWithRouter";

jest.mock("axios");

describe("Users", () => {
  let response: [] | { data: { id: number; name: string }[] };
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("test fetching users", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const div = screen.getByTestId("test-div");
    expect(div).toBeInTheDocument();

    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });

  test("test redirect to details page", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    renderWithRouter(null, "/users");

    const users = await screen.findAllByTestId("user-item");
    const div = screen.getByTestId("test-div");

    expect(div).toBeInTheDocument();
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);

    userEvent.click(users[0]);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();

    screen.debug();
  });
});
