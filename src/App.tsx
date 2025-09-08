import SimpleProductCard from "./components/SimpleProductCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <SimpleProductCard name="Наушники" price={1999} />
      <SimpleProductCard name="Чехол" price={799} />
      <SimpleProductCard name="Колонка" price={3499} />
    </div>
  );
}

export default App;
