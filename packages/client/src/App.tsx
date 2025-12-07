import { swift } from "@lowcode/share";
import { Button } from "antd";

function App() {
  return (
    <>
      <div>
        <Button type="primary">点我</Button>
        <div className="text-red-400">{swift}</div>
      </div>
    </>
  );
}

export default App;
