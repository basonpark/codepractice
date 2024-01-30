function Example() {
    const divs = Array.from({ length: 10 }, (_, index) => (
        <div key={index}>Div {index + 1}</div>
    ));

    return (
        <div>
            <h1>Example</h1>
            <ul>{divs}</ul>
        </div>
    );
}
function checkPalindrome(input) {
    const reversedInput = input.split('').reverse().join('');
    if (input === reversedInput) {
        return "YESSSSSSSS";
    }
}

export default Example;