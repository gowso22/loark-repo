import { useQuery } from "react-query";
import { fetchEquipment } from "../api/api";
import { IEquipment } from "../interface/amorises";


const Equip = () => {
  const { data } = useQuery<IEquipment[]>("equipment", fetchEquipment);

  if(data){
    const str = data?.[0].Tooltip;
    const element = JSON.parse(str);
    console.log(element.Element_000.value.replace(/<\/?[^>]+>/g, ""));
  }
  
  
  return (
    <>
      <div>대아름 equipment</div>
      {data && 
        data.slice(0,13).map((equip, index) => (
            <div key={index}>
                <img src={equip.Icon}/>
                <div>{equip.Type} -&gt; {equip.Name}({equip.Grade})</div>
                
            </div>
        ))
      }
    </>
  )
}
export default Equip;
