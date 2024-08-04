import { useQuery } from "react-query";
import { IGudians } from "../interface/content";
import { fetchGudian } from "../api/api";

const Gudian = () => {
  const { data } = useQuery<IGudians[]>("gudians", fetchGudian);

  return (
    <>
      <div>
        <div>
          <div>도전 가디언 토벌!</div>
          {data &&
            data.map((abyss, index) => (
              <div className="eventList" key={index}>
                <div>
                  {abyss.Name}(abyss.AreaName) ({abyss.StartTime}~
                  {abyss.EndTime})
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

export default Gudian;
