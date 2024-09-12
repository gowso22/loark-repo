import { useState } from "react";
import Abyss from "../component/Abyss";
import Event from "../component/Event";
import Gudian from "../component/Gudian";
import Notice from "../component/Notice";
import "../resource/scss/main.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const [chSearch, setChSearch] = useState(``);
  const navigate = useNavigate();

  const onSearchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/profile`);
  };

  return (
    <>
      <div>
        {/* <form onSubmit={onSearchHandler}>
          <input
            value={chSearch}
            onChange={(e) => setChSearch(e.target.value)}
            placeholder="캐릭터명을 입력해주세요."
            required
          />
          <button>검색</button>
        </form> */}
        <button onClick={onSearchHandler}>대아름 검색</button>
        <Notice />
        <Event />
        <Gudian />
        <Abyss />
      </div>
    </>
  );
}

export default Home;
