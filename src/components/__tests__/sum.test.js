import {sum} from "../sum"
test("Test to check the number of 2 numbers",()=>{
    const result= sum(2,3)

    expect(result).toBe(5)
})