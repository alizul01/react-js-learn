const root = document.querySelector('#root');

const className = 'box';
// const element = (
//     <div className={className}>
//         Hello from React   
//     </div>
// );

function alertPeople(msg) {
    alert(msg);
}

const element = <button onClick={
    () => alertPeople('Hello from Izul')
}> Click Me </button>
ReactDOM.createRoot(root).render(element);