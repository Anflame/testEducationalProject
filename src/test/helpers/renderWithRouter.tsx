import { ReactNode } from "react";
import { MemoryRouter } from "react-router";
import AppRouter from "../../AppRouter/AppRouter";
import { render } from "@testing-library/react";

export const renderWithRouter = (component: ReactNode, initialRoute = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
