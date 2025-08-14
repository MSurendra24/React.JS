import Product from './Message/Product';
import Product1 from './Message/Product1';
import CompA from './Message/CompA';
import CompB from './Message/CompB';
import Message1 from './Message/Message1';
import Messages from './Message/Messages';
function App() {
return <div>
    <h1>Welcome to Product Management</h1>
    <Product />
    <Product1 />
    <CompA />
    <CompB />
    <hr />
    <h2>Components</h2>
    <Message1 />
    <h2>End of Product Management</h2>
    <hr />
    <h2>Values</h2>
    <Messages />
    <hr />
    </div>

}
export default App;