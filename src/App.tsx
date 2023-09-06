import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resumo from "./pages/Resumo";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Vendas from "./pages/Vendas";
import Venda from "./pages/Venda";
import { DataContextProvider } from "./context/DataContext";
import "./Style.css";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/venda/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
