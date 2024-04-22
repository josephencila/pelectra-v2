import { TimePicker } from "antd";
function App() {
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  return (
    <div>
      <TimePicker
        format="hh:mm"
        onChange={(value) =>
          onChange({ target: { name: "time", value: value } })
        }
      />
    </div>
  );
}

export default App;
