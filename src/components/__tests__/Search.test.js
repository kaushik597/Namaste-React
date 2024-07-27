jest.mock('../../utils/constants', () => ({
    __esModule: true, // Necessary for ES6 modules
    default: 'mock-logo-url'
  }));

import { render, act, screen, fireEvent } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "./mocks/restaurantList.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("should load body comoonent restaurant cards after clicking on search button",async ()=>{
    await act(async ()=>  render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    ))
   
    const searchBtn= screen.getByRole("button",{name:"search"})
    const searchInput = screen.getByTestId("searchInput")
    const cardsBeforeClickingSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeClickingSearch.length).toBe(20)
    fireEvent.change(searchInput,{target:{value:"burger"}})
    fireEvent.click(searchBtn);
    const cardsAfter= screen.getAllByTestId("resCard");
    expect(cardsAfter.length).toBe(5)
})

it("should load top rated restaurants after clickig on top rated restaurant",async ()=>{
    await act(async ()=>render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>))

    const topBtn= screen.getByTestId("topRated");
    const resCardsBefore = screen.getAllByTestId("resCard");
    expect(resCardsBefore.length).toBe(20);
    fireEvent.click(topBtn);
    const resCardsAfter= screen.getAllByTestId("resCard");
    expect(resCardsAfter.length).toBe(17);

    
})