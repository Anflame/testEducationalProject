import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Test App", () => {
  test("renders learn react link", async () => {
    render(<Form />);

    const linkElement = screen.getByText(/hello react/i);
    expect(linkElement).toBeInTheDocument();

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/input value/i);
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    expect(input).toHaveStyle({ color: "red" });

    screen.debug();

    const dataEl = await screen.findByText(/data/i);
    expect(dataEl).toBeInTheDocument();

    const helloWorldEl = screen.queryByText(/hello world/i);
    expect(helloWorldEl).toBe(null);
  });

  test("click event", () => {
    render(<Form />);
    const btn = screen.getByTestId("toggle-btn");

    expect(screen.queryByTestId("toggle")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle")).toBeNull();
  });
  test("input event", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText(/input value/i);

    expect(screen.queryByTestId("value-heading")).toContainHTML("");
    fireEvent.input(input, {
      target: {
        value: "1234",
      },
    });
    expect(screen.queryByTestId("value-heading")).toContainHTML("1234");
  });
});
