import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import Header from "../Header/Header";
import { BrowserRouter } from "react-router-dom";

it("should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {
    name: "Login:Default User",
  });
  //OR   const loginButton=screen.getByText("Login");
  //OR    const loginButton=screen.getByRole("button");
  //const cartItems=screen.getByText(/Cart/) ----/Cart/ is regex
  expect(loginButton).toBeInTheDocument();
});

it("should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {
    name: "Login:Default User",
  });
  
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {
    name: "Logout:Default User",
  });
  expect(logoutButton).toBeInTheDocument();
});
