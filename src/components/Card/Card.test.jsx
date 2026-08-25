import { render, screen } from "@testing-library/react"
import Card from "../Card"

test("mostra o nome do produto", () => {
    render (
        <Card title={"mouse Gamer"} price={50.00} />
    );

    expect(screen.getByText("mouse Gamer")).toBeInTheDocument();
})