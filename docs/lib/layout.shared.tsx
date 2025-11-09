import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="WebAwesome Laminar Logo"
            width={24}
            height={24}
          />
          <span>WebAwesome Laminar</span>
        </div>
      ),
    },
  };
}
