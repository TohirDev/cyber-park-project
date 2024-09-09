import { RouteProvider as Routes } from "./providers/routeProvider";

function App() {
  console.log(import.meta.env.VITE_BASE_API_URL, "mee");
  return <Routes />;
}

export default App;
