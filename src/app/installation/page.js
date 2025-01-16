'use client';
import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function InstallationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasScrolled = searchParams.get('scrolled');

  useEffect(() => {
    if (!hasScrolled) {
      // Only redirect and scroll if we haven't done it yet
      router.replace('/?scrolled=true');
      
      const timer = setTimeout(() => {
        const element = document.getElementById('installationguide');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [router, hasScrolled]);

  // Return null as this is just a routing handler
  return null;
}

export default function InstallationPage() {
  return (
    <Suspense fallback={null}>
      <InstallationContent />
    </Suspense>
  );
}