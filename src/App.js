import './App.css';
import {Modal} from "./components";
import {useState} from "react";

const MAIN_STYLES = {
    position: "relative",
    zIndex: 1
}

const OTHER_CONTENT_STYLES = {
    position: "relative",
    zIndex: 2,
    backgroundColor: 'green',
}

function App() {
    const [visible, setVisible] = useState(false)
    const [visibleSecond, setVisibleSecond] = useState(false)

    return (
        <div className="App">
            <main style={MAIN_STYLES}>
                <button onClick={() => setVisible(s => !s)}>
                    Toggle first modal
                </button>
                <Modal visible={visible} onClose={() => setVisible(false)}>
                    <div>
                        This is content of first modal
                        <button onClick={() => setVisibleSecond(s => !s)}>
                            Toggle second modal
                        </button>
                    </div>
                </Modal>
                <Modal visible={visibleSecond} onClose={() => setVisibleSecond(false)}>
                    This is content of second modal
                    <button onClick={() => setVisible(false)}>
                        Close first modal
                    </button>
                </Modal>
            </main>
            <div style={OTHER_CONTENT_STYLES}>
                Other content
            </div>
        </div>
    );
}

export default App;
