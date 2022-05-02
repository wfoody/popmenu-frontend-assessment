import React from 'react';
import styles from './MenuItemCardInput.module.css';

const MenuItemCardInput = () => {
    return (
        <div>
            <form className={styles.inputForm}>
                <input type='text' placeholder='Title'/>
                <input type='text' placeholder='Price'/>
                <input type='text' placeholder='Description'/>
                <input type='text' placeholder='image URL'/>
            </form>
        </div>
    );
}

export default MenuItemCardInput;