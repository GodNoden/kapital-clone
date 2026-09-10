import { t, type Lang } from '../i18n';

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

// Helper para obtener texto con fallback a vacío
const getText = (lang: Lang, key: string): string => {
    const value = t(lang, key);
    return value === key ? '' : value;
};

// Helper para obtener arrays de intro (puede tener 1 o 2 párrafos)
const getIntro = (lang: Lang, cardIndex: number): string[] => {
    const intros: string[] = [];
    let i = 0;
    while (true) {
        const key = `ecosystem.cards.${cardIndex}.popup.intro.${i}`;
        const value = t(lang, key);
        if (value === key) break;
        intros.push(value);
        i++;
    }
    return intros;
};

// Helper para obtener arrays de bullets
const getBullets = (lang: Lang, cardIndex: number): string[] => {
    const bullets: string[] = [];
    let i = 0;
    while (true) {
        const key = `ecosystem.cards.${cardIndex}.popup.bullets.${i}`;
        const value = t(lang, key);
        if (value === key) break;
        bullets.push(value);
        i++;
    }
    return bullets;
};

export function getEcosystemCards(lang: Lang): EcosystemCard[] {
    return [
        {
            eyebrow: getText(lang, 'ecosystem.cards.0.eyebrow'),
            title: getText(lang, 'ecosystem.cards.0.title'),
            image: '/ecosystem/card-fx.webp',
            popup: {
                heading: getText(lang, 'ecosystem.cards.0.popup.heading'),
                intro: getIntro(lang, 0),
                bulletsHeading: getText(lang, 'ecosystem.cards.0.popup.bulletsHeading') || undefined,
                bullets: getBullets(lang, 0),
                closing: getText(lang, 'ecosystem.cards.0.popup.closing') || undefined,
                cta: {
                    label: getText(lang, 'ecosystem.cards.0.popup.cta'),
                    href: '/divisas/cambio-divisas-en-efectivo-personas',
                },
            },
        },
        {
            eyebrow: getText(lang, 'ecosystem.cards.1.eyebrow'),
            title: getText(lang, 'ecosystem.cards.1.title'),
            image: '/ecosystem/card-spid.webp',
            popup: {
                heading: getText(lang, 'ecosystem.cards.1.popup.heading'),
                intro: getIntro(lang, 1),
                bulletsHeading: getText(lang, 'ecosystem.cards.1.popup.bulletsHeading') || undefined,
                bullets: getBullets(lang, 1),
                closing: getText(lang, 'ecosystem.cards.1.popup.closing') || undefined,
            },
        },
        {
            eyebrow: getText(lang, 'ecosystem.cards.2.eyebrow'),
            title: getText(lang, 'ecosystem.cards.2.title'),
            image: '/ecosystem/card-flex.webp',
            popup: {
                heading: getText(lang, 'ecosystem.cards.2.popup.heading'),
                intro: getIntro(lang, 2),
                bulletsHeading: getText(lang, 'ecosystem.cards.2.popup.bulletsHeading') || undefined,
                bullets: getBullets(lang, 2),
                closing: getText(lang, 'ecosystem.cards.2.popup.closing') || undefined,
                cta: {
                    label: getText(lang, 'ecosystem.cards.2.popup.cta'),
                    href: '/credito/credito-flex',
                },
            },
        },
        {
            eyebrow: getText(lang, 'ecosystem.cards.3.eyebrow'),
            title: getText(lang, 'ecosystem.cards.3.title'),
            image: '/ecosystem/card-factoraje.webp',
            popup: {
                heading: getText(lang, 'ecosystem.cards.3.popup.heading'),
                intro: getIntro(lang, 3),
                bulletsHeading: getText(lang, 'ecosystem.cards.3.popup.bulletsHeading') || undefined,
                bullets: getBullets(lang, 3),
                closing: getText(lang, 'ecosystem.cards.3.popup.closing') || undefined,
                cta: {
                    label: getText(lang, 'ecosystem.cards.3.popup.cta'),
                    href: '/credito/factoraje',
                },
            },
        },
        {
            eyebrow: getText(lang, 'ecosystem.cards.4.eyebrow'),
            title: getText(lang, 'ecosystem.cards.4.title'),
            image: '/ecosystem/card-pyme.webp',
            popup: {
                heading: getText(lang, 'ecosystem.cards.4.popup.heading'),
                intro: getIntro(lang, 4),
                bulletsHeading: getText(lang, 'ecosystem.cards.4.popup.bulletsHeading') || undefined,
                bullets: getBullets(lang, 4),
                closing: getText(lang, 'ecosystem.cards.4.popup.closing') || undefined,
                cta: {
                    label: getText(lang, 'ecosystem.cards.4.popup.cta'),
                    href: '/credito/credito-pyme',
                },
            },
        },
        {
            eyebrow: getText(lang, 'ecosystem.cards.5.eyebrow'),
            title: getText(lang, 'ecosystem.cards.5.title'),
            image: '/ecosystem/card-empresarial.webp',
            popup: {
                heading: getText(lang, 'ecosystem.cards.5.popup.heading'),
                intro: getIntro(lang, 5),
                bulletsHeading: getText(lang, 'ecosystem.cards.5.popup.bulletsHeading') || undefined,
                bullets: getBullets(lang, 5),
                closing: getText(lang, 'ecosystem.cards.5.popup.closing') || undefined,
                cta: {
                    label: getText(lang, 'ecosystem.cards.5.popup.cta'),
                    href: '/credito/credito-empresarial',
                },
            },
        },
        {
            eyebrow: getText(lang, 'ecosystem.cards.6.eyebrow'),
            title: getText(lang, 'ecosystem.cards.6.title'),
            image: '/ecosystem/card-cedes.webp',
            popup: {
                heading: getText(lang, 'ecosystem.cards.6.popup.heading'),
                intro: getIntro(lang, 6),
                bulletsHeading: getText(lang, 'ecosystem.cards.6.popup.bulletsHeading') || undefined,
                bullets: getBullets(lang, 6),
                closing: getText(lang, 'ecosystem.cards.6.popup.closing') || undefined,
                cta: {
                    label: getText(lang, 'ecosystem.cards.6.popup.cta'),
                    href: '/inversiones/cedes-empresarial',
                },
            },
        },
        {
            eyebrow: getText(lang, 'ecosystem.cards.7.eyebrow'),
            title: getText(lang, 'ecosystem.cards.7.title'),
            image: '/ecosystem/card-banca.webp',
            popup: {
                heading: getText(lang, 'ecosystem.cards.7.popup.heading'),
                intro: getIntro(lang, 7),
                bulletsHeading: getText(lang, 'ecosystem.cards.7.popup.bulletsHeading') || undefined,
                bullets: getBullets(lang, 7),
                closing: getText(lang, 'ecosystem.cards.7.popup.closing') || undefined,
                cta: {
                    label: getText(lang, 'ecosystem.cards.7.popup.cta'),
                    href: '/servicios/banca-digital-empresas',
                },
            },
        },
    ];
}