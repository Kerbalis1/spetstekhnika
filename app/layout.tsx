import type { Metadata, Viewport } from 'next';
import './globals.css';
import { assetPath } from './assets';
import { equipmentPhotos } from './photos';
const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kerbalis1.github.io/spetstekhnika/';
export const metadata: Metadata = {
  metadataBase: new URL(url),
  icons: { icon: assetPath('/icon.svg') },
  title: 'SPETSTEKHNIKA — продажа спецтехники и транспорта',
  description: 'Каталог по предоставленному прайсу: тягачи, самосвалы, тралы, шторные полуприцепы, автобетоносмесители, КМУ и автомобили. Цены продажи из прайса, подбор комплектации и заявка на покупку. Проект ELEMENT DIGITAL.',
  keywords: ['продажа спецтехники', 'купить тягач', 'купить самосвал', 'продажа тралов', 'шторные полуприцепы купить', 'продажа автобетоносмесителей', 'купить КМУ', 'продажа транспорта'],
  alternates: { canonical: url },
  openGraph: { title: 'Спецтехника и транспорт в продаже', description: 'SPETSTEKHNIKA — продажа техники: цены из прайса и расчёт покупки. Проект ELEMENT DIGITAL.', type: 'website', locale: 'ru_RU', url, images: [{ url: equipmentPhotos[8].imageUrl, alt: 'Тягач SHACMAN X6000 4×2' }] },
  twitter: { card: 'summary_large_image' },
  robots: { index: false, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#171918' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
