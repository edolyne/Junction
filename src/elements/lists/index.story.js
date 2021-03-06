import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import withReadme from "storybook-readme/with-readme";
import centered from "../../../.storybook/decorators/centered/";
import defaultColors from "../../defaults";

import Readme from "./README.md";

import {
  UnorderedList,
  OrderedList } from "./index";

const story = storiesOf("Lists", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Basic Unordered List",
  withReadme(
    Readme,
    () => (
      <UnorderedList className="one-whole">
        <li>List Item 1</li>
        <UnorderedList className="one-whole">
          <li> Item A </li>
          <li> Item B </li>
        </UnorderedList>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </UnorderedList>
    )
  )
);

story.add(
  "Basic Ordered List",
  withReadme(
    Readme,
    () => (
      <OrderedList className="one-whole">
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </OrderedList>
    )
  )
);
