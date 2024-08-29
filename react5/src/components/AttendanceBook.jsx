const students = [
        {id: 1, name: "Inje"},
        {id: 2, name: "Steve"},
        {id: 3, name: "Bill"},
        {id: 4, name: "Jeff"},
    ];

function AttendanceBook() {
    return (
        <ul>
            {
                // ES6의 배열 함수 map()을 사용하여 배열 students에 있는 요소를 하나씩 출력하여 반복 실행함
                students.map((student) => {
                    return <li key={student.id}>{student.name}</li>;
                })
            }
        </ul>
    );
}

export default AttendanceBook