import { useQuery } from "react-query";
import { IAbyss } from "../interface/content";
import { fetchAbyss } from "../api/api";

const Abyss = () => {
  const { data } = useQuery<IAbyss[]>("Abysss", fetchAbyss);

  return (
    <>
      <div>
        <div>
          <div>도전 어비스 던전!</div>
          {data &&
            data.map((abyss, index) => (
              <div className="eventList" key={index}>
                <div>
                  {abyss.Name}
                  {abyss.AreaName}({abyss.StartTime}~{abyss.EndTime})
                </div>
                <div
                  className="eventThumbnail"
                  style={{ backgroundImage: `url(${abyss.Image})` }}
                >
                  <span className="altText">도가토이미지</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Abyss;
