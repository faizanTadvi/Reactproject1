function Button() {
    function clicksomething() {
        alert("Button clicked!");
    }

    return (
        <button onClick={clicksomething}>Click me !!!!</button>
    );
}
export default Button;