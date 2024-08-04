import Abyss from "../component/Abyss";
import Event from "../component/Event";
import Gudian from "../component/Gudian";
import Notice from "../component/Notice";
import "../resource/scss/main.scss";

function App() {
  return (
    <>
      <div>
        <Notice />
        <Event />
        <Gudian />
        <Abyss />
      </div>
    </>
  );
}

export default App;
