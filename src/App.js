import React, { useState } from 'react';
import uuid from 'react-uuid';
import styles from './App.module.css';
import MenuItemCardInput from './components/MenuItemCardInput';
import MenuItemList from './components/MenuItemList';

function App() {

  const [item, setItem] = useState({ title: '', price: '', description: '', imageUrl: '', id: null });
  const [menuList, setMenuList] = useState(
    [
      {
        title: 'Glazed Thick-Cut Country Ribs',
        price: 18,
        description: 'Finger-licking ribs with a Sriracha-spiked barbecue sauce.',
        imageUrl: '#',
        id: uuid()
      },
      {
        title: 'Curly Fries',
        price: 5.50,
        description: 'Sliced up curly and fried to perfection.',
        imageUrl: '#',
        id: uuid()
      },
      {
        title: 'Penne Napoli',
        price: 15,
        description: 'Penne with a traditional tomato based sauce with onion, garlic and freshly chopped basil and oregano finished off with a blend of spices.',
        imageUrl: '#',
        id: uuid()
      },
      {
        title: 'Salad',
        price: 12,
        description: 'Roasted pumpkin and beetroot with mixed lettuce and feta.',
        imageUrl: '#',
        id: uuid()
      }
    ]
  );
  const [editId, setEditId] = useState(null);
  const [editingText, setEditingText] = useState({ title: '', price: '', description: '', imageUrl: '', id: uuid() });
  // const [editingText, setEditingText] = useState(item);


  const handleAddItem = (e) => {
    // setMenuList([...menuList]);
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
  }

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
  }

  const handleDelete = (index) => {
    let newMenuList = menuList;
    newMenuList.splice(index, 1);
    console.log(newMenuList)
    setMenuList([...newMenuList]);
  };

  return (
    <div className={styles.App}>
      <h1>Sweenz Bistro</h1>
      <MenuItemCardInput
        item={item}
        setItem={setItem}
        menuList={menuList}
        setMenuList={setMenuList}
        handleAddItem={handleAddItem}
        handleSubmit={handleSubmit}
      />
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
