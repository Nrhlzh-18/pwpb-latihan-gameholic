import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import TrendingGames from "./components/TrendingGames";
import BestGame from "./components/BestGame";

import "./style/LandingPages.css";

function App() {
    return (
        <div className="App">
            <div className="myBG">
                <NavigationBar/>
                <Intro />
            </div>
            <div className="trending">
                <TrendingGames />
            </div>
            <div className="best">
                <BestGame />
            </div>
        </div>
    );
}

export default App;
