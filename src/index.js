import { createRoot } from 'react-dom/client';
import App from './App';

//Criou-se uma variável para poder diferenciar o id "root" que está no HTML
const root = createRoot(document.querySelector("#root"));
root.render(<App />);