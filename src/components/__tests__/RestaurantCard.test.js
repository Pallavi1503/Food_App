import React from "react";
import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard/RestaurantCard"
import { resDataMock } from "../../mocks/resDataMock"


it("should render restaurantCard component",()=>{
    render(
        <RestaurantCard resData={resDataMock}/>
    )

    const name=screen.getByText("45th Avenue by Karachi Bakery")

    expect(name).toBeInTheDocument();
}) 