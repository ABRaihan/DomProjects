export default function DOMComponent(component) {
	const fragment = new DocumentFragment();
	component?.forEach(element => fragment.append(elementBuilder(element)));
	return fragment;
}
function eventsHandler(events, element) {
	for (let event in events) element.addEventListener(event, events[event]);
}
function elementBuilder({ name, attrs, events, child }) {
	const element = name && document.createElement(name);
	if (attrs) for (let attr in attrs) element.setAttribute(attr, attrs[attr]);
	events && eventsHandler(events, element);
	if (typeof child !== "object") {
		if (element) {
			element.innerHTML = child;
			return element;
        } else {
           return document.createTextNode(child);
        }
	}
	const childElement = Array.isArray(child)
		? DOMComponent(child)
		: elementBuilder(child);
	element.append(childElement);
	return element;
}
