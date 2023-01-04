import { render, screen } from "@testing-library/react";
import CatIndex from "./CatIndex";
import mockCats from "../mockCats";

describe("<CatIndex />", () => {
  it("renders a card for each cat", () => {
    render(<CatIndex cats={mockCats} />);

    mockCats.map((cat) => {
      const nameElement = screen.getByText(cat.name);
      expect(nameElement).toBeInTheDocument();
    });
  });
});
