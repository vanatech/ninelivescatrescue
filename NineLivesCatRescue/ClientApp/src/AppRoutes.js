import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import {CatGallery} from "./components/CatGallery";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/available-cats',
    element: <CatGallery/>
  }
];

export default AppRoutes;
