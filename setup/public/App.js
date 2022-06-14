const root = document.querySelector('#root');

function Hello(props) {
  return /*#__PURE__*/React.createElement("h1", null, "Hello ", props.name);
}

console.log( /*#__PURE__*/React.createElement(Hello, {
  name: "World"
}));
const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hello, {
  name: "Ali"
}), /*#__PURE__*/React.createElement(Hello, {
  name: "Wanda"
}), /*#__PURE__*/React.createElement(Hello, {
  name: "Dani"
}));
ReactDOM.createRoot(root).render(element);