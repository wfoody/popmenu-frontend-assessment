import React from 'react';
import styles from './MenuItemList.module.css';
// import MenuItemCardInput from '../MenuItemCardInput';
import MenuItemCard from '../MenuItemCard';

const MenuItemList = (props) => {
    return (
        <div>
            <ul>
                {props.menuList.map((item, index) => {
                    return (
                        <li><MenuItemCard  title={item.title} price={item.price} description={item.description} imageUrl={item.imageUrl} /></li>
                    )
                })}
            </ul>
        {/* <MenuItemCard title='hello' price='2'/> */}
        </div>
    );
}

export default MenuItemList;