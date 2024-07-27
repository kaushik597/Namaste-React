jest.mock('../../utils/constants', () => ({
    __esModule: true, // Necessary for ES6 modules
    default: 'mock-logo-url'
  }));
  

import Header from "../Header"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import LOGO_URL from "../../utils/constants"
import appstore from "../../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it("should load header component properly",()=>{
   
    render(
        <BrowserRouter>
    <Provider store={appstore}>
        <Header />
    </Provider>
    </BrowserRouter>
    )

    const cart =screen.getByText(`Cart (0 items)`);
    expect(cart).toBeInTheDocument()
})