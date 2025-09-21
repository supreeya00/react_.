// src/store/CourseStore.ts
import { create } from "zustand";

export type Course = {
  id: number;
  code: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade: string; // A, B+, B, C+, ...
};

interface CourseState {
  courses: Course[];
  dropped: Course[];
  addCourse: (course: Omit<Course, "id">) => void;
  dropCourse: (id: number) => void;
  calcGPA: () => number;
}

const gradeToPoint: Record<string, number> = {
  A: 4,
  "B+": 3.5,
  B: 3,
  "C+": 2.5,
  C: 2,
  "D+": 1.5,
  D: 1,
  F: 0,
};

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  dropped: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, { id: Date.now(), ...course }],
    })),
  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        dropped: [...state.dropped, course],
      };
    }),
  calcGPA: () => {
    const { courses } = get();
    if (courses.length === 0) return 0;

    let totalCredits = 0;
    let totalPoints = 0;

    courses.forEach((c) => {
      totalCredits += c.credit;
      totalPoints += c.credit * (gradeToPoint[c.grade] ?? 0);
    });

    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  },
}));
