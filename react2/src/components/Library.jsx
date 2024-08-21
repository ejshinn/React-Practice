import Book from './Book.jsx';

function Library() {
    return (
        <div>
            <Book name={'처음 만난 리액트'} numOfPage={300}/>
            <Book name={'처음 만난 스프링'} numOfPage={400}/>
            <Book name={'처음 만난 안드로이드'} numOfPage={500}/>
        </div>
    );
}

export default Library;