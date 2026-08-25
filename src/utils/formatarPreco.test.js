import { formatarPreco } from "./formatarPreco";

describe ("", () => {
    test("formata um valor comum no padrão brasileiro", () => {
        const resultado = formatarPreco(99.9);
        expect(resultado).tobe("R$ 99,90");
    });

    test("sempre mostra duas casas decimais", () => {
        expect(formatarPreco(19)).tobe("R$ 19,00");
        expect(formatarPreco(1234.5)).tobe("R$ 1234,50")
    });

    test("usa virgula, e não ponto, como separador", () => {
        expect(formatarPreco(10.25)).not.toContain(".")
        expect(formatarPreco(10.25)).toContain(",")
    });
})