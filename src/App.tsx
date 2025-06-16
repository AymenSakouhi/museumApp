import "./App.css";
import Card from "./componetns/Card";
import PAINTINGS from "./data/museum.json";

const App = () => {
  return (
    <div className="font-museomoderno bg-slate-300 pt-2 px-8">
      <h1 className="text-6xl font-bold text-center text-slate-600 py-4">
        Moderno Museum
      </h1>
      {PAINTINGS.map((painting) => (
        <Card key={Math.random().toString(26).slice(2)} painting={painting} />
      ))}
    </div>
  );
};

export default App;
