import {Dropdown} from "monday-ui-react-core"

function App() {
    return <Dropdown placeholder="Property"
                     options={[{label: "hello", value: "1"}, {label: "world", value: "2"}]}/>
}

export default App
