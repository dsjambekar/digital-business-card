import logo from "./logo.svg";
import "./App.css";
import HeadSection from "./components/HeadSection";
import DetailsSection from "./components/DetailsSection";
import SocialMediaSection from "./components/SocialMediaSection";

function App() {
	return (
		<div className="App">
			<div className="business-card">
				<HeadSection />
				<DetailsSection />
				<SocialMediaSection />
			</div>
		</div>
	);
}

export default App;
