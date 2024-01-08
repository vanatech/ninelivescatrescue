import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Chip,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

export function CatGalleryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make API call when the component mounts
    fetch(`${process.env.REACT_APP_API_URL}rescue-groups/available`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {data.map((item) => (
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img src={item.PrimaryPictureUrl} alt="profile-picture" className="w-full h-full object-cover" />
          </CardHeader>

          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {item.Attributes.Name}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {item.Attributes.AgeGroup}
            </Typography>
          </CardBody>

          <CardFooter className="flex flex-col justify-center pt-0">
            <div className="flex flex-row justify-center gap-2 mb-4">
              {item.Attributes.Qualities.map((quality) => (
                  <Chip
                      size="sm"
                      variant="outlined"
                      className="rounded-full text-black lowercase"
                      value={quality}
                  />
              ))
              }
            </div>
            <p className="line-clamp-3">
              {item.Attributes.DescriptionText}
            </p>
            <div className="card-actions justify-end mt-2">
              <button className="btn btn-ghost" href="">
                Read More
              </button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
