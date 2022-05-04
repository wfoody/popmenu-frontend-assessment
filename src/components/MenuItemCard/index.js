import React from 'react';
import styles from './MenuItemCard.module.css';

const MenuItemCard = (props) => {

    return (
        <div className={styles.card}>
            <div>
                <img src='https://picsum.photos/150' />
            </div>
            <div>
                <div>{props.title}</div>
                <div>{props.price}</div>
                <div>{props.description}</div>
                <button type='submit' onClick={() => window.confirm(`Are you sure you want to delete ${props.title} from the menu?`) ? props.handleDelete(props.index) : null }>X</button>
            </div>
        </div>
    )
}

export default MenuItemCard;