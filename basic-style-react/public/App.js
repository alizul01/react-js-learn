const root = document.querySelector('#root');
const className = 'box'; // const element = (
//     <div className={className}>
//         Hello from React   
//     </div>
// );

function alertPeople(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: () => alertPeople('Hello from Izul')
}, " Click Me ");
ReactDOM.createRoot(root).render(element);