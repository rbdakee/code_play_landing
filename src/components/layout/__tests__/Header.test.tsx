import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header Component", () => {
  it("renders logo and company name", () => {
    render(<Header />);
    expect(screen.getByText("Code Play")).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Записаться" })).toBeInTheDocument();
  });

  it("CTA button links to WhatsApp", () => {
    render(<Header />);
    const button = screen.getByRole("link", { name: "Записаться" });
    expect(button).toHaveAttribute("href");
    expect(button.getAttribute("href")).toContain("wa.me");
  });

  it("has correct link attributes for WhatsApp", () => {
    render(<Header />);
    const button = screen.getByRole("link", { name: "Записаться" });
    expect(button).toHaveAttribute("target", "_blank");
    expect(button).toHaveAttribute("rel", "noopener noreferrer");
  });
});
