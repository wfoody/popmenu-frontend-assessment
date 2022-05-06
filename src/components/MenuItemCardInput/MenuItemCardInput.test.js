import { render } from '@testing-library/react';
import MenuItemCardInput from './MenuItemCardInput'

describe('<MenuItemCardInput />', () => {
    const mockItem = {title: 'test', price: 3, description: 'testy', imageUrl: '##', id: '1'}
    it ('should render item input', () => {
        render(<MenuItemCardInput item={mockItem} />)
    })
})