import { render, screen } from "@testing-library/react";
import CatNew from "./CatNew";
import { BrowserRouter } from "react-router-dom";

describe("<CatNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    );
  });
  it("renders the CatNew page for user", () => {
    const element = screen.getByText(/Create a new cat/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Create a new cat");
  });

  // it("has a form with entries for name, age, enjoys, and image", () => {});
});
