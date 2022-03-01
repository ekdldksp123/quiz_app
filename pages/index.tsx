import type { NextPage } from 'next'
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
      let anyTotal = 0, anyEasy = 0, anyMedium = 0, anyHard = 0;
      for(const v of categories) {
        await fetch(`https://opentdb.com/api_count.php?category=${v.id}`)
          .then((res) => res.json())
          .then((data) => {
            const countInfo = data["category_question_count"];
            v.total = countInfo["total_question_count"];
            anyTotal += v.total;
            v.easy = countInfo["total_easy_question_count"];
            anyEasy += v.easy;
            v.medium = countInfo["total_medium_question_count"];
            anyMedium += v.medium;
            v.hard = countInfo["total_hard_question_count"];
            anyHard += v.hard;
          })
          .catch((error) => console.log(error));
      }

      categories.unshift({
        id:0, 
        name: 'Any Category', 
        total: anyTotal, 
        easy: anyEasy, 
        medium: anyMedium, 
        hard: anyHard
      });

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


