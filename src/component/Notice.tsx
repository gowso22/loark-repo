import { useQuery } from "react-query";
import { INotices } from "../interface/news";
import { fetchNotices } from "../api/api";


const Notice = () => {
  const { isLoading, data } = useQuery<INotices[]>("notices", fetchNotices);
  return (
    <>
      <div>
        <div className="noticeStyle">
          <div>로아 공지사항</div>
          {data &&
            data.slice(0, 10).map((notice) => (
              <div key={notice.Date}>
                <a href={notice.Link} target="_blank" rel="noopener noreferrer">
                  <div>{notice.Title.slice(0, 26)}...</div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Notice;
