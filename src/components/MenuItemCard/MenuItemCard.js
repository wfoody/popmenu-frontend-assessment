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
                        <img src={ props.imageUrl ? props.imageUrl : 'https://static.vecteezy.com/system/resources/thumbnails/005/295/624/small/spoon-and-fork-icon-free-vector.jpg'} />
                    </div>
                    <div className={styles.textAndButtons}>
                        <div className={styles.text}>
                            <div className={styles.title}>{props.title}</div>
                            <div className={styles.price}>{props.price ? formattedPrice : null}</div>
                            <div className={styles.description}>{props.description}</div>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.editButton} onClick={() => props.setEditId(props.id)}>Edit</button>
                            <button className={styles.closeButton} type='submit' onClick={() => window.confirm(`Are you sure you want to delete ${props.title} from the menu?`) ? props.handleDelete(props.index) : null}>Delete</button>
                        </div>
                    </div>
                </div>
                :
                <div className={styles.editCard}>
                    <div className={styles.inputForm}>
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
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.saveButton} type='submit' onClick={() => props.handleEditSubmit(props.id)}>Save</button>
                        <button className={styles.closeButton} type='submit' onClick={() => window.confirm(`Are you sure you want to delete ${props.title} from the menu?`) ? props.handleDelete(props.index) : null}>Delete</button>
                        <button className={styles.cancelButton} type='submit' onClick={() => props.setEditId(null)}>Cancel</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default MenuItemCard;