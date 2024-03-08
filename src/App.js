import './App.css';
import {EditableText, MultiStepIndicator} from "monday-ui-react-core";
import "monday-ui-react-core/tokens";


function App() {
    const steps = [
        {
            key: "first",
            titleText: "First"
        },
        {
            key: "second",
            titleText: "Second"
        },
        {
            key: "third",
            titleText: "Third"
        }
    ]
    return <div>
        <EditableText
            type={EditableText.types.TEXT2}
            weight={EditableText.weights.BOLD}
            placeholder="New report"
            value={''}
            onChange={(newTitle) => {
                console.log(newTitle);
            }}/>
        <MultiStepIndicator size="compact"
                            steps={steps}/>
    </div>;
}

export default App;
