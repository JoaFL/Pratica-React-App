const listaProdutos = [
    {
        id: 1,
        nome: 'Mouse Gamer',
        preco: 150.00,
        desc: 'Mouse gamer com iluminação RGB',
        em_estoque: true,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rVKSH-Wt0aYnXt4TOlS_NqnyzfKCxnL62A&s',
        categoria: 'periféricos'
    },

    {
        id: 2,
        nome: 'Teclado Gamer',
        preco: 200.00,
        desc: 'Teclado gamer mecânico',
        em_estoque: true,
        imagem: 'https://b2bleonorashop.vtexassets.com/arquivos/ids/157992-800-auto?v=637698325339870000&width=800&height=auto&aspect=true',
        categoria: 'periféricos'
    },

    {
        id: 3,
        nome: 'Monitor Gamer',
        preco: 500.00,
        desc: 'Monitor gamer de 24 polegadas',
        em_estoque: true,
        imagem: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/jpezkcdl/file.png',
        categoria: 'monitores'
    },

    {
        id: 4,
        nome: 'Headset Gamer',
        preco: 300.00,
        desc: 'Headset gamer com microfone',
        em_estoque: false,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kb9C5APAPatNMpveRY0spwY1HP494Mq2rA&s',
        categoria: 'periféricos'
    },

    {
        id: 5,
        nome: 'Cadeira Gamer',
        preco: 750.00,
        desc: 'Cadeira ergonômica para longas sessões de jogo',
        em_estoque: true,
        imagem: 'https://img.kalunga.com.br/fotosdeprodutos/315744z.jpg',
        categoria: 'cadeiras'
    },

    {
        id: 6,
        nome: 'Placa de Vídeo',
        preco: 2200.00,
        desc: 'Placa de vídeo para jogos em alta resolução',
        em_estoque: true,
        imagem: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/oganqsig/file.png',
        categoria: 'hardware'
    },

    {
        id: 7,
        nome: 'SSD NVMe',
        preco: 320.00,
        desc: 'SSD NVMe 1TB para carregamento rápido de jogos',
        em_estoque: true,
        imagem: 'https://images.tcdn.com.br/img/img_prod/1268702/ssd_crucial_p2_1tb_3d_nand_nvme_pcie_m_2_ate_2400_mb_s_ct1000p2ssd8_37_1_08c44134fb21d700968d9e28ce7a6e24.jpg',
        categoria: 'armazenamento'
    },

    {
        id: 8,
        nome: 'Fonte ATX',
        preco: 450.00,
        desc: 'Fonte modular 650W com certificação 80 Plus Gold',
        em_estoque: false,
        imagem: 'https://lojaibyte.vteximg.com.br/arquivos/ids/441933-1200-1200/fonte-atx-350w-real-com-cabo-de-forca-bivolt-preto-get-63024-01-min.jpg?v=638923374798230000',
        categoria: 'hardware'
    },

    {
        id: 9,
        nome: 'Webcam Full HD',
        preco: 220.00,
        desc: 'Webcam 1080p com microfone integrado',
        em_estoque: true,
        imagem: 'https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg',
        categoria: 'periféricos'
    },

    {
        id: 10,
        nome: 'Microfone Condensador',
        preco: 350.00,
        desc: 'Microfone condensador USB para streaming',
        em_estoque: true,
        imagem: 'https://m.media-amazon.com/images/I/61+6rw+o9AL.jpg',
        categoria: 'periféricos'
    },

    {
        id: 11,
        nome: 'Mouse Pad XL',
        preco: 120.00,
        desc: 'Mouse pad grande com base antiderrapante',
        em_estoque: true,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQiLryxB-9eVLSyXomJA5Yd-CDTJz7vJVPPw&s',
        categoria: 'acessórios'
    },
    
    {
        id: 12,
        nome: 'Cabo HDMI 2.1',
        preco: 80.00,
        desc: 'Cabo HDMI 2.1 para resolução 4K e 120Hz',
        em_estoque: true,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQA0K89NmkycdhHZIrezKZ3-BHaBhCHkrtQ&s',
        categoria: 'cabos'
    },

    {
        id: 13,
        nome: 'Hub USB-C',
        preco: 180.00,
        desc: 'Hub USB-C com múltiplas portas e leitor de cartão',
        em_estoque: true,
        imagem: 'https://img.kalunga.com.br/fotosdeprodutos/162507z.jpg',
        categoria: 'periféricos'
    },

    {
        id: 14,
        nome: 'Estabilizador de Voltagem',
        preco: 260.00,
        desc: 'Estabilizador com proteção contra surtos',
        em_estoque: false,
        imagem: 'https://s2-techtudo.glbimg.com/XYVlRjWptpm0PJTgCPQeLOI05hY=/0x0:600x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/e/8/flB9JiQwalCS228lQDhA/2012-06-18-os-estabilizadores-sao-equipamentos-criados-para-controlar-a-tensao-provida-pela-rede-seja-em-condicoes-de-subtensao-sobretensao-ou-transientes-foto-divulgacao.jpg',
        categoria: 'energia'
    },

    {
        id: 15,
        nome: 'Placa de Captura',
        preco: 890.00,
        desc: 'Placa de captura para streaming em 4K',
        em_estoque: true,
        imagem: 'https://cdn.awsli.com.br/2500x2500/2696/2696665/produto/300508019/9615138f9c213f264977cce0b6e2bd53-tsaqp36s5d.jpg',
        categoria: 'periféricos'
    },

    {
        id: 16,
        nome: 'Cadeira de Escritório',
        preco: 420.00,
        desc: 'Cadeira de escritório com apoio lombar',
        em_estoque: true,
        imagem: 'https://www.comfy.com.br/media/catalog/product/c/a/cadeira_de_escrito_rio_comfy_ergofull_tela_mesh_preta_base_alumi_nio_brac_o_3d_1.webp',
        categoria: 'cadeiras'
    },

    {
        id: 17,
        nome: 'Notebook Gamer',
        preco: 5500.00,
        desc: 'Notebook gamer com placa de vídeo dedicada',
        em_estoque: false,
        imagem: 'data:image/jpeg;base64,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',
        categoria: 'notebooks'
    },

    {
        id: 18,
        nome: 'HD Externo 2TB',
        preco: 420.00,
        desc: 'HD externo portátil com 2TB de capacidade',
        em_estoque: true,
        imagem: 'https://img.kalunga.com.br/fotosdeprodutos/230009z_3.jpg',
        categoria: 'armazenamento'
    },

    {
        id: 19,
        nome: 'Suporte para Monitor',
        preco: 180.00,
        desc: 'Suporte articulado para monitor até 32 polegadas',
        em_estoque: true,
        imagem: 'https://centralsuportes.cdn.magazord.com.br/img/2023/06/produto/3008/suporte-para-monitor-15-a-34-com-base-de-mesa-t50n-central-suportes-1.jpg?ims=800x800',
        categoria: 'acessórios'
    },

    {
        id: 20,
        nome: 'Hub RGB',
        preco: 130.00,
        desc: 'Controlador RGB para ventoinhas e fitas de LED',
        em_estoque: true,
        imagem: 'https://static.mundomax.com.br/produtos/73888/550/3.jpg',
        categoria: 'RGB'
    },

    {
        id: 21,
        nome: 'Cooler para Gabinete',
        preco: 90.00,
        desc: 'Ventoinha PWM de 120mm com LED',
        em_estoque: true,
        imagem: 'https://mirandacomputacao.jetassets.com.br/produto/45645-principal.png',
        categoria: 'refrigeração'
    },

    {
        id: 22,
        nome: 'Placa-Mãe ATX',
        preco: 950.00,
        desc: 'Placa-mãe ATX para processadores modernos',
        em_estoque: true,
        imagem: 'https://s2-techtudo.glbimg.com/42VAam8xdJxLhVUaS8dHFur7EK4=/0x0:695x669/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/j/A/uhFLcdSbizsgHkxtOj3Q/micro-atx.png',
        categoria: 'hardware'
    },

    {
        id: 23,
        nome: 'Processador Intel i7',
        preco: 1800.00,
        desc: 'Processador Intel Core i7 de 12ª geração',
        em_estoque: true,
        imagem: 'https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/294572',
        categoria: 'processadores'
    },

    {
        id: 24,
        nome: 'Processador AMD Ryzen 7',
        preco: 1600.00,
        desc: 'Processador AMD Ryzen 7 para alto desempenho',
        em_estoque: true,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLp2LR-IoidEv0HbLW3vANLT-AGSkEc2dxOg&s',
        categoria: 'processadores'
    },

    {
        id: 25,
        nome: 'Memória RAM 16GB',
        preco: 390.00,
        desc: 'Kit memória RAM DDR4 16GB 3200MHz',
        em_estoque: true,
        imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/k/f/kf432c16bb1162.jpg',
        categoria: 'memória'
    },
]

export default listaProdutos;