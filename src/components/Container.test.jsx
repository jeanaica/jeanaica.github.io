import {render, screen} from '@testing-library/react';
import Container from './Container';

describe('Container' , () => {
    test('should show container', () => {
        render(<Container>Henlo</Container>);

        expect(screen.getByTestId('container')).toBeTruthy();
        expect(screen.getByText('Henlo')).toBeVisible();


    })
})