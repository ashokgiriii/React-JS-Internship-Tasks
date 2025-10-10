import Card from "./components/Card";
import imageData from "./data/imageInfo.json";

const App = () => {
  return (
    <div className="container  flex justify-start gap-[10px] mx-auto w-full flex-wrap py-4 ">
      {imageData.map((item) => (
        <Card key={item.id} src={item.src} />
      ))}
    </div>
  );
};

export default App;
