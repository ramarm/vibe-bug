import './App.css';
import {
    Modal,
    Button,
    Dialog,
    DialogContentContainer,
    Combobox,
    EditableText,
    MultiStepIndicator
} from "monday-ui-react-core";
import "monday-ui-react-core/tokens";
import {useState} from "react";


function App() {
    const [isOpen, setIsOpen] = useState(false);
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
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
        <Dialog zIndex={2000000} position={Dialog.positions.BOTTOM}
                content={<DialogContentContainer>
                    <Combobox optionClassName="insight-combobox"
                              size={Combobox.sizes.SMALL}
                              maxOptionsWithoutScroll={5}
                              onClick={(value) => console.log(value)}
                              placeholder="Search"
                              options={[
                                  {id: "1", label: "One"},
                                  {id: "2", label: "Two"},
                                  {id: "3", label: "Three"}
                              ]}/>
                </DialogContentContainer>}
                showTrigger={[Dialog.hideShowTriggers.CLICK]}
                hideTrigger={[Dialog.hideShowTriggers.CLICK, Dialog.hideShowTriggers.CLICK_OUTSIDE]}>
            <Button>Open dialog</Button>
        </Dialog>
        <Modal title="test" onClose={() => setIsOpen(false)} show={isOpen}>
            <Dialog zIndex={2000000} position={Dialog.positions.BOTTOM}
                    content={<DialogContentContainer>
                        <Combobox optionClassName="insight-combobox"
                                  size={Combobox.sizes.SMALL}
                                  maxOptionsWithoutScroll={5}
                                  onClick={(value) => console.log(value)}
                                  placeholder="Search"
                                  options={[
                                      {id: "1", label: "One"},
                                      {id: "2", label: "Two"},
                                      {id: "3", label: "Three"}
                                  ]}/>
                    </DialogContentContainer>}
                    showTrigger={[Dialog.hideShowTriggers.CLICK]}
                    hideTrigger={[Dialog.hideShowTriggers.CLICK, Dialog.hideShowTriggers.CLICK_OUTSIDE]}>
                <Button>Open dialog</Button>
            </Dialog>
        </Modal>
    </div>;
}

export default App;
