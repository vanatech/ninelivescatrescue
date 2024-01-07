import React from 'react';
import {Checkbox, Input, Option, Select} from "@material-tailwind/react";

export function AdoptionPg2() {
  return (
    <>
      <form action="" className="flex justify-center">
        <div className="flex flex-col w-72 gap-6">
          <Select label="Who Do You Live With?">
            <Option>
              <Checkbox label="Parents" />
            </Option>
            <Option>
              <Checkbox label="Roomates" />
            </Option>
            <Option>
              <Checkbox label="Spouse" />
            </Option>
            <Option>
              <Checkbox label="Children" />
            </Option>
            <Option>
              <Checkbox label="Other Pets" />
            </Option>
            <Option>
              <Checkbox label="Alone" />
            </Option>
          </Select>

          <Select label="Number of Adults in Household?">
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5+</Option>
          </Select>
          
          
        </div>
      </form>
    </>
  );
}

