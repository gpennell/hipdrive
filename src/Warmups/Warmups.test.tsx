import { render, screen, within } from "@testing-library/react";
//import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import Warmups from "./Warmups";

test("creates div with each warmup set, given an array of plates", async () => {
  render(<Warmups sets={[45, 125, 200]} activeSet={1} />);

  const list = screen.getByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  expect(items.length).toBe(3);
  expect(items[2]).toHaveTextContent("200");
});

test("adds a true aria-current attribute to the selected set", async () => {
  render(<Warmups sets={[45, 125, 200]} activeSet={1} />);

  const list = screen.getByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  expect(items[0]).not.toHaveAttribute("aria-current", "true");
  expect(items[1]).toHaveAttribute("aria-current", "true");
  expect(items[2]).not.toHaveAttribute("aria-current", "true");
});
