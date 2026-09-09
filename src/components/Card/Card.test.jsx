import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Card from "../Card"

test("mostra o nome do produto", () => {
    render (
        <Card title={"mouse Gamer"} price={50.00} />
    );

    expect(screen.getByText("mouse Gamer")).toBeInTheDocument();
})

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => jest.fn(), 
}));
