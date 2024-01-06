import React from 'react';
import {Input, Option, Radio, Select, Typography} from "@material-tailwind/react";


export function AdoptionPg4() {
  return (
    <>
      <fieldset>
        <div className="flex flex-col w-72 gap-6">
          <div>
            <Typography>Will the animal live with you?</Typography>
            <div className="flex gap-10 text-sm">
              <Radio name="type" label="Yes" />
              <Radio name="type" label="No" />
            </div>


            <Typography>If not, with whom will the animal live:</Typography>
            <Input variant="standard" label="" placeholder="" />
          </div>

          <div>
            <Typography>Have you ever surrendered an animal to a shelter?</Typography>
            <div className="flex gap-10 text-sm">
              <Radio name="type" label="Yes" />
              <Radio name="type" label="No" />
            </div>

            <Typography>If so, explain:</Typography>
            <Input variant="standard" label="" placeholder="" />
          </div>
          
          <div>
            <Typography>Would you agree to a 9 LIVES CAT RESCUE representative visiting your home to check on the animal you are adopting?</Typography>
            <div className="flex gap-10 text-sm">
              <Radio name="type" label="Yes" />
              <Radio name="type" label="No" />
            </div>
          </div>

          <div>
            <Typography>In order to provide for any necessary medical care and nutritional requirements for this animal, I am willing to spend <strong className="underline">yearly</strong>:</Typography>
            <Select variant="standard" label="">
              <Option>$50</Option>
              <Option>$100</Option>
              <Option>$250</Option>
              <Option>$500</Option>
              <Option>Other</Option>
            </Select>

            <Typography className="mt-2">If Other was selected, how much:</Typography>
            <Input variant="standard" label="" placeholder="" />
          </div>
          
        </div>
      </fieldset>
    </>
  );
}

