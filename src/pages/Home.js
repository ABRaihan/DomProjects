import DOMComponent from "../utility/componentBuilder.js";
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
									src: "",
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
									child: "I'm steve milner",
								},
								{
									name: "span",
									attrs: {
										class: "info__heading__split",
									},
									child: "Web Designer",
								},
							],
						},
						{
							name: "p",
							attrs: {
								class: "info__details__text"
							},
							child: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis provident tenetur quas! Cumque, illum sint! Molestiae repellendus velit eaque minus?"
						}
					],
				},
			},
		},
	]);
};
export default Home;
