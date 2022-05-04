import React, { useState } from 'react';
import styles from './App.module.css';
import MenuItemCardInput from './components/MenuItemCardInput';
import MenuItemList from './components/MenuItemList';

function App() {

  const [item, setItem] = useState({ title: '', price: '', description: '', imageUrl: '' });
  const [menuList, setMenuList] = useState([
    {
      title: 'Wings',
      price: '20',
      description: 'hot',
      imageUrl: '#',
    },
    {
      title: 'Salad',
      price: '10',
      description: 'good',
      imageUrl: '#',
    },
    {
      title: 'Pasta',
      price: '15',
      description: 'cheesy',
      imageUrl: '#',
    },
    {
      title: 'Fries',
      price: '5',
      description: 'salty',
      imageUrl: '#',
    }
  ])

  const handleAddItem = (e) => {
    setMenuList([...menuList]);
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log(item)
  };

  const handleSubmit = () => {
    if (item.title && item.price && item.description) {
      setMenuList([...menuList, item]);
      setItem({ title: '', price: '', description: '', imageUrl: '' })
    } else {
      alert('Please complete all fields before submitting')
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
      <h1>Sweenz Bistro</h1>
      <MenuItemCardInput
        item={item}
        setItem={setItem}
        menuList={menuList}
        setMenuList={setMenuList}
        handleAddItem={handleAddItem}
        handleSubmit={handleSubmit}
      />
      <MenuItemList menuList={menuList} title={item.title} price={item.price} description={item.description} imageUrl={item.imageUrl} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
