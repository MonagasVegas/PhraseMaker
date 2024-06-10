import { render, screen } from "@testing-library/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ContactUs from "../components/ContactUs";
import App from "../App";

describe("Component", () => {
  test("renders correctly", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });

  test("componente contactanos", () => {
    render(<ContactUs />);
    const h = screen.getByRole("h", { name: "Titulo principal" });
    expect(h).toMatchSnapshot();
  });
});
