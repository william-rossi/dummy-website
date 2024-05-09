'use client'


import Section1 from "@/components/Homepage/Section1/Section1";
import Section2 from "@/components/Homepage/Section2/Section2";
import ModalWebsiteConfig from "@/components/Modal/ModalWebsiteConfig/ModalWebsiteConfig";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    
  }, [])
  
  return (
    <>
      <ModalWebsiteConfig />
      <Section1 />
      <Section2 />
    </>
  )
}
