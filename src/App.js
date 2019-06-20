import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./components/Login";
import Menu from "./components/Menu";

class App extends React.Component {
    render() {

        const menuItems = [
            {href: './index.html', name: 'Главная'},
            {href: './index.html/login', name: 'Вход'}
        ];

        return (
            <div>
                <Menu items={menuItems}/>
                <Login/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));