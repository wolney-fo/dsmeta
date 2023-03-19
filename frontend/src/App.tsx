import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header/Header";
import { NotificationButton } from "./components/NotificationButton/NotificationButton";
import { SalesCard } from "./components/SalesCard/SalesCard";

function App() {
  return (
    <body>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
