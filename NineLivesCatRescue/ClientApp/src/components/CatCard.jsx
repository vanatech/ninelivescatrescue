import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";

const CatCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make API call when the component mounts
    fetch("https://localhost:7048/api/rescue-groups/available")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex gap-4">
      {data.map((item) => (
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img src={item.PrimaryPictureUrl} alt="profile-picture" />
          </CardHeader>

          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {item.Data.Attributes.Name}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {item.Data.Attributes.AgeGroup}
            </Typography>
          </CardBody>

          <CardFooter className="flex flex-col justify-center pt-0">
            <div className="flex flex-row justify-center gap-2 mb-4">
              <Chip
                size="sm"
                variant="outlined"
                className="rounded-full text-black lowercase"
                value="Playful"
              />
              <Chip
                size="sm"
                variant="outlined"
                className="rounded-full text-black lowercase"
                value="Affectionate"
              />
            </div>
            <p className="line-clamp-3">
              {item.Data.Attributes.DescriptionText}
            </p>
            <div className="card-actions justify-end mt-2">
              <button className="btn btn-ghost" href="">
                Read More
              </button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CatCard;
