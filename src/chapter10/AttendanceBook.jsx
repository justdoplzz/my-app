import React from "react";

const students = [
    {
        id: 1,
        name: '히수',
    },
    {
        id: 2,
        name: '재희',
    },
    {
        id: 3,
        name: '재준',
    },
    {
        id: 4,
        name: '준호',
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                // 1. 고유한 key 값 설정
                // return <li key={student.id}>{student.name}</li>

                // 2. key를 포맷팅 된 문자열로 변경
                return <li key={`student-id-$${student.id}`}>{student.name}</li>
            })}
            <hr/>
            {/* 3. key를 index로 변경 */}
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}

        </ul>
    )
}

export default AttendanceBook;