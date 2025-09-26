"use client"

import GallerySection from "@/components/gallery-section"
import { useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/lib/redux/store"
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function GalleryPage() {

  const siteLock = useAppSelector((state: RootState) => state.siteLockSlice);
  if (!siteLock) {
    redirect("/");
  }


  return (
    <div className='h-fit pt-10 bg-background'>
        <GallerySection/>
    </div>
  )
}
