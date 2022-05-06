import React, { useState } from 'react';
import uuid from 'react-uuid';
import styles from './App.module.css';
import MenuItemCardInput from './components/MenuItemCardInput/MenuItemCardInput';
import MenuItemList from './components/MenuItemList/MenuItemList';

function App() {

  const [item, setItem] = useState({ title: '', price: '', description: '', imageUrl: '', id: null });
  const [menuList, setMenuList] = useState(
    [
      {
        title: 'Glazed Thick-Cut Country Ribs',
        price: 18,
        description: 'Drizzled with Sriracha-spiked barbecue sauce.',
        imageUrl: 'https://simply-delicious-food.com/wp-content/uploads/2020/06/Sticky-BBQ-ribs-3.jpg',
        id: uuid()
      },
      {
        title: 'Curly Fries',
        price: 5.50,
        description: 'Sliced up curly and fried to perfection.',
        imageUrl: 'https://www.foodlovinfamily.com/wp-content/uploads/2021/10/frozen-curly-fries-air-fryer.jpg',
        id: uuid()
      },
      {
        title: 'Penne Napoli',
        price: 15,
        description: 'Served in a traditional tomato-based sauce with onion, garlic and basil',
        imageUrl: 'https://i0.wp.com/torna-a-surriento.co.uk/wp-content/uploads/2020/03/penne-napoli.jpg?fit=487%2C450&ssl=1',
        id: uuid()
      },
      {
        title: 'Salad',
        price: 12.75,
        description: 'Roasted pumpkin and beetroot with mixed lettuce and feta.',
        imageUrl: 'https://irenamacri.com/wp-content/uploads/2016/06/oregano-chicken-pumpkin-beet-salad-square-5.jpg',
        id: uuid()
      }
    ]
  );


  const [editId, setEditId] = useState(null);
  const [editingText, setEditingText] = useState({ title: '', price: '', description: '', imageUrl: '', id: uuid() });


  const handleAddItem = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value, id: uuid() });
    console.log(item)
  };


  const handleSubmit = () => {
    if (item.title && item.price && item.description) {
      setMenuList([...menuList, item]);
      setItem({ title: '', price: '', description: '', imageUrl: '', id: null })
    } else {
      alert('Please complete all fields before submitting')
    }
    console.log(menuList)
  };


  const handleEditingText = (e) => {
    setEditingText({ ...editingText, [e.target.name]: e.target.value });
  };


  const handleEditSubmit = (id) => {
    const newMenuList = [...menuList].map((item) => {
      if (item.id === id) {
        item = editingText;
      }
      return item
    })
    if (editingText.title && editingText.price && editingText.description && editingText.imageUrl) {
      setMenuList(newMenuList);
      setEditId(null);
      setEditingText({ title: '', price: '', description: '', imageUrl: '', id: uuid() })
    } else {
      console.log(newMenuList)
      alert('Please complete all fields before saving')
    }
  };

  const handleDelete = (index) => {
    let newMenuList = menuList;
    newMenuList.splice(index, 1);
    console.log(newMenuList)
    setMenuList([...newMenuList]);
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sweenz Kitchen</h1>
        <MenuItemCardInput
          item={item}
          setItem={setItem}
          menuList={menuList}
          setMenuList={setMenuList}
          handleAddItem={handleAddItem}
          handleSubmit={handleSubmit}
        />
      </div>
      <MenuItemList
        editId={editId}
        setEditId={setEditId}
        handleEditSubmit={handleEditSubmit}
        handleEditingText={handleEditingText}
        editingText={editingText}
        menuList={menuList}
        title={item.title}
        price={item.price}
        id={item.id}
        description={item.description}
        imageUrl={item.imageUrl}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
