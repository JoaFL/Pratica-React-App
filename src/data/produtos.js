const listaProdutos = [
    {
        id: 1,
        nome: 'Mouse Gamer',
        preco: 150.00,
        desc: 'Mouse gamer com iluminação RGB',
        em_estoque: true,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rVKSH-Wt0aYnXt4TOlS_NqnyzfKCxnL62A&s'
    },

    {
        id: 2,
        nome: 'Teclado Gamer',
        preco: 200.00,
        desc: 'Teclado gamer mecânico',
        em_estoque: true,
        imagem: 'https://b2bleonorashop.vtexassets.com/arquivos/ids/157992-800-auto?v=637698325339870000&width=800&height=auto&aspect=true'
    },

    {
        id: 3,
        nome: 'Monitor Gamer',
        preco: 500.00,
        desc: 'Monitor gamer de 24 polegadas',
        em_estoque: true,
        imagem: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/jpezkcdl/file.png'
    },

    {
        id: 4,
        nome: 'Headset Gamer',
        preco: 300.00,
        desc: 'Headset gamer com microfone',
        em_estoque: false,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kb9C5APAPatNMpveRY0spwY1HP494Mq2rA&s'
    },

    {
        id: 5,
        nome: 'Cadeira Gamer',
        preco: 750.00,
        desc: 'Cadeira ergonômica para longas sessões de jogo',
        em_estoque: true,
        imagem: 'https://static-b2.wingbus.com.br/poltronas-cadeiras-gamer-trust-atomic-gaming-chair-full-rgb-41102030100-1.jpg'
    },

    {
        id: 6,
        nome: 'Placa de Vídeo',
        preco: 2200.00,
        desc: 'Placa de vídeo para jogos em alta resolução',
        em_estoque: true,
        imagem: 'https://cdn.awsli.com.br/300x300/686/686091/produto/77186592/08c5fc04f9.jpg'
    },

    {
        id: 7,
        nome: 'SSD NVMe',
        preco: 320.00,
        desc: 'SSD NVMe 1TB para carregamento rápido de jogos',
        em_estoque: true,
        imagem: 'https://images.kabum.com.br/produtos/fotos/356323/ssd-samsung-980-pro-1tb-nvme-m-2-pcie-gen4_1696016298_gg.jpg'
    },

    {
        id: 8,
        nome: 'Fonte ATX',
        preco: 450.00,
        desc: 'Fonte modular 650W com certificação 80 Plus Gold',
        em_estoque: false,
        imagem: 'https://www.kabum.com.br/produtos/fotos/221116/fonte-gamer-corsair-rm650-650w-80-plus-gold-pt-br_1691963611_gg.jpg'
    },

    {
        id: 9,
        nome: 'Webcam Full HD',
        preco: 220.00,
        desc: 'Webcam 1080p com microfone integrado',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Webcam+Full+HD'
    },

    {
        id: 10,
        nome: 'Microfone Condensador',
        preco: 350.00,
        desc: 'Microfone condensador USB para streaming',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Microfone+Condensador'
    },

    {
        id: 11,
        nome: 'Mouse Pad XL',
        preco: 120.00,
        desc: 'Mouse pad grande com base antiderrapante',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Mouse+Pad+XL'
    },

    {
        id: 12,
        nome: 'Cabo HDMI 2.1',
        preco: 80.00,
        desc: 'Cabo HDMI 2.1 para resolução 4K e 120Hz',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Cabo+HDMI+2.1'
    },

    {
        id: 13,
        nome: 'Hub USB-C',
        preco: 180.00,
        desc: 'Hub USB-C com múltiplas portas e leitor de cartão',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Hub+USB-C'
    },

    {
        id: 14,
        nome: 'Estabilizador de Voltagem',
        preco: 260.00,
        desc: 'Estabilizador com proteção contra surtos',
        em_estoque: false,
        imagem: 'https://via.placeholder.com/300?text=Estabilizador+de+Voltagem'
    },

    {
        id: 15,
        nome: 'Placa de Captura',
        preco: 890.00,
        desc: 'Placa de captura para streaming em 4K',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Placa+de+Captura'
    },

    {
        id: 16,
        nome: 'Cadeira de Escritório',
        preco: 420.00,
        desc: 'Cadeira de escritório com apoio lombar',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Cadeira+de+Escritorio'
    },

    {
        id: 17,
        nome: 'Notebook Gamer',
        preco: 5500.00,
        desc: 'Notebook gamer com placa de vídeo dedicada',
        em_estoque: false,
        imagem: 'https://via.placeholder.com/300?text=Notebook+Gamer'
    },

    {
        id: 18,
        nome: 'HD Externo 2TB',
        preco: 420.00,
        desc: 'HD externo portátil com 2TB de capacidade',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=HD+Externo+2TB'
    },

    {
        id: 19,
        nome: 'Suporte para Monitor',
        preco: 180.00,
        desc: 'Suporte articulado para monitor até 32 polegadas',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Suporte+para+Monitor'
    },

    {
        id: 20,
        nome: 'Hub RGB',
        preco: 130.00,
        desc: 'Controlador RGB para ventoinhas e fitas de LED',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Hub+RGB'
    },

    {
        id: 21,
        nome: 'Cooler para Gabinete',
        preco: 90.00,
        desc: 'Ventoinha PWM de 120mm com LED',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Cooler+para+Gabinete'
    },

    {
        id: 22,
        nome: 'Placa-Mãe ATX',
        preco: 950.00,
        desc: 'Placa-mãe ATX para processadores modernos',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Placa-Mae+ATX'
    },

    {
        id: 23,
        nome: 'Processador Intel i7',
        preco: 1800.00,
        desc: 'Processador Intel Core i7 de 12ª geração',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Intel+i7'
    },

    {
        id: 24,
        nome: 'Processador AMD Ryzen 7',
        preco: 1600.00,
        desc: 'Processador AMD Ryzen 7 para alto desempenho',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Ryzen+7'
    },

    {
        id: 25,
        nome: 'Memória RAM 16GB',
        preco: 390.00,
        desc: 'Kit memória RAM DDR4 16GB 3200MHz',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=RAM+16GB'
    },

    {
        id: 26,
        nome: 'Gabinete Gamer',
        preco: 600.00,
        desc: 'Gabinete com vidro temperado e iluminação RGB',
        em_estoque: false,
        imagem: 'https://via.placeholder.com/300?text=Gabinete+Gamer'
    },

    {
        id: 27,
        nome: 'Webcam 4K',
        preco: 550.00,
        desc: 'Webcam 4K para conferências e streaming',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Webcam+4K'
    },

    {
        id: 28,
        nome: 'Adaptador USB Wireless',
        preco: 70.00,
        desc: 'Adaptador USB para rede wireless 802.11ac',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Adaptador+USB+Wireless'
    },

    {
        id: 29,
        nome: 'Suporte para Headset',
        preco: 60.00,
        desc: 'Suporte de metal para organizar headsets',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Suporte+para+Headset'
    },

    {
        id: 30,
        nome: 'Cadeira Gamer PRO',
        preco: 980.00,
        desc: 'Cadeira gamer premium com reclinação total',
        em_estoque: false,
        imagem: 'https://via.placeholder.com/300?text=Cadeira+Gamer+PRO'
    },

    {
        id: 31,
        nome: 'Sistema de Som 2.1',
        preco: 420.00,
        desc: 'Kit de som 2.1 com subwoofer potente',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Som+2.1'
    },

    {
        id: 32,
        nome: 'SSD SATA 500GB',
        preco: 260.00,
        desc: 'SSD SATA de 500GB para desempenho confiável',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=SSD+500GB'
    },

    {
        id: 33,
        nome: 'Mouse Sem Fio',
        preco: 130.00,
        desc: 'Mouse sem fio com sensor óptico de alta precisão',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Mouse+Sem+Fio'
    },

    {
        id: 34,
        nome: 'Teclado Wireless',
        preco: 230.00,
        desc: 'Teclado sem fio compacto com teclado numérico',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Teclado+Wireless'
    },

    {
        id: 35,
        nome: 'Teclado Numérico',
        preco: 75.00,
        desc: 'Teclado numérico independente USB',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Teclado+Numerico'
    },

    {
        id: 36,
        nome: 'Base Refrigerada',
        preco: 150.00,
        desc: 'Base refrigerada para notebook com 2 ventoinhas',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Base+Refrigerada'
    },

    {
        id: 37,
        nome: 'Controle para Console',
        preco: 280.00,
        desc: 'Controle sem fio compatível com games e PC',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Controle+para+Console'
    },

    {
        id: 38,
        nome: 'Carregador USB-C',
        preco: 110.00,
        desc: 'Carregador rápido USB-C 65W',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Carregador+USB-C'
    },

    {
        id: 39,
        nome: 'Placa de Som Externa',
        preco: 310.00,
        desc: 'Placa de som externa USB para áudio profissional',
        em_estoque: false,
        imagem: 'https://via.placeholder.com/300?text=Placa+de+Som+Externa'
    },

    {
        id: 40,
        nome: 'Mesa para Notebook',
        preco: 190.00,
        desc: 'Mesa portátil ajustável para notebook',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Mesa+para+Notebook'
    },

    {
        id: 41,
        nome: 'Kit de Limpeza',
        preco: 55.00,
        desc: 'Kit com pincel, spray e pano para limpeza de eletrônicos',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Kit+de+Limpeza'
    },

    {
        id: 42,
        nome: 'Bateria Powerbank',
        preco: 170.00,
        desc: 'Powerbank 10.000mAh com saída USB e USB-C',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Powerbank'
    },

    {
        id: 43,
        nome: 'Microfone USB',
        preco: 260.00,
        desc: 'Microfone USB plug and play para gravações',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Microfone+USB'
    },

    {
        id: 44,
        nome: 'SSD Externo 1TB',
        preco: 520.00,
        desc: 'SSD externo compacto de 1TB',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=SSD+Externo+1TB'
    },

    {
        id: 45,
        nome: 'Rack para Cabeamento',
        preco: 140.00,
        desc: 'Organizador de cabos para mesa gamer',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Rack+para+Cabos'
    },

    {
        id: 46,
        nome: 'Fone de Ouvido In-Ear',
        preco: 90.00,
        desc: 'Fone in-ear com cancelamento de ruído',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Fone+In-Ear'
    },

    {
        id: 47,
        nome: 'Leitor de Cartão',
        preco: 65.00,
        desc: 'Leitor de cartão USB com suporte a SD e microSD',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Leitor+de+Cartao'
    },

    {
        id: 48,
        nome: 'Placa de Rede Wi-Fi',
        preco: 200.00,
        desc: 'Placa de rede Wi-Fi 6 interna PCIe',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Wi-Fi+6+PCIe'
    },

    {
        id: 49,
        nome: 'Adaptador Bluetooth',
        preco: 85.00,
        desc: 'Adaptador Bluetooth USB para áudio e periféricos',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Adaptador+Bluetooth'
    },

    {
        id: 50,
        nome: 'Monitor Curvo',
        preco: 1600.00,
        desc: 'Monitor curvo de 27 polegadas para imersão total',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Monitor+Curvo'
    },

    {
        id: 51,
        nome: 'Tapete de Mesa',
        preco: 110.00,
        desc: 'Tapete de mesa com superfície dupla face',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Tapete+de+Mesa'
    },

    {
        id: 52,
        nome: 'Câmera de Segurança',
        preco: 390.00,
        desc: 'Câmera de segurança com visão noturna',
        em_estoque: false,
        imagem: 'https://via.placeholder.com/300?text=Camera+de+Seguranca'
    },

    {
        id: 53,
        nome: 'Fonte SFX',
        preco: 520.00,
        desc: 'Fonte SFX compacta para gabinetes menores',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Fonte+SFX'
    },

    {
        id: 54,
        nome: 'Ventoinha ARGB',
        preco: 140.00,
        desc: 'Ventoinha ARGB para gabinetes e radiadores',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Ventoinha+ARGB'
    },

    {
        id: 55,
        nome: 'Memória RAM 32GB',
        preco: 780.00,
        desc: 'Kit memória RAM DDR4 32GB 3600MHz',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=RAM+32GB'
    },

    {
        id: 56,
        nome: 'Combo Gamer',
        preco: 950.00,
        desc: 'Combo teclado, mouse e mouse pad gamer',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Combo+Gamer'
    },

    {
        id: 57,
        nome: 'Base para Controle',
        preco: 70.00,
        desc: 'Base para apoio de controle e fones',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Base+para+Controle'
    },

    {
        id: 58,
        nome: 'Filtro de Linha',
        preco: 140.00,
        desc: 'Filtro de linha com proteção contra surtos e 6 tomadas',
        em_estoque: true,
        imagem: 'https://via.placeholder.com/300?text=Filtro+de+Linha'
    }
]

export default listaProdutos;