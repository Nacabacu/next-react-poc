"use client";

import { EditorApp } from '@/editor/EditorApp';
import { BusinessData } from "@/types/business";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LoadingProps = {
  isLoadingGoogleApi: boolean;
};

export default function Preview() {
  const [businessData, setBusinessData] = useState<BusinessData>();
  const router = useRouter();
  useEffect(() => {
    const data = localStorage.getItem("businessData");
    if (!data || data === '{}') {
      router.push("/");
      return;
    }
    setBusinessData(JSON.parse(data));
  }, [router]);

  return (
    <>
      {!businessData && <div><h4>กำลังเสกเว็บไซต์.....</h4></div>}
      {businessData && <EditorApp initalData={businessData} />}
    </>
  );
}
