import React from 'react';
import {Checkbox, Input, Typography} from "@material-tailwind/react";


export function AdoptionPg5() {
  return (
    <>
      <fieldset>
        <div className="flex flex-col w-72 gap-6">

          <div className="">
            <Typography variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70">Reason(s) for wanting cat (check all that apply):</Typography>
            <div className="columns-1 md:columns-2 outline rounded-sm mt-4">
              <div className="basis-1/2">
                <Checkbox label="Gift" />
              </div>
              <div className="basis-1/2">
                <Checkbox label="Barn Cat" />
              </div>
              <div className="basis-1/2">
                <Checkbox label="Breeding" />
              </div>
              <div className="basis-1/2">
                <Checkbox label="Mouser" />
              </div>
              <div className="basis-1/2">
                <Checkbox label="House Pet" />
              </div>
              <div className="basis-1/2">
                <Checkbox label="For Children" />
              </div>
              <div className="basis-1/2">
                <Checkbox label="Companionship" />
              </div>
              <div className="basis-1/2">
                <Checkbox label="Replacement" />
              </div>
              <div className="basis-1/2">
                <Checkbox label="Other" />
              </div>
          </div>
          
          <div className="w-72">
            <Typography className="mt-2">If Other was selected, why:</Typography>
            <Input variant="standard" label="" placeholder="" />
          </div>  
          
          </div>
        </div>
      </fieldset>
    </>
  );
}

