jest.mock('../../utils/constants', () => ({
    __esModule: true, // Necessary for ES6 modules
    default: 'mock-logo-url'
  }));
import { act, fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import mock_data from "./mocks/restaurantMenuMock.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header"
import Cart from "../Cart"
global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(mock_data)
    })
})


it("should load restaurant menu component", async ()=>{
    await act(async ()=>render(
        <Provider store={appStore}>
    <BrowserRouter>
    <Header/>
    <Cart />
    <RestaurantMenu />
    </BrowserRouter>
    </Provider>
    ))

    const accordianheader = screen.getByText("Recommended");
    fireEvent.click(accordianheader);
    const items = screen.getAllByTestId("items");
    expect(items.length).toBe(6)

    const addBtn= screen.getAllByRole("button",{name:"ADD"})
    fireEvent.click(addBtn[0])
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument()
    fireEvent.click(addBtn[1])
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument()
    const cart= screen.getByText("Cart (2 items)");
    fireEvent.click(cart);
    expect(screen.getByText("Cart")).toBeInTheDocument()
    const cartItems = screen.getAllByTestId("items")
    expect(cartItems.length).toBe(8)
    const clearBtn= screen.getByRole("button",{name:"Clear cart"})
    console.log(clearBtn);
    fireEvent.click(clearBtn)
    expect(screen.getAllByTestId("items").length).toBe(6)
    expect(screen.getByText("Please order something and come here 😋")).toBeInTheDocument()
})