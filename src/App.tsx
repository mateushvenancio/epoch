import './App.css';
import { Header, Canva, Keyboard } from './components';

function App() {
    return (
        <>
            <Header />
            <div className="display">
                <Canva />
                <Keyboard />
            </div>
        </>
    );
}

export default App;
