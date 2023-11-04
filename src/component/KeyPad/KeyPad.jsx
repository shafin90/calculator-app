import { useContext } from "react";
import Button from "../Button/Button";
import ButtonHolder from "../ButtonHolder/ButtonHolder";
import './KeyPad.css'
import { authContext } from "../AuthProvider/AuthProvider";

const KeyPad = () => {

    return (
        <div className="keyPad">
            <ButtonHolder num={1}></ButtonHolder>
            <ButtonHolder num={2}></ButtonHolder>
            <ButtonHolder num={3}></ButtonHolder>
            <ButtonHolder num="Del"></ButtonHolder>
            <ButtonHolder num="AC"></ButtonHolder>
            <ButtonHolder num={4}></ButtonHolder>
            <ButtonHolder num={5}></ButtonHolder>
            <ButtonHolder num={6} ></ButtonHolder>
            <ButtonHolder num="+"></ButtonHolder>
            <ButtonHolder num="-"></ButtonHolder>
            <ButtonHolder num={7}></ButtonHolder>
            <ButtonHolder num={8}></ButtonHolder>
            <ButtonHolder num={9}></ButtonHolder>
            <ButtonHolder num="/"></ButtonHolder>
            <ButtonHolder num="*"></ButtonHolder>
            <ButtonHolder num={0}></ButtonHolder>
            <ButtonHolder num="="></ButtonHolder>



        </div>
    );
};

export default KeyPad;