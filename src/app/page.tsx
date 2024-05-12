'use client'

import Divisor from "@/components/Divisor/Divisor";
import EmailAddress from "@/components/EmailAddress/EmailAddress";
import Section1 from "@/components/Homepage/Section1/Section1";
import Section2 from "@/components/Homepage/Section2/Section2";
import Section3 from "@/components/Homepage/Section3/Section3";
import Section4 from "@/components/Homepage/Section4/Section4";
import PoweredBy from "@/components/PoweredBy/PoweredBy";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

  }, [])

  return (
    <>
      <Section1 />
      <PoweredBy />
      <Section2 />
      <Divisor />
      <Section3 />
      <Section4 />
      <Divisor />
      <EmailAddress />
    </>
  )
}
