import React from 'react';
import styles from './App.module.css';
import MenuItemCardInput from './components/MenuItemCardInput';
import MenuItemList from './components/MenuItemList';

function App() {

  return (
    <div className={styles.App}>
      <h1>Sweenz Bistro</h1>
      <MenuItemCardInput />
      <MenuItemList />
    </div>
  );
}

export default App;
