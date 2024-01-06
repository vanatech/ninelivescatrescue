import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { CatGallery } from "./components/CatGallery";
import { AdoptionForm } from "./components/Adoption Application/AdoptionForm";

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
    element: <AdoptionForm />
  },
];

export default AppRoutes;
