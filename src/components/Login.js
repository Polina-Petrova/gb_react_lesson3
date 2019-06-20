import React from 'react';

export default class Login extends React.Component {
    render() {
        return(
            <div>
                <form method="post">
                    <input type="text" name="login" placeholder="Логин"/>
                    <input type="text" name="password" placeholder="Пароль"/>
                    <button type="submit">войти</button>
                </form>
            </div>
        )
    }
}