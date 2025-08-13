import ReactDOM from 'react-dom/client';
import Product from './Message/Product';
import App from './App';
import Product1 from './Message/Product1';
let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
root.render(<Product/>);
root.render(<Product1/>);
