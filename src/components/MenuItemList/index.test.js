import { render } from '@testing-library/react';
import MenuItemList from './index'

describe('<MenuItemCardList />', () => {

    const mockItem = [{title: 'test', price: 3, description: 'testy', imageUrl: '##', id: '1'}]
    it ('should render menu item card', () => {
        render(<MenuItemList menuList={mockItem} />)
    })
})