import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe("<Header />", () => {

    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>, div
        )
    })

    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>, div
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
        expect(logo).toHaveAttribute("alt", "Gangsta cat,reppin da gang")
    })

    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Profile"))
        expect(screen.getByText("Profile")).toBeInTheDocument()

        userEvent.click(screen.getByText("Matches"))
        expect(screen.getByText("Matches")).toBeInTheDocument()

        userEvent.click(screen.getByText("Options"))
        expect(screen.getByText("Options")).toBeInTheDocument

        userEvent.click(screen.getByText("Dark mode"))
        expect(screen.getByText("Dark mode")).toBeInTheDocument()

        userEvent.click(screen.getByText("Light mode"))
        expect(screen.getByText("Light mode")).toBeInTheDocument()

        userEvent.click(screen.getByText("Reset"))
        expect(screen.getByText("Reset")).toBeInTheDocument()

        userEvent.click(screen.getByText("Support"))
        expect(screen.getByText("Support")).toBeInTheDocument()
    })

})
