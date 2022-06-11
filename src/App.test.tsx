import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("Should render", () => {
    render(<App />);

    expect(screen.getByText("Hello World")).toBeTruthy();
  });
});
