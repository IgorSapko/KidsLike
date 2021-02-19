import React, { Fragment, useState } from "react";
//svg
import PlusSvg from "./PlusSvg";
//style
import { BlockAddSwitch, BlockCheckbox, BlockLabel } from "./SelectDays.styles";

export default function SelectDays() {
  const [toggle, serToggle] = useState(false);
  const [listTask, serListTask] = useState([]);
  const days = [
    ["ПН", "Monday"],
    ["ВТ", "Tuesday"],
    ["СР", "Wednesday"],
    ["ЧТ", "Thursday"],
    ["ПТ", "Friday"],
    ["СБ", "Saturday"],
    ["ВС", "Sunday"]
  ];
  const handlechange = () => serToggle(!toggle);

  const handleInputChange = (e) => {
    const selectName = e.target.id;

    serListTask([...listTask, selectName]);
  };

  return (
    <Fragment>
      {!toggle ? (
        <BlockAddSwitch onClick={handlechange}>
          <PlusSvg />
        </BlockAddSwitch>
      ) : (
        <div>
          <BlockAddSwitch onClick={handlechange}>OK</BlockAddSwitch>

          <BlockCheckbox>
            {days.map((item) => {
              return (
                <BlockLabel key={item[0]}>
                  <input
                    type="checkbox"
                    id={item[1]}
                    onChange={handleInputChange}
                  />
                  {item[0]}
                </BlockLabel>
              );
            })}
          </BlockCheckbox>
        </div>
      )}
    </Fragment>
  );
}
