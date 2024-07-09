import { useQuery } from "react-query";
import { IEvents } from "../interface/news";
import { fetchEvents } from "../api/api";


const Event = () => {
  const { isLoading, data } = useQuery<IEvents[]>("events", fetchEvents);

  return (
    <>
      <div>
        <div>
          <div>진행 중인 이벤트</div>
          {data &&
            data.map((event, index) => (
             <div className="eventList" key={index}>
                <div>{event.Title} ({event.StartDate.substring(0,10)}~{event.EndDate.substring(0,10)})</div>
                <div className="eventThumbnail" style={{backgroundImage : `url(${event.Thumbnail})`}}>
                    <span className="altText">이벤트 썸네일</span>
                </div>
             </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Event;
