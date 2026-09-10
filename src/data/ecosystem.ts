export interface EcosystemPopup {
    heading: string;
    intro: string[];
    bulletsHeading?: string;
    bullets?: string[];
    closing?: string;
    cta?: { label: string; href: string };
    images?: { src: string; alt: string }[];
}

export interface EcosystemCard {
    eyebrow: string;
    title: string;
    image: string;
    popup: EcosystemPopup;
}

export const ecosystemCards: EcosystemCard[] = [
    {
        eyebrow: 'Kapital FX',
        title: 'Haz negocios con el mundo, el mismo día',
        image: '/ecosystem/card-fx.webp',
        popup: {
            heading: 'Conecta tu empresa con el mundo',
            intro: ['Valentía para hacer negocios sin fronteras. Kapital FX te da el ecosistema para operar en otras monedas, pagar proveedores internacionales y moverte al ritmo del mercado global.'],
            bulletsHeading: 'Con Kapital FX puedes:',
            bullets: [
                'Compra y transfiere divisas con control total',
                'Ejecución rápida y 100% digital',
                'Precios competitivos y transparentes, sin sorpresas',
            ],
            closing: 'El ecosistema financiero para empresas que se atreven a operar fuera de lo conocido. Mueve dinero entre países con claridad, velocidad y respaldo experto.',
            cta: { label: 'Conoce más', href: '/divisas/cambio-divisas-en-efectivo-personas' },
        },
    },
    {
        eyebrow: 'SPID Kapital',
        title: 'Envía dólares a cualquier empresa, en segundos',
        image: '/ecosystem/card-spid.webp',
        popup: {
            heading: 'Envía dólares a cualquier empresa, en segundos',
            intro: ['SPID te permite mover dólares entre empresas en México al instante, sin conversiones ni bancos corresponsales.'],
            bulletsHeading: 'Con SPID Kapital puedes:',
            bullets: [
                'Transferir dólares a cualquier banco autorizado en México',
                'Pagar proveedores en USD sin convertir a pesos',
                'Operar el mismo día, en horario bancario',
            ],
            closing: 'Todo lo que necesitas para operar en dólares, en un solo lugar y sin salir de México.',
        },
    },
    {
        eyebrow: 'Crédito FLEX',
        title: 'Paga a tu proveedor hoy y negocia a tu favor',
        image: '/ecosystem/card-flex.webp',
        popup: {
            heading: 'Agiliza tus pagos sin afectar tu flujo',
            intro: [
                'Una línea de crédito revolvente para pagar a tus proveedores sin comprometer tu liquidez.',
                'Kapital Bank paga por ti al instante y tú pagas a 1, 2, 3, 6, 9 o 12 meses.',
            ],
            bulletsHeading: 'Con Crédito FLEX puedes:',
            bullets: [
                'Negociar descuentos por pronto pago',
                'Tener inventario siempre disponible',
                'No detener tu operación por falta de flujo',
            ],
            closing: 'Extiende el plazo de tus pagos sin afectar tu flujo de caja y además, al pagar siempre a tiempo, fortaleces tu poder de negociación con proveedores.',
            cta: { label: 'Quiero mi Crédito FLEX', href: '/credito/credito-flex' },
        },
    },
    {
        eyebrow: 'Factoraje Kapital',
        title: 'Cobra hoy lo que ya vendiste',
        image: '/ecosystem/card-factoraje.webp',
        popup: {
            heading: 'No esperes 90 días, cobra tus facturas hoy',
            intro: [
                'Anticipa el cobro de facturas y conviértelas en dinero disponible hoy.',
                'Así mantienes tu operación activa, con flujo constante y sin depender del calendario de pago de tus clientes.',
            ],
            bulletsHeading: 'Con Factoraje puedes:',
            bullets: [
                'Recibir liquidez inmediata para tu empresa.',
                'Reducir el riesgo de impagos.',
                'Cobrar varias facturas a la vez.',
            ],
            closing: 'Haz que tu empresa crezca a su ritmo, no al de tus clientes. Cobra hoy lo que ya vendiste.',
            cta: { label: 'Cobrar mis facturas', href: '/credito/factoraje' },
        },
    },
    {
        eyebrow: 'Crédito PyME',
        title: 'Crece sin límites, ni preocupaciones',
        image: '/ecosystem/card-pyme.webp',
        popup: {
            heading: 'Financiamiento simple y a tu medida',
            intro: [
                'Una solución ágil y accesible para pequeñas y medianas empresas que necesitan capital para seguir operando, crecer o salir de un apuro.',
                'Solicita desde $50,000 MXN para pagar nómina, comprar inventario o invertir en tu negocio.',
            ],
            bulletsHeading: 'Con Crédito PyME puedes:',
            bullets: [
                'Usa el capital libremente, según las prioridades de tu negocio. Pídelo una sola vez y úsalo cuando lo necesites.',
                'Una vez aprobado, tu dinero llega en 24 horas.',
            ],
            closing: 'Financia lo esencial y dedícate a lo que importa: hacer crecer tu negocio.',
            cta: { label: 'Financiar mi empresa', href: '/credito/credito-pyme' },
        },
    },
    {
        eyebrow: 'Crédito Empresarial',
        title: 'Expande tu negocio con facilidad',
        image: '/ecosystem/card-empresarial.webp',
        popup: {
            heading: 'No más pausas: financia tu decisión hoy',
            intro: [
                'Una solución de financiamiento hecha para negocios que requieren fortalecer su operación, invertir o expandirse.',
                'Obtén hasta $50 millones de pesos para impulsar tu proyecto y llevar tu empresa al siguiente nivel.',
            ],
            bulletsHeading: 'Con Crédito Empresarial puedes:',
            bullets: [
                'Usar el capital para lo que tu empresa necesite',
                'Acceder a condiciones claras',
                'Fortalecer tus finanzas con pagos planificados',
            ],
            closing: 'Obtén el capital que tu empresa necesita, cuando lo necesita.',
            cta: { label: 'Financiar mi empresa', href: '/credito/credito-empresarial' },
        },
    },
    {
        eyebrow: 'CEDES empresarial',
        title: 'Haz que tu dinero trabaje por ti',
        image: '/ecosystem/card-cedes.webp',
        popup: {
            heading: 'Invierte con estrategia, gana cada mes',
            intro: [
                'Una inversión pensada para empresas que quieren rentabilidad sin perder liquidez.',
                'Desde $10,000 MXN, tú eliges el plazo y recibes rendimientos fijos cada mes.',
            ],
            bulletsHeading: 'Con CEDES puedes:',
            bullets: [
                'Recibir intereses cada mes, sin esperar al final del plazo.',
                'Invertir por 90, 120, 180, 240 o hasta 360 días.',
                'Gana hasta 9.00%* de rendimiento a 360 días sin cláusulas ocultas.',
            ],
            closing: 'Haz que tu liquidez genere ingresos sin pausas. Una inversión simple, rentable y a tu ritmo.',
            cta: { label: 'Quiero invertir en CEDES', href: '/inversiones/cedes-empresarial' },
        },
    },
    {
        eyebrow: 'Banca Kapital',
        title: 'Toda tu operación, en un solo lugar',
        image: '/ecosystem/card-banca.webp',
        popup: {
            heading: 'Gestiona tu negocio desde un solo lugar',
            intro: [
                'La plataforma digital que te permite administrar las finanzas y operar tu empresa en tiempo real: cuentas, pagos, ingresos, egresos y proveedores.',
                'Obtén la visibilidad que necesitas. Máxima claridad para mejores decisiones.',
            ],
            bulletsHeading: 'Con la Banca puedes:',
            bullets: [
                'Consultar y gestionar tus cuentas empresariales.',
                'Controlar tus ingresos, egresos y facturas.',
                'Automatizar pagos frecuentes y evitar retrasos.',
            ],
            closing: 'Gestiona tu empresa con la claridad que siempre necesitaste.',
            cta: { label: 'Conoce más sobre la Banca empresarial', href: '/servicios/banca-digital-empresas' },
        },
    },
];