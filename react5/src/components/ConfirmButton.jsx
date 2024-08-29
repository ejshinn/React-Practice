import {useState} from "react";

function ConfirmButton() {
    // useState를 사용하여 변수 isConfirmed를 state로 관리, 초깃값을 false로 설정
    const [isConfirmed, setIsConfirmed] = useState(false);

    // 이벤트 처리용 함수 선언
    const handleConfirm = () => {
        // state로 관리되는 isConfirmed의 값을 변경하는 setIsConfirmed() 함수를 호출
        // 기존값을 가져와서 반전시키는 코드
        setIsConfirmed((prev) => !prev);
    }

    return (
        <div>
            {/* 클릭 이벤트 처리를 위해서 handleConfirm() 함수 사용 */}
            {/* disabled 속성에 변수 isConfirmed의 현재 값을 입력하여 사용 */}
            <button type={'button'} className={'btn btn-primary'} onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? '확인됨' : '확인하기'}
            </button>
        </div>
    );
}

export default ConfirmButton;