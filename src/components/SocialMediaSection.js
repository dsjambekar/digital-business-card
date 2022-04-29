export default function SocialMediaSection() {
	return (
		<div className="social-media-section">
			<a href="https://twitter.com/free_dhana" target="_blank">
				<img src={require("../twitter-icon.png")} width="25px" />
			</a>
			<a
				href="https://www.facebook.com/dhanashree.jambekar"
				target="_blank"
			>
				<img src={require("../facebook-icon.png")} width="25px" />
			</a>
			<a href="https://twitter.com/free_dhana" target="_blank">
				<img src={require("../instagram-icon.png")} width="25px" />
			</a>
			<a href="https://github.com/dsjambekar" target="_blank">
				<img src={require("../github-icon.png")} width="25px" />
			</a>
		</div>
	);
}
