import React from "react"

const Footer = () => (
	<div className="site-footer">
		<h4 className="text-center">Crosspass Podcast</h4>
		<p className="text-center">Follow us on social media</p>
		<div className="footer-social-links">
			<ul className="social-links-list">
				<li>
					<a
						href="https://twitter.com/crosspasspod"
						target="_blank"
						rel="noopener noreferrer"
						className="twitter"
					>
						<i className="fab fa-twitter fa-2x" />
					</a>
				</li>
				<li>
					<a
						href="https://soundcloud.com/cppwaterpolo"
						target="_blank"
						rel="noopener noreferrer"
						className="soundcloud"
					>
						<i className="fab fa-soundcloud fa-2x" />
					</a>
				</li>
				<li>
					<a
						href="https://www.apple.com"
						target="_blank"
						rel="noopener noreferrer"
						className="apple-music"
					>
						<i className="fas fa-music fa-2x" />
					</a>
				</li>
			</ul>
		</div>
	</div>
)

export default Footer