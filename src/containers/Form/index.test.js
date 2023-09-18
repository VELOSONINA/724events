import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./index";

describe("When Form is created", () => {
  it("a list of input fields is displayed", async () => {
    render(<Form />);
    await waitFor(() => {
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText("Nom")).toBeInTheDocument();
      expect(screen.getByText("Prénom")).toBeInTheDocument();
      expect(screen.getByText("Personel / Entreprise")).toBeInTheDocument();
    });
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent(
        await screen.findByTestId("button-test-id"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      
      await screen.findByText("En cours");
      await screen.findByText("Envoyer");
      expect(onSuccess).toHaveBeenCalled();
  });
});
});