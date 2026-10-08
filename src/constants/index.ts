export const DEPARTMENTS = [
    'Science & Engineering', 
    'Arts & Humanities', 
    'Business & Commercial', 
    'Social Sciences', 
    'Enviromental & Vocational Studies', 
    'Home Economics & Hospitality',
    'Agriculture' 
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));