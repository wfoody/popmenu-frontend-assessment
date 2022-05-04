import React from 'react';
import styles from './MenuItemList.module.css';
import MenuItemCard from '../MenuItemCard';

const MenuItemList = (props) => {
    return (
        <div className={styles.menuList}>
                {props.menuList.map((item, index) => {
                    return (
                        <MenuItemCard  title={item.title} price={item.price} description={item.description} imageUrl={item.imageUrl} handleDelete={props.handleDelete} index={index} />
                    )
                })}
        </div>
    );
}

export default MenuItemList;