import React from 'react';
import styles from './MenuItemCard.module.css';

const MenuItemCard = (props) => {

    const price = parseFloat(props.price);
    const formattedPrice = `$${price.toFixed(2)}`

    return (
        <div className={styles.cardContainer}>
            {props.editId !== props.id ?
                <div className={styles.card}>
                    <div>
                        <img src='https://picsum.photos/150' />
                    </div>
                    <div>
                        <div className={styles.title}>{props.title}</div>
                        <div className={styles.price}>{props.price ? formattedPrice : null}</div>
                        <div className={styles.description}>{props.description}</div>
                        <button onClick={() => props.setEditId(props.id)}>Edit</button>
                        <button type='submit' onClick={() => window.confirm(`Are you sure you want to delete ${props.title} from the menu?`) ? props.handleDelete(props.index) : null}>X</button>
                    </div>
                </div>
                :
                <div className={styles.editCard}>
                    <input
                        type='text'
                        name='title'
                        onChange={(e) => props.handleEditingText(e)}
                        value={props.editingText.title}
                        placeholder={'Title'}
                    />
                    <input
                        type='number'
                        name='price'
                        onChange={(e) => props.handleEditingText(e)}
                        value={props.editingText.price}
                        placeholder={'Price'}
                    />
                    <input
                        type='text'
                        name='description'
                        onChange={(e) => props.handleEditingText(e)}
                        value={props.editingText.description}
                        placeholder={'Description'}
                    />
                    <input
                        type='text'
                        name='imageUrl'
                        onChange={(e) => props.handleEditingText(e)}
                        value={props.editingText.imageUrl}
                        placeholder={"Image URL"}
                    />
                    <button type='submit' onClick={() => props.handleEditSubmit(props.id)}>Save</button>
                    <button type='submit' onClick={() => window.confirm(`Are you sure you want to delete ${props.title} from the menu?`) ? props.handleDelete(props.index) : null}>X</button>
                    <button type='submit' onClick={() => props.setEditId(null)}>Cancel</button>
                </div>
            }
        </div>
    )
}

export default MenuItemCard;