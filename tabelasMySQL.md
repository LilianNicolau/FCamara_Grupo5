CREATE TABLE FCamara_Projeto_Student (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
school_id INT (255) AUTO_INCREMENT,
FOREIGN KEY(school_id) REFERENCES FCamara_Projeto_School(id)
);

CREATE TABLE FCamara_Projeto_School (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL
);

CREATE TABLE FCamara_Projeto_MaterialList (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL
);

CREATE TABLE FCamara_Student_Materials(
student_id VARCHAR(255) PRIMARY KEY,
material_id VARCHAR(255) NOT NULL,
FOREIGN KEY(student_id) REFERENCES FCamara_Projeto_Student(id),
FOREIGN KEY(material_id) REFERENCES FCamara_Projeto_MaterialList(id)
);

***Tem que decidir se o doador vai doar a lista de materiais inteira ou algum material da lista. OU se
 não vai ser lista de material, só itens mesmo.