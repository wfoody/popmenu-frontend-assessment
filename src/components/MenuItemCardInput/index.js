import React from 'react';
import styles from './MenuItemCardInput.module.css';

const MenuItemCardInput = (props) => {

    return (
        <div className={styles.inputDiv}>
            <form className={styles.inputForm}>
                <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    onChange={(e) => props.handleAddItem(e)}
                    value={props.item.title}
                />
                <input
                    type='number'
                    placeholder='Price'
                    name='price'
                    onChange={(e) => props.handleAddItem(e)}
                    value={props.item.price}
                />
                <input
                    type='text'
                    placeholder='Description'
                    name='description'
                    onChange={(e) => props.handleAddItem(e)}
                    value={props.item.description}
                />
                <input
                    type='text'
                    placeholder='Image URL'
                    name='imageUrl'
                    onChange={(e) => props.handleAddItem(e)}
                    value={props.item.imageUrl}
                />
                <button
                    type='button'
                    onClick={props.handleSubmit}
                >
                    +
                </button>
            </form>
        </div>
    );
}

export default MenuItemCardInput;