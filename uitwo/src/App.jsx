import { Header } from "./components/header";
import { Registration } from "./components/registration";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#121212] to-[#030149] h-screen">
        <Header />
        <Registration />
      </div>
    </>
  );
}

export default App;
