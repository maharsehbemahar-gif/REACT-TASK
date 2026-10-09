import { useState} from "react";
function App() {
const [message,setMessage]=useState("Hello")
function changeMessage() {
   if (message==="Hello"){
    setMessage("Welcome to React")
   }
   else("Hello");
}
return(
    <div>
<h1>message</h1>
<button onClick={changeMessage}>
    changeMessage
</button>
    </div>
);
}
export default App;

