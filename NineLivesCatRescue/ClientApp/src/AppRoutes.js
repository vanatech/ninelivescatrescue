import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import {CatGallery} from "./components/CatGallery";
import AdoptionApplication from "./components/Adoption Application/AdoptionApplication";

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
  },
  {
    path: '/adoption-application',
    element: <AdoptionApplication/>
  },
];

export default AppRoutes;
