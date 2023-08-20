import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo load", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //
  //Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe('https://s3-eu-west-1.amazonaws.com/tpd/logos/62305fb67598423e883cc643/0x0.png');
});

test("Online Status", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //
  //Check if logo is loaded
  const onlineStatus = header.getByTestId("online-status");
//   console.log(onlineStatus[0].children);
  expect(onlineStatus.innerHTML).toBe("🟢");
});

test("Cart", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //
  //Check if logo is loaded
  const cart = header.getByTestId("cart");
//   console.log(onlineStatus[0].children);
  expect(cart.innerHTML).toBe("Cart - 0 items");
});
