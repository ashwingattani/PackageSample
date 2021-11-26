import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BackHeader from "../index.js";
import constants from "../constants";

configure({ adapter: new Adapter() });

let BackHeaderDiv,
  mocknavigateBack = jest.fn(),
  title = "test";

beforeEach(() => {
  BackHeaderDiv = shallow(
    <BackHeader navigateBack={mocknavigateBack} title={title} />
  );
});

describe("BackHeader test cases", () => {
  it("should render subscriber-details-top-wrapper div", () => {
    // o/p
    let simulatedOutput = 1;

    // Expectation
    expect(
      BackHeaderDiv.find("div.subscriber-details-top-wrapper").length
    ).toEqual(simulatedOutput);
  });

  it("should render button for back go back action", () => {
    // o/p
    let simulatedOutput = "button";

    // Expectation
    expect(BackHeaderDiv.find("button.goback").type()).toEqual(simulatedOutput);
  });

  it("should have hidden span inside the button", () => {
    // o/p
    let simulatedOutput = "span";
    let simulatedText = constants.gobackMessage;

    // Expectations
    expect(BackHeaderDiv.find("span.hidden").type()).toEqual(simulatedOutput);
    expect(BackHeaderDiv.find("span.hidden").text()).toEqual(simulatedText);
  });

  it("should call mocknavigateBack from props when go back button is clicked", () => {
    // o/p
    let simulatedOutput = 1;

    // Simulation
    BackHeaderDiv.find("button.goback").simulate("click");

    // Expectation
    expect(mocknavigateBack.mock.calls.length).toEqual(simulatedOutput);
  });

  it("should display full name of selected student in h1 heading", () => {
    // o/p
    let simulatedOutput = "h1";
    let simulatedText = title + constants.detailHeader;

    // Expectations
    expect(BackHeaderDiv.find("h1.subscriber-heading").type()).toEqual(
      simulatedOutput
    );
    expect(BackHeaderDiv.find("h1.subscriber-heading").text()).toEqual(
      simulatedText
    );
  });
});
