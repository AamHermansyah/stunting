'use client'

import BackButton from '@/components/BackButton'
import FlashScreen from '@/components/core/FlashScreen'
import Article from '@/components/pages/cek-stunting/hasil/Article'
import Chart from '@/components/pages/cek-stunting/hasil/Chart'
import Description from '@/components/pages/cek-stunting/hasil/Description'
import PuskesmasTerdekat from '@/components/pages/cek-stunting/hasil/PuskesmasTerdekat'
import ResultCheck from '@/components/pages/cek-stunting/hasil/ResultCheck'
import useStuntingCheck from '@/stores/stuntingStore'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function HasilPage() {
  const { baby, results } = useStuntingCheck();
  const navigate = useRouter();

  useEffect(() => {
    if (!baby || !results) navigate.push('/cek-stunting');
  }, []);

  if (!baby || !results) return <FlashScreen />

  return (
    <div>
      <BackButton />
      <div className="grid lg:grid-cols-12 gap-10 sm:mt-4">
        <div className="lg:col-span-5">
          <ResultCheck
            data={baby}
            result={results.BBU.result}
            status={results.BBU.status}
          />
        </div>
        <div className="lg:col-span-7">
          <Chart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="md:col-span-2">
          <Description
            status={results.BBU.status}
            result={results.BBU.result}
          />
        </div>
        <div>
          <Article />
        </div>
      </div>
      <div className="mt-10">
        <PuskesmasTerdekat />
      </div>
    </div>
  )
}

export default HasilPage