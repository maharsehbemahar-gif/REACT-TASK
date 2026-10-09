import { useState } from "react";
function Task1() {
const [message, setMessage] = useState("Hello");
function changeMessage() {
setMessage("Welcome to React");
}
return (
<div className="main">
<h1 className="container ">{message}</h1>
<button onClick={changeMessage}>
Change Message 
</button>
</div>
);
}
export default Task1;
