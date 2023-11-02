import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlateDiagram from "./PlateDiagram";

test("creates an ordered list of given plates", async () => {
  const plates = [45, 45, 2.5];

  render(<PlateDiagram plates={plates} />);

  const list = screen.getByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  for (let i = 0; i < plates.length; i++) {
    expect(items[i]).toHaveTextContent(plates[i].toString());
  }
});
