import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe("<Footer />", () => {

    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>, div
        )
    })
})