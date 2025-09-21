import { useCourseStore } from "../store/CourseStore";

const CourseDrop = () => {
  const dropped = useCourseStore((s) => s.dropped);

  return (
    <div>
      <h2>รายวิชาที่ถอน</h2>
      {dropped.length === 0 && <p>ยังไม่มีรายวิชาที่ถอน</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dropped.map((c) => (
          <li
            key={c.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDrop;
