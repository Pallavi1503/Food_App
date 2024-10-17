const { render } = require("@testing-library/react")
const { act } = require("react-dom/test-utils");
import RestaurantMenu from "../RestaurantMenu"
import { resMenuMock } from "../../mocks/resMenuMock"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=> Promise.resolve(resMenuMock)
    })
})

if("should Load Restarant menu component",async()=>{
    await act(async()=>
    render(
        <RestaurantMenu/>
    ))
});