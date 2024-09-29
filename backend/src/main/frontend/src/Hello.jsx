import axios from 'axios';

function Hello() {
    const clickButton = () => {
        axios.get('http://localhost:8080/hello')
            .then(res => {
                alert(`통신 성공\n${res.data}`);
            })
            .catch((err) => {
                alert('통신 실패');
            });
    }

    return (
        <div>
            <button type={'button'} onClick={clickButton}>확인</button>
        </div>
    );
}

export default Hello;