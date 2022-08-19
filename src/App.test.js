import {render, screen} from '@testing-library/react'
import App from "./App"


describe('TODO',  () => {
    test('should show todo items', () => {
        render(<App />)

        expect(screen.getByText('Make coffee')).toBeVisible()
    })
})