import React, { useState } from "react";
import { PictureSelect } from "src/components";

const pictures: PictureSelect.ItemProps[] = [
  {
    id: "1",
    name: "foo",
    url:
      "https://goss.veer.com/creative/vcg/veer/800water/veer-151072756.jpg",
  },
  {
    id: "2",
    name: "foo",
    url:
      "https://goss.veer.com/creative/vcg/veer/800water/veer-153835898.jpg",
  },
  {
    id: "3",
    name: "foo",
    url:
      "https://goss.veer.com/creative/vcg/veer/800water/veer-144515959.jpg",
  },
];

export default () => {
  const [value, setValue] = useState(["1"]);

  return (
    <div>
      <PictureSelect pictures={pictures} value={value} onChange={setValue} />
    </div>
  );
};
