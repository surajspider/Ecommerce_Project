import './App.css';
import './Style.css';
import RouteCompo from './RouteCompo/RouteCompo';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  const initialOptions = {
    clientId: "ARHHriXxHGbkC0CxoafIpDv8ZfYeznoDAQIg-5aXfEby8aVXwl27BEAgsGcZiPrhDI-SAJ-ZsQg1vnDi",
    currency: "USD",
    intent: "capture",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="App">
        <RouteCompo />
      </div>
    </PayPalScriptProvider>

  );
}

export default App;
