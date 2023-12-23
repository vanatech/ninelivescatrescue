import React from 'react';
import {Checkbox, Input} from "@material-tailwind/react";

export default function AdoptionApplication() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 gap-6">
        <h2 className="text-xl">Statement: The majority of our adoptable cats have not been tested for FIV or FelV.
      </h2>
      <h2 className="text-xl">You must be at least 21 years old to adopt as the adoption contract is a legal document.</h2>
      </div>
      
      <form action="" className="flex justify-center">
        <div className="flex flex-col w-72 gap-6">
          <Input variant="static" label="Applicant First Name" placeholder="First Name" />
          <Input variant="static" label="Applicant Last Name" placeholder="Last Name" />
          <Input variant="static" label="Street Address" placeholder="Street Address" />
          <Input variant="static" label="Apartment Number" placeholder="Apartment Number" />
          <Input variant="static" label="City" placeholder="City" />
          <Input variant="static" label="State" placeholder="State" />
          <Input variant="static" label="Zipcode" placeholder="Zipcode" />
          <Input variant="static" label="Home/Cell Phone" placeholder="Home/Cell Phone" />
          <Input variant="static" label="How Long At Present Address?" placeholder="" />
          <label>Age Group:</label>
          <Checkbox label="1-20" />
          <Checkbox label="21-25" />
          <Checkbox label="25-35" />
          <Checkbox label="36-59" />
          <Checkbox label="60+" />
        </div>
      </form>
    </>
  );
}

