import { useCourseStore } from "../store/CourseStore";

const CourseList = () => {
  const { courses, dropCourse } = useCourseStore();

  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      {courses.length === 0 && <p>ยังไม่มีรายวิชา</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {courses.map((c) => {
          const isCriticalGrade = c.grade === "F" || c.grade === "W";
          const buttonStyle = {
            backgroundColor: isCriticalGrade ? 'red' : 'gray',
            color: 'white',
            padding: '4px 8px',
            border: 'none',
            borderRadius: '4px',
            marginTop: '8px',
            cursor: 'pointer'
          };

          return (
            <li
              key={c.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            >
              {c.code} - {c.nameTH} ({c.credit} หน่วยกิต) | อาจารย์: {c.teacher} | เกรด: {c.grade}
              <br />
              <button onClick={() => dropCourse(c.id)} style={buttonStyle}>
                ถอน
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseList;
