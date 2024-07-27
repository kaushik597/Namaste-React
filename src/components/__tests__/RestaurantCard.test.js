jest.mock('../../utils/constants', () => ({
    __esModule: true, // Necessary for ES6 modules
    default: 'mock-logo-url'
  }));


import RestaurantCard from "../RestaurantCard"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import mocK_data from "./mocks/restaurantCardMock.json"
import { setPromotedRestaurantCard } from "../RestaurantCard";

const Open= setPromotedRestaurantCard(RestaurantCard)
it("should render restaurant card",()=>{
    render(<RestaurantCard respData={mocK_data}/>)
    const name = screen.getByText("Seoul Mate Korean Burgers");
    expect(name).toBeInTheDocument()
})

it("should render setpromotionrescard",()=>{
    render(<Open respData={mocK_data} />)
    const name = screen.getByText("Open");
    expect(name).toBeInTheDocument();
})
