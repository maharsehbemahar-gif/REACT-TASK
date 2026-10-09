


import { useState } from "react";
function Task2() {
const [name, setName] = useState("");
return (
<div className="form-box">
<h1 className="form-box h1 ">Student Form</h1>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Enter your name"
className="form-box input:focus "/>
<h2 className="form-box h2 ">Your Name: {name}</h2>
</div>
);
}
export default Task2;