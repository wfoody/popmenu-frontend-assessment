import React from 'react';
import styles from './MenuItemCard.module.css';
// import MenuItemCardInput from '../MenuItemCardInput';

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
            </div>
        </div>
    )
}

export default MenuItemCard;