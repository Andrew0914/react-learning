import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Gretting } from "./Gretting";
describe("Gretting", () => {
  test("render gretting component", () => {
    // Arrange
    render(<Gretting />);
    // Act
    // Assert
    const grettingText = screen.getByText("Hello world!");
    expect(grettingText).toBeInTheDocument()
  });

  test('Show "good to see you!" when button is not clicked', () => {
    // Arrange
    render(<Gretting />);
    // Act
    // Assert
    const grettingText = screen.getByText("good to see you!");
    expect(grettingText).toBeInTheDocument()
  });

  test('Show "good bye!" when button is clicked', () => {
    // Arrange
    render(<Gretting />);
    const button = screen.getByRole("button")
    // Act
    userEvent.click(button)
    // Assert
    const grettingText = screen.getByText("good bye!");
    expect(grettingText).toBeInTheDocument()
  });

  test('Not show "good to see you!" when button is clicked', () => {
    // Arrange
    render(<Gretting />);
    const button = screen.getByRole("button")
    // Act
    userEvent.click(button)
    // Assert
    const grettingText = screen.queryByText("good to see you!");
    expect(grettingText).toBeNull()
  });
});
