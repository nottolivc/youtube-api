import { render } from '@testing-library/react';
//import { Header } from './components/Header';

jest.mock('react-router-dom');
describe('<Header />', () => {

  it('renders the basic <Header />', () => {
    const { container } = render('<Header />');
    expect(container.firstChild).toMatchSnapshot();
  });
});