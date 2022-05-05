import { render } from '@testing-library/react';
import MenuItemCard from './index'

describe('<MenuItemCard />', () => {
    const mockItem = {title: 'test', price: 3, description: 'testy', imageUrl: '##', id: '1'}
    it ('should render menu item card', () => {
        render(<MenuItemCard editingText={mockItem} />)
    })
})