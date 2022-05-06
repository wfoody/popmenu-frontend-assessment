import { render } from '@testing-library/react';
import MenuItemList from './MenuItemList'

describe('<MenuItemCardList />', () => {
    const mockItem = [{title: 'test', price: 3, description: 'testy', imageUrl: '##', id: '1'}]
    it ('should render menu item list', () => {
        render(<MenuItemList menuList={mockItem} />)
    })
})