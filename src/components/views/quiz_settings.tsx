import { Wrapper, Container, Title, Label, Counter, Sign, Input, SelectGroup, SelectBox, Select } from "./quiz_settings.styles";
import { Modal, ModalBody, ModalFooter } from "../layout/modal";
import { BtnPrimary, BtnArea } from "../molecules/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Questions, Category, Difficulty, Type, QuizProps } from "../../types/quiz";
import  axios  from 'axios';

interface Param {
    amount: string,
    category?: string,
    level?: string,
    type?: string,
}

interface Props {
    props: QuizProps,
}

const QuizSetting:React.FC<Props> = ({props}) => {
    const { amount, categories, levels, types } = props;

    const [ category, setCategory ] = useState<number>(0);
    
    const searchAmountOfQuiz = async () => {
        try {
            const { data } = await axios(`https://opentdb.com/api_count.php?category=${category}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        console.log(searchAmountOfQuiz());
    }, [category]);

    return (
        <Wrapper>
            <Container>
                <Modal>
                    <ModalBody>
                        <Title>Hello Quiz</Title>
                        <SelectGroup>
                            <Label>Number of Quiz</Label>
                            <SelectBox>
                                <Counter>
                                    <Sign className="minus">-</Sign>
                                    <Input type='text' value={amount.count}/>
                                    <Sign className="plus">+</Sign>
                                </Counter>
                            </SelectBox>
                        </SelectGroup>
                        <SelectGroup>
                            <Label>Quiz Category</Label>
                            <SelectBox> 
                                <Select>
                                    {categories.map((v:Category,i:number) => {
                                        return <option key={i} value={v.id === i ? 'any' : v.id}>{v.name}</option>
                                    })}
                                </Select>
                            </SelectBox>
                        </SelectGroup>
                        <SelectGroup>
                            <Label>Quiz Level</Label>
                            <SelectBox> 
                                <Select>
                                    {levels.map((v:Difficulty,i:number) => {
                                        return <option key={i} value={v.id === `${i}` ? 'any' : v.id}>{v.name}</option>
                                    })}
                                </Select>
                            </SelectBox>
                        </SelectGroup>
                        <SelectGroup>
                            <Label>Quiz Type</Label>
                            <SelectBox> 
                                <Select>
                                    {types.map((v:Type,i:number) => {
                                        return <option key={i} value={v.id === `${i}` ? 'any' : v.id}>{v.name}</option>
                                    })}
                                </Select>
                            </SelectBox>
                        </SelectGroup>
                    </ModalBody>
                    <ModalFooter>
                        <BtnArea>
                            <BtnPrimary>Start</BtnPrimary>
                        </BtnArea>
                    </ModalFooter>
                </Modal>
            </Container>
        </Wrapper>
    )
    
}

export default QuizSetting;

