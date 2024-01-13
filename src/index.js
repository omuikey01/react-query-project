import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css'
import './css/nav.css'
import './css/main.css'
import './css/form.css'
import './css/heading.css'
import './css/footer.css'
import './css/register.css'
import './css/login.css'
import './css/Studash.css'
import './css/loader.css'
import './css/StuCpmForm.css'


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <App />
            </PersistGate>
        </Provider>
    </>
);