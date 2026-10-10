'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Truck } from 'lucide-react';

/** Real source photographs only. Never substitute a generated vehicle on failure. */
export function EquipmentPhoto({ src, alt, sizes, priority = false, className = '', position }: {
  src: string; alt: string; sizes: string; priority?: boolean; className?: string; position?: string;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  if (failedSrc === src) return <div className="photo-unavailable" role="img" aria-label={alt}>
    <Truck size={30} strokeWidth={1.3}/><span>Фотография временно недоступна</span>
  </div>;
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority}
    className={className} style={position ? { objectPosition: position } : undefined} referrerPolicy="no-referrer" onError={() => setFailedSrc(src)}/>;
}
