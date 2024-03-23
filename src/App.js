import {
    MultiStepIndicator,
    Dropdown
} from "monday-ui-react-core";
import "monday-ui-react-core/tokens";
import "./App.css";


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

    const options = [
        {
            label: "Option 1",
            value: "option1"
        },
        {
            label: "Option 2",
            value: "option2"
        },
        {
            label: "Option 3",
            value: "option3"
        }
    ];

    return <div>
        <MultiStepIndicator size="compact"
                            steps={steps}/>
        <Dropdown size={Dropdown.sizes.MEDIUM} options={options} multi/>
    </div>;
}

export default App;
