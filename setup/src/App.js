const root = document.querySelector('#root');

function Hello(props) {
    return <h1>Hello {props.name}</h1>;
}
console.log(<Hello name="World" />);
const element = (
    <>
        <Hello name="Ali" />
        <Hello name="Wanda" />
        <Hello name="Dani" />
    </>
);
ReactDOM.createRoot(root).render(element);