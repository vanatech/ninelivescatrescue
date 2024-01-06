import React from "react";
import { Paginate } from "../Paginate";
import { AdoptionPg1 } from "./AdoptionPg1";
import { AdoptionPg2 } from "./AdoptionPg2";
import { AdoptionPg3 } from "./AdoptionPg3";

export function AdoptionForm() {
  let title = "Adoption Application";
  let pgLen = 3;
  const childComponentsArray = [
    AdoptionPg1,
    AdoptionPg2,
    AdoptionPg3
  ];
  
  return (
    <Paginate
      title={title}
      pgLen={pgLen}
      childComponents={childComponentsArray}/>
  );
}