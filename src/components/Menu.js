import React from 'react';

export default class Menu extends React.Component {
    render() {

        const items = this.props.items.map((item, index) => {
            return <li key={index}><a href={item.href}>{item.name}</a></li>
        });

        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}