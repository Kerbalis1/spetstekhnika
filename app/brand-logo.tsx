import Image from 'next/image';
import { assetPath } from './assets';

export function BrandLogo({ tagline, priority = false }: { tagline: string; priority?: boolean }) {
  return <>
    <Image className="brand-grader" src={assetPath('/images/spetstekhnika-grader.webp')} alt="" aria-hidden="true" width={384} height={226} priority={priority}/>
    <span className="brand-wordmark">СПЕЦТЕХНИКА<small>{tagline}</small></span>
  </>;
}
