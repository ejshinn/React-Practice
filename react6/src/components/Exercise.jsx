// Exercise.jsx

import { useState } from "react";
import {Button} from "react-bootstrap";
import Ex1 from "./Ex1.jsx";
import Ex2 from "./Ex2.jsx";
import Ex3 from "./Ex3.jsx";

{/* 문제 1) https://www.w3schools.com/w3css/tryw3css_examples_album_text.htm의 내용을 리액트 컴포넌트로 만들어서 출력하세요 */}
{/* 예제 사이트의 내용을 각각의 컴포넌트로 생성하고 화면에 들어가는 이미지 및 텍스트를 배열에 입력하여 map() 함수를 사용하여 컴포넌트를 출력하는 방식으로 생성 */}

{/* 문제 2) https://www.w3schools.com/w3css/tryw3css_examples_pricing_tables.htm의 내용을 리액트 컴포넌트로 만들어서 출력하세요 */}

{/* 문제 3) https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm의 내용을 리액트 컴포넌트로 만들어서 출력하세요 */}
{/* header, main 부분으로 화면을 나누어서 표현 */}
{/* about, menu, contact, 네비게이션바, footer 부분으로 컴포넌트를 나누어서 사용 */}

function Exercise() {
    const [view, setView] = useState(<Ex1/>);

    const handleButtonClick = (component) => {
        setView(component);
    };

    return (
        <div className={'container mt-4'}>
            <div className={'btn-group'}>
                <button type={'button'} className={'btn btn-primary'} onClick={() => handleButtonClick(<Ex1 />)}>문제 1</button>
                <Button type={'button'} variant={'success'} onClick={() => handleButtonClick(<Ex2 />)}>문제 2</Button>
                <Button type={'button'} variant={'info'} onClick={() => handleButtonClick(<Ex3 />)}>문제 3</Button>
            </div>
            <hr/>
            <div>
                {view}
            </div>
        </div>
    );
}

export default Exercise;