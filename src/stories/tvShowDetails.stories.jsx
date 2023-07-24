import React from "react";
import TVShowDetails from "../components/tvShowDetails";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import TVShowsContextProvider from "../contexts/tvshowsContext";

export default {
  title: "TV Show Details Page/TVShowDetails",
  component: TVShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVShowsContextProvider>{Story()}</TVShowsContextProvider>,
  ],
};

export const Basic = () => <TVShowsDetails tvshiw={SampleTVShow} />;

Basic.storyName = "Default";
