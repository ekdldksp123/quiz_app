import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Script from "next/script";
import { useEffect, useState } from "react";
import ChartAndTime from '../src/components/views/quiz_result';
import { renderChart } from '../src/lib/chart';
import { toHHMMSS } from '../src/lib/common';
import useTimer from '../src/lib/hook/useTimer';
import useTimerActions from '../src/lib/hook/useTimerAction';

const Result: NextPage = () => {
    const count = useTimer("count") as number;
    const timerActions = useTimerActions();

    const [timeTaken, setTimeTaken] = useState<string>('');
    const [renderChart, setRenderChart] = useState<boolean>(false);
    

    const router = useRouter();
    const { category, level, right, wrong } = router.query;

    useEffect(() => {
        /** 타이머 정지 */
        timerActions.onPause();
        setTimeTaken(toHHMMSS(count));
    },[]);

    return (
        <>
            <ChartAndTime
                time={timeTaken}
                render={renderChart}
                category={category as string}
                level={level as string}
                right={parseInt(right as string)}
                wrong={parseInt(wrong as string)}
            />
            <Script
                id='chart'
                src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js'
                strategy='afterInteractive'
                onLoad={() => setRenderChart(true)}
            />
        </>
    );
}

export default Result;