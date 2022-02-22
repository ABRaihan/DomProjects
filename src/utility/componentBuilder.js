export default function DOMComponent(component) {
	const fragment = new DocumentFragment();
	component?.forEach(element => fragment.append(elementBuilder(element)));
	return fragment;
}
function eventsHandler(events, element) {
	for (let event in events) element.addEventListener(event, events[event]);
}
function elementChecker(element) {
	if (element?.match(/<> <\/>/g)) return new DocumentFragment();
	if (element) return document.createElement(element);
	if (!element) return false;
}
function elementBuilder({ name, attrs, events, child }) {
	const element = elementChecker(name);
	if (attrs && element) for (let attr in attrs) element.setAttribute(attr, attrs[attr]);
	events && eventsHandler(events, element);
	if (typeof child !== "object") {
		if (element) {
			element.innerHTML = child || "";
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
