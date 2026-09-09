jest.mock('react-router-dom', () => {
  const mockReact = require('react'); 
  return {
    Link: ({ children, to, ...props }) => mockReact.createElement('a', { href: to, ...props }, children),
    useNavigate: () => jest.fn(),
    useLocation: () => ({ pathname: '/' }),
    useParams: () => ({}),
  };
}, { virtual: true });

jest.mock('antd', () => {
  const mockReact = require('react');
  return {
    Button: ({ children, ...props }) => mockReact.createElement('button', props, children),
    Card: ({ children, ...props }) => mockReact.createElement('div', props, children),
    Input: (props) => mockReact.createElement('input', props),
  };
}, { virtual: true });

global.IS_REACT_ACT_ENVIRONMENT = true;
