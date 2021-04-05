CREATE TABLE FCamara_Projeto_Student (
id VARCHAR(255) PRIMARY KEY,
school_name VARCHAR(255) NOT NULL,
name VARCHAR(255) NOT NULL,
name_legal_guardian VARCHAR(255) NOT NULL,
cpf VARCHAR(255) NOT NULL,
cad_unico VARCHAR(255) NOT NULL,
FOREIGN KEY(school_name) REFERENCES FCamara_Projeto_School(name)
);

CREATE TABLE FCamara_Projeto_School (
id VARCHAR(255) NOT NULL,
name VARCHAR(255) PRIMARY KEY,
address VARCHAR(255) NOT NULL
);

CREATE TABLE FCamara_Projeto_MaterialList (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL
);

CREATE TABLE FCamara_Student_Materials(
student_id VARCHAR(255) NOT NULL,
material_id VARCHAR(255) NOT NULL,
PRIMARY KEY (student_id, material_id),
FOREIGN KEY(student_id) REFERENCES FCamara_Projeto_Student(id),
FOREIGN KEY(material_id) REFERENCES FCamara_Projeto_MaterialList(id)
);

CREATE TABLE FCamara_Projeto_BusinessContact (
email VARCHAR(255) PRIMARY KEY,
phone VARCHAR(255) NOT NULL,
company_name VARCHAR(255) NOT NULL,
person_name_or_position VARCHAR(255) NOT NULL
);

