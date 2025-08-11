import react from 'react';
class Message extends react.Component {
    msg="Hello, World!";
    getHandler=()=>{
        this.msg="Hello";

    }
    render() {
    return (
    <div>
        <h1>Hello, World!</h1>
        <button onClick={this.getHandler}>Change Message</button>
    </div>
    );
    }
}
export default Message;