import {render, screen} from '@testing-library/react';
import Container from './Container';

describe('Container' , () => {
    test('should show container', () => {
        render(<Container>Henlo</Container>);

        expect(screen.getByTestId('container')).toBeTruthy();
        expect(screen.getByText('Henlo')).toBeVisible();
    })

    test('should show text title', () => {
        render(<Container title="Title">Henlo</Container>);

        expect(screen.getByText('Henlo')).toBeVisible();
        expect(screen.getByText('Title')).toBeVisible();
    })

    test('should show header color as background color', async () => {
        const {container} = render(<Container title="Title" headerColor="bg-green-600">Henlo</Container>);

        // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
        expect(container.getElementsByClassName('bg-green-600').length).toBeTruthy()
    })
})