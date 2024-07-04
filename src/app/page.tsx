"use client"
import BusinessShopForm from '@/app/(components)/BusinessForm/BusinessForm';
import { BusinessData } from '@/types/business';
import { ThemeProvider } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function Home() {
  const router = useRouter();
  
  const onSubmitBusinessData = useCallback((data: BusinessData) => {
    localStorage.setItem('businessData', JSON.stringify(data));
    router.push('/preview');
  }, [router]);
  return (
    <ThemeProvider>
      <main>
        {<BusinessShopForm onSubmit={onSubmitBusinessData} />}
      </main>
    </ThemeProvider>
  );
}
