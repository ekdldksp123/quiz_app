import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef, ReactElement } from "react";
import ChartAndTime from '../src/components/views/quiz_result';
import { toHHMMSS } from '../src/lib/common';
import useTimer from '../src/lib/hook/useTimer';
import useTimerActions from '../src/lib/hook/useTimerAction';

const Result: NextPage = () => {
    const count = useTimer("count") as number;
    const timerActions = useTimerActions();

    const [timeTaken, setTimeTaken] = useState<string>('');

    const router = useRouter();
    const { category, level, right, wrong } = router.query;

    useEffect(() => {
        /** 타이머 정지 */
        timerActions.onPause();
        const time = count; //stop 해도 시간은 딱 고정되게
        setTimeTaken(toHHMMSS(time));
        timerActions.onStop();
    },[]);

    return (
            <ChartAndTime
                time={timeTaken}
                category={category as string}
                level={level as string}
                right={parseInt(right as string)}
                wrong={parseInt(wrong as string)}
            />
        );
}

export default Result;