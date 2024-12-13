import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //render the component
    const { container } = render(<Main />)

    //search the element and veify your existency
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // build snapchot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('it should render the colors correctly', () => {
    const { container } = render(<Main />)

    //verify if background is correctly
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
