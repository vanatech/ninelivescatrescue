import React, { useState } from 'react';
import { Select, MenuItem, Chip } from '@material-tailwind/react';

const MultiSelectDropdown = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (event) => {
        setSelectedOptions(event.target.value);
    };

    return (
        <div className="w-64">
            <Select
                multiple
                value={selectedOptions}
                onChange={handleSelectChange}
                fullWidth
                size="regular"
                color="lightBlue"
            >
                {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>

            <div className="mt-2">
                {selectedOptions.map((selectedOption) => (
                    <Chip key={selectedOption} color="lightBlue" size="lg">
                        {selectedOption}
                    </Chip>
                ))}
            </div>
        </div>
    );
};

export default MultiSelectDropdown;
