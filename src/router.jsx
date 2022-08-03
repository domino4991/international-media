import { Russ, Engg } from "./path";

import English from "./Eng/English";
import Russian from "./russ/Russian";

export const PUBLIC_ROUTES = [
  {
    path: Engg,
    Component: <English />,
  },
  {
    path: Russ,
    Component: <Russian />,
  },
];
