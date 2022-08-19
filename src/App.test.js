import { render, screen, fireEvent} from '@testing-library/react'
import App from "./App"


describe('TODO',  () => {
    test('should show todo items', () => {
        render(<App />)

        expect(screen.getByText('Make coffee')).toBeVisible()
    });

    test('should remove in todo list after on click',() => {
        render(<App />)

        // get button which has 'Make coffee' text on it
        const btn = screen.getByText('Make coffee');
        fireEvent.click(btn);

        // the assertion is it should not have text 'Make Coffee' in the todo list
        expect(screen.getByTestId('todo')).not.toHaveTextContent('Make coffee');
    });

    test('should move item to done after click',() => {
        render(<App />)

        // get button which has 'Make coffee' text on it
        const btn = screen.getByText('Make coffee');
        fireEvent.click(btn);

         // the assertion is it should not have text 'Make Coffee' in the done list
        expect(screen.getByTestId('done')).toHaveTextContent('Make coffee');
    });

    test('should delete item from list after click inside done',() => {
        render(<App />)

        // get button which has 'Read Books' text on it
        const btn = screen.getByText('Read books');
        fireEvent.click(btn);

         // the assertion is it should not have text 'Read Books' in the done list
         // queryBy* is used since the expected node would be null and not return an error
         // for reference - https://www.designcise.com/web/tutorial/whats-the-difference-between-findby-getby-and-queryby-in-react-testing-library
        expect(screen.queryByText('Read books')).toBeFalsy();
    })
})