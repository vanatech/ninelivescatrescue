import React from "react";
import { Paginate } from "../Paginate";
import { AdoptionPg1 } from "./AdoptionPg1";
import { AdoptionPg2 } from "./AdoptionPg2";
import { AdoptionPg3 } from "./AdoptionPg3";
import { AdoptionPg4 } from "./AdoptionPg4";
import { AdoptionPg5 } from "./AdoptionPg5";

export function AdoptionForm() {
  let title = "Adoption Application";
  let pgLen = 5;
  const childComponentsArray = [
    AdoptionPg1,
    AdoptionPg2,
    AdoptionPg3,
    AdoptionPg4,
    AdoptionPg5
  ];
  
  return (
    <>
      <form action="">
        <Paginate
          title={title}
          pgLen={pgLen}
          childComponents={childComponentsArray}
        />
      </form>
    </>
  );
}
