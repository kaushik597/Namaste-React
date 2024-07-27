import Contact from "../Contact"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
test("should check the heading",()=>{
    render(<Contact />)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

})

test("should check the button",()=>{
    render(<Contact />)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

})

test("should check the button by text",()=>{
    render(<Contact />)
    const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument();

})

test("should load input box",()=>{
    render(<Contact />)
    const ele= screen.getByPlaceholderText("name");
    expect(ele).toBeInTheDocument();
})

test("should load 2 input elements",()=>{
    render(<Contact />)
    const elems= screen.getAllByRole("textbox");
    expect(elems.length).toBe(2)
})