import { render, screen } from "@testing-library/react";
import CatShow from "./CatShow";
import mockCats from "../mockCats";

describe("<CatShow />", () => {
  it("renders a card for each cat", () => {
    render(<CatShow cats={mockCats} />);

    mockCats.map((cat) => {
      const nameElement = screen.getByText(cat.name);
      expect(nameElement).toBeInTheDocument();
    });
  });
});
