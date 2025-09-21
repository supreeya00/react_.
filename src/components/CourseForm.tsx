import { useState } from "react";
import { useCourseStore } from "../store/CourseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((s) => s.addCourse);

  const [form, setForm] = useState({
    code: "",
    nameTH: "",
    nameEN: "",
    credit: 3,
    teacher: "",
    grade: "A",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!form.code.trim() || !form.nameTH.trim()) return;
    addCourse({ ...form, credit: Number(form.credit) });
    setForm({ code: "", nameTH: "", nameEN: "", credit: 3, teacher: "", grade: "A" });
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>เพิ่มรายวิชา</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <input
          name="code"
          placeholder="รหัสวิชา"
          value={form.code}
          onChange={handleChange}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          name="nameTH"
          placeholder="ชื่อวิชา"
          value={form.nameTH}
          onChange={handleChange}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          name="credit"
          type="number"
          min="1"
          placeholder="หน่วยกิต"
          value={form.credit}
          onChange={handleChange}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          name="teacher"
          placeholder="อาจารย์ผู้สอน"
          value={form.teacher}
          onChange={handleChange}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <select
          name="grade"
          value={form.grade}
          onChange={handleChange}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        >
          <option>A</option>
          <option>B+</option>
          <option>B</option>
          <option>C+</option>
          <option>C</option>
          <option>D+</option>
          <option>D</option>
          <option>F</option>
        </select>
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "8px",
          }}
        >
          เพิ่มรายวิชา
        </button>
      </div>
    </div>
  );
};

export default CourseForm;
