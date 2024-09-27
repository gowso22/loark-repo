import React from "react";
import { useQuery } from "react-query";
import { fetchEquipment } from "../../api/api";
import { IEquipment } from "../../interface/amorises";
import Weapon from "./Weapon";
import Helmet from "./Helmet";

const Equip = () => {
  const { data } = useQuery<IEquipment[]>("equipment", fetchEquipment);
  return (
    <>
      <div>대아름 equipment</div>
      {data &&
        data.slice(0, 6).map((equip, index) => (
          <div key={index}>
            <img src={equip.Icon} />
            <div>
              {equip.Type} -&gt; {equip.Name}({equip.Grade})
            </div>
          </div>
        ))}
      <br />
      <div>Equipment Tooltip</div>
      <Weapon />
      <Helmet />
    </>
  );
};
export default Equip;
