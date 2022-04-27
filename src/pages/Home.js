import DOMComponent from "../utility/componentBuilder.js";
import PrimaryButton from '../components/PrimaryButton.js';
import profileImg from '../assets/images/profile.jpg';
// const anonna = new URL("../anonna.pdf", import.meta.url);
const Home = () => {
	return DOMComponent([
		{
			name: "section",
			attrs: {
				class: "home__page",
			},
			child: {
				name: "div",
				attrs: {
					class: "container",
				},
				child: {
					name: "div",
					attrs: {
						class: "info__wrapper",
					},
					child: [
						{
							name: "div",
							attrs: {
								class: "info__image__wrapper"
							},
							child: {
								name: "img",
								attrs: {
									class: "info__image",
									src: profileImg,
									alt: "A. B. Raihan"
								}
							}
						},
						{
							name: "h1",
							attrs: {
								class: "info__heading__text",
							},
							child: [
								{
									child: "I'm A. B. Raihan",
								},
								{
									name: "br"
								},
								{
									name: "span",
									attrs: {
										class: "info__heading__split",
									},
									child: "Frontend Web Application Developer",
								},
							],
						},
						{
							name: "p",
							attrs: {
								class: "info__details__text"
							},
							child: "Hey, smile first cause now you are going to know about me. My name is A. B. Raihan. I am studying DIU department of CSE and also a frontend web application developer. I lead my life in the simplest way. I like to play with problems. It makes me active and helps me to think differently."
						},
						{
							name: "<> </>",
							child: PrimaryButton()
						}
						// {
						// 	name: "a",
						// 	attrs: {
						// 		class: "download__pdf",
						// 		href: anonna,
						// 		download: "myPdf.pdf"
						// 	},
						// 	child: "A PDF File"
						// }
					],
				},
			},
		},
	]);
};
export default Home;
