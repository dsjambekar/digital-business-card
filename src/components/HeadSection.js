export default function HeadSection() {
	return (
		<div className="head-section">
			<img
				src={require("../business_card.jpg")}
				height="317px"
				width="317px"
			/>
			<p className="business-card-title">Dhanashree J</p>
			<p className="business-card-subtitle">Fullstack Developer</p>
			<p className="business-card-website">dhanashreejam.in</p>
			<div className="business-card-btn-group">
				<button className="business-card-btn-email">
					<a href="mailto:dsjambekar@gmail.com">Email</a>
				</button>
				<button className="business-card-btn-linkedin">
					<a
						href="https://www.linkedin.com/in/dhanashree-jambekar-32616713/"
						target="_blank"
					>
						Linkedin
					</a>
				</button>
			</div>
		</div>
	);
}
