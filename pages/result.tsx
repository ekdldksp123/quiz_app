import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Script from "next/script";
import { useState } from "react";
import ChartAndTime from '../src/components/views/quiz_result';

const Result: NextPage = () => {

    const router = useRouter();
    const { category, level, total, right, wrong } = router.query;

    return (
        <>
            <ChartAndTime
                category={category as string}
                level={level as string}
                total={parseInt(total as string)}
                right={parseInt(right as string)}
                wrong={parseInt(wrong as string)}
            />
            <Script
                id='chart'
                src='https://cdn.jsdelivr.net/npm/chart.js'
                strategy='afterInteractive'
                onLoad={() => {
                    
                }}
            />
        </>
    );
}

export default Result;