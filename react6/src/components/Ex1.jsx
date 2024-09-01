// Ex1.jsx

// https://www.w3schools.com/w3css/tryw3css_examples_album_text.htm

import Ex1Sub from "./Ex1Sub.jsx";

// 반복 출력할 컴포넌트에 사용할 데이터 배열
const holidayResorts = [
    {
        seq: 1,
        imgSrc: 'https://www.w3schools.com/w3css/img_5terre.jpg',
        title: '5 Terre',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        seq: 2,
        imgSrc: 'https://www.w3schools.com/w3css/img_monterosso.jpg',
        title: 'Monterosso',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        seq: 3,
        imgSrc: 'https://www.w3schools.com/w3css/img_vernazza.jpg',
        title: 'Vernazza',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        seq: 4,
        imgSrc: 'https://www.w3schools.com/w3css/img_manarola.jpg',
        title: 'Manarola',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        seq: 5,
        imgSrc: 'https://www.w3schools.com/w3css/img_corniglia.jpg',
        title: 'Corniglia',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        seq: 6,
        imgSrc: 'https://www.w3schools.com/w3css/img_riomaggiore.jpg',
        title: 'Riomaggiore',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
];

function Ex1() {
    return (
        <div className={'text-start'}>
            <div className={'navbar navbar-expand-sm navbar-dark bg-success mb-3 p-2'}>
                <a className={'navbar-brand fs-2 ms-2'}>Summer Holiday</a>
            </div>

            <div className={'container'}>
                {/* map() 함수를 사용하여 지정한 배열의 내용을 하나씩 출력 */}
                {/* 자식 컴포넌트인 Ex1Sub를 반복 출력 */}
                {holidayResorts.map(item => {
                    return <Ex1Sub data={item} key={item.seq} />
                })}
            </div>
        </div>
    );
}

export default Ex1;