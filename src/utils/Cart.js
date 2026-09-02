export function adicionarProduto(itens, produto) {
	const itemExistente = itens.find((item) => item.id === produto.id);

	if (itemExistente) {
		return itens.map((item) => (
			item.id === produto.id
				? { ...item, quantidade: (item.quantidade || 0) + 1 }
				: item
		));
	}

	return [...itens, { ...produto, quantidade: 1 }];
}

export function removerProduto(itens, id) {
	return itens.filter((item) => item.id !== id);
}

export function aumentarQuantidade(itens, id) {
	return itens.map((item) => (
		item.id === id
			? { ...item, quantidade: (item.quantidade || 0) + 1 }
			: item
	));
}

export function diminuirQuantidade(itens, id) {
	return itens.reduce((itensAtualizados, item) => {
		if (item.id !== id) return [...itensAtualizados, item];

		const quantidade = (item.quantidade || 0) - 1;
		return quantidade > 0
			? [...itensAtualizados, { ...item, quantidade }]
			: itensAtualizados;
	}, []);
}

export function contarItens(itens) {
	return itens.reduce((total, item) => total + (item.quantidade || 0), 0);
}

export function calcularTotal(itens) {
	return itens.reduce(
		(total, item) => total + item.preco * (item.quantidade || 0),
		0
	);
}
