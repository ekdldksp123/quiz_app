import type { NextPage } from 'next'
import { GetServerSideProps  } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'

const Result: NextPage = () => {

    const router = useRouter();
    const { total, right, wrong } = router.query
    return <>{`total=${total} / right=${right} / wrong=${wrong}`}</>;
}

export default Result;