import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

afterEach(() => {
    cleanup();
});

describe("Tests <Authenticate />", () => {
    test("Que se registre correctamente"),
      async () => {
        render(<Contact />);

        const user = userEvent.setup();

        const inputName = screen.getByName("name");
        const inputEmail = screen.getByName("email");
        const inputMessage = screen.getByName("message");
        const buttonSubmit = screen.getByName("submit");
        const successMessage = screen.getByName("success");

        await user.type(inputName, "humberto");
        await user.type(inputEmail, "d@d.com");
        await user.type(inputMessage, "Mensaje");

        user.click(buttonSubmit);

        expect(inputName.value).toBe( "humberto" );
        expect(inputEmail.value).toBe( "d@d.com" );
        expect(inputMessage.value).toBe( "abcd" );

        const finalMessage = "Thank you humberto! We have received your message."

        expect(successMessage.text, finalMessage);
      }
});