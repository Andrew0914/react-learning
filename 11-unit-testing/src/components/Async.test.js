import { render, screen } from "@testing-library/react";
import Async from "./Aysnc";

describe("Async", () => {
  test("List items are populated with data from request", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length > 0).toBeTruthy();
  });
});
