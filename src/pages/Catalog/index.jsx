import { useState } from "react";
import listaProdutos from "../../data/produtos";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import styles from "./Catalog.module.css"

function Catalog() {
    const [busca, setBusca] = useState("");

    const filtrados = listaProdutos.filter((p) =>
        p.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <section>
            <h2>Este é o catalogo</h2>

            <input
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquise algo..."
            />

            <div className={styles.products}>
                {filtrados.map((p) => (
                    <Link key={p.id} className={styles.product} to={`/Catalog/${p.id}`}>
                        <Card
                            id={p.id}
                            title={p.nome}
                            price={p.preco}
                            description={p.desc}
                            img={p.imagem}
                            stock={p.em_estoque}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Catalog;