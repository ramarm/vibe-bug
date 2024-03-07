import './App.css';
import {EditableText} from "monday-ui-react-core";
import "monday-ui-react-core/tokens";


function App() {
  return (
      <EditableText
          type={EditableText.types.TEXT2}
          weight={EditableText.weights.BOLD}
          placeholder="New report"
          value={''}
          onChange={(newTitle) => {
            console.log(newTitle);
          }}
      />
  );
}

export default App;
