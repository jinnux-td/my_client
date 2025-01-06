import Gallery from "src/components/Gallery";
import ConditionalView from "src/pages/ConditionalView";
import "./App.css";
const mode = 1;
function App() {
  if (mode === 1) {
    return <ConditionalView />;
  }
  if (mode === 2) {
    return <Gallery />;
  }
  return null;
}

export default App;
