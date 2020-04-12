import React from "react";
import { shallow } from "enzyme";
import ClickCounter from "./ClickCounter";

it("ClickCounter deve ter o total de cliques igual a 2", () => {
  const myComponent = shallow(<ClickCounter />);

  myComponent.find("input").simulate("change").simulate("change");
  expect(myComponent.find("strong").text()).toEqual("2");
});

it("ClickCounter deve alternar o valor entre ON e OFF", () => {
  const myComponent = shallow(<ClickCounter />);
  expect(myComponent.find("#checkStatus").text()).toEqual("OFF");
  myComponent.find("input").simulate("change");
  expect(myComponent.find("#checkStatus").text()).toEqual("ON");
});
