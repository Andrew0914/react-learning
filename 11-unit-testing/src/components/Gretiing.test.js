import { render, screen } from "@testing-library/react";
import { Gretting } from "./Gretting";
describe("Gretting", () => {
  test("render gretting component", () => {
    // Arrange
    render(<Gretting />);
    // Act
    // Assert
    const grettingText = screen.getByText("Hello world!");
  });
});
