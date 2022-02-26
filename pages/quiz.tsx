import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'


const Quiz: NextPage = () => {

    const router = useRouter();
    console.log(router.query);
    return <></>
}

// export const getStaticProps: GetStaticProps = async () => {
//     try {

//     } catch(error) {
//         console.log(error);
//     }
// }

export default Quiz;