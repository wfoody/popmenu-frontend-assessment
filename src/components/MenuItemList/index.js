import React from 'react';
import styles from './MenuItemList.module.css';
import MenuItemCard from '../MenuItemCard';

const MenuItemList = (props) => {
    return (
        <div className={styles.menuList}>
            {props.menuList.map((item, index) => {
                return (
                    <MenuItemCard
                        editId={props.editId}
                        setEditId={props.setEditId}
                        editingText={props.editingText}
                        handleEditingText={props.handleEditingText}
                        title={item.title}
                        menuList={props.menuList}
                        price={item.price}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        id={item.id}
                        handleEditSubmit={props.handleEditSubmit}
                        handleDelete={props.handleDelete}
                        index={index}
                        key={item.id}
                    />
                )
            })}
        </div>
    );
}

export default MenuItemList;