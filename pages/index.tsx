import type { NextPage } from 'next'
import Head from 'next/head'
import axios from "axios";
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import { Levels, Types } from '../src/config/settings';
import { Questions, Category, QuizProps } from '../src/types/quiz';
import QuizSetting from '../src/components/views/quiz_settings';

const Main: NextPage = ({ quizProps } : InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <QuizSetting props={quizProps}/>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get('https://opentdb.com/api_category.php');
    
    if(data) {

      const categories:Category[] = data['trivia_categories'];
      categories.unshift({id:0, name: 'Any Category'});
      
      const questions:Questions = { count: 10 };
      
      const quizProps: QuizProps = {
        amount: questions,
        categories: categories,
        levels: Levels,
        types: Types
      }
      return { props: { quizProps } }
    } else return { props : { undefined }}
  } catch (error) {
    console.log('[Error]', error);
  }
}

export default Main;


