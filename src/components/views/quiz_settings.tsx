/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Counter, Sign, Input, SelectGroup, SelectBox, Select } from "./quiz_settings.styles";
import { Title, Label, Link } from "../molecules/caption";
import { Wrapper, Container } from '../layout/background';
import { Modal, ModalBody, ModalFooter } from "../layout/modal";
import { BtnPrimary, BtnArea } from "../molecules/button";
import React, { useEffect, useState } from "react";
import { Category, Difficulty, Type, QuizProps } from "../../types/quiz";
import Router from 'next/router'

interface Props {
    props: QuizProps,
}

const QuizSetting:React.FC<Props> = ({props}) => {
    const { amount, categories, levels, types } = props;

    const [ count, setCount ] = useState<number>(amount.count);
    const [ category, setCategory ] = useState<string>('0');
    const [ level, setLevel ] = useState<string>('0');
    const [ type, setType] = useState<string>('0');
    
    const checkNumberOfQuiz = () => {
        const element = categories.find((v:Category) => v.id === parseInt(category));
        if(element) {
            switch(level) {
                case '0': compareAmount(element.total); break;
                case 'easy': compareAmount(element.easy); break;
                case 'medium': compareAmount(element.medium); break;
                case 'hard': compareAmount(element.hard); break;
            }
        }
    }

    const compareAmount = (real:number) => {
        if(real < count) {
            alert(`선택하신 주제와 난이도에 존재하는 퀴즈의 수는 ${real} 개 입니다.`);
            setCount(real);
        } 
    }

    const onStart = async () => {
        let uri = `https://opentdb.com/api.php?amount=${count}`;
        if(category !== '0') uri += `&category=${category}`;
        if(level !== '0') uri += `&difficulty=${level}`;
        if(type !== '0') uri += `&type=${type}`;
        uri += '&encode=url3986';
        
        const res = await fetch(uri);
        const data = await res.json();

        window.localStorage.setItem('quizzes', JSON.stringify(data.results));
        Router.push({ pathname: '/quiz' });
    }

    const onChangeCount = (value: number) => {
        if(count - 1 >= 1) setCount(value);
        else {
            alert('문제는 1개 이상 풀어주세요');
            setCount(1);
        }
    } 

    const onLinkClick = () => {
        if(window.localStorage.hasOwnProperty('notes')) {
            Router.push({ pathname: '/note' });
        } else {
            alert('틀린 문제가 없습니다. 홈으로 돌아갑니다.');
        }
    }

    useEffect(() => {
        checkNumberOfQuiz();
    }, [category, level, count]);
    
    return (
        <Wrapper>
            <Container>
                <Link onClick={() => onLinkClick()}>My Notes</Link>
                <Modal css={responsive_modal}>
                    <ModalBody>
                        <Title css={responsive_title}>Hello Quiz</Title>
                        <SelectGroup>
                            <Label css={responsive_label}>Number of Quiz</Label>
                            <SelectBox>
                                <Counter>
                                    <Sign 
                                        className="minus" 
                                        onClick={() => onChangeCount(count-1)}
                                    >-</Sign>
                                    <Input 
                                        css={responsive_input} 
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeCount(parseInt(e.target.value))} 
                                        type='number'
                                        value={count}
                                    />
                                    <Sign 
                                        className="plus" 
                                        onClick={() => setCount(count+1)}
                                    >+</Sign>
                                </Counter>
                            </SelectBox>
                        </SelectGroup>
                        <SelectGroup>
                            <Label css={responsive_label}>Quiz Category</Label>
                            <SelectBox> 
                                <Select 
                                    css={responsive_select} 
                                    onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.selectedOptions[0].value)}>
                                    {categories.map((v:Category,i:number) => {
                                        return <option key={i} value={v.id === i ? 'any' : v.id}>{v.name}</option>
                                    })}
                                </Select>
                            </SelectBox>
                        </SelectGroup>
                        <SelectGroup>
                            <Label css={responsive_label}>Quiz Level</Label>
                            <SelectBox> 
                                <Select 
                                    css={responsive_select} 
                                    onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setLevel(e.target.selectedOptions[0].value)}>
                                    {levels.map((v:Difficulty,i:number) => {
                                        return <option key={i} value={v.id === `${i}` ? 'any' : v.id}>{v.name}</option>
                                    })}
                                </Select>
                            </SelectBox>
                        </SelectGroup>
                        <SelectGroup>
                            <Label css={responsive_label}>Quiz Type</Label>
                            <SelectBox> 
                                <Select 
                                    css={responsive_select} 
                                    onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setType(e.target.selectedOptions[0].value)}>
                                    {types.map((v:Type,i:number) => {
                                        return <option key={i} value={v.id === `${i}` ? 'any' : v.id}>{v.name}</option>
                                    })}
                                </Select>
                            </SelectBox>
                        </SelectGroup>
                    </ModalBody>
                    <ModalFooter>
                        <BtnArea>
                            <BtnPrimary onClick={() => onStart()}>Start</BtnPrimary>
                        </BtnArea>
                    </ModalFooter>
                </Modal>
            </Container>
        </Wrapper>
    )
    
}

export default QuizSetting;


const responsive_title = css`
    @media (max-width: 1200px) {
        font-size: 2.25rem;
    }
`

const responsive_modal = css`
    @media (max-width: 1200px) {
        width: 50vw;
    }
`

const responsive_label = css`
    @media (max-width: 1200px) {
        font-size: 1.25rem;
    }
`

const responsive_select = css`
    @media (max-width: 1200px) {
        font-size: 1.15rem;

        & option {
            font-size: 1.1rem;
        }
    }
`

const responsive_input = css`
    @media (max-width: 1200px) {
        font-size: 1.2rem;
        margin-top: 12px;
    }
`