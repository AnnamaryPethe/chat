import React from "react";
import { Li} from "../Rooms/rooms-style";

interface Props {
    arr: string[]
}

export const Text: React.FC<Props> = ({arr}) => {
    const array = ["first", "second"];
    return(
        <div >
            <div>{array.map((e: string , i) => <Li key={i}>{e}</Li>)}</div>
            <div>{arr.map((e: string , i) => <li key={i}>{e}</li>)}</div>
        </div>
    )
};

export default Text;
