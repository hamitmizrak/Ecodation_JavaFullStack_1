package oop;

//let object={adi:""};
public class Student {
    //classlar: pascalCase ile
    //1tane public vard(inner class hariç)
    //static class olamaz(inner class hariç)

    //Nesne değişkenleri
    private String studentName;
    private String studentSurname;

    //constructor: yapıcı metottur.
    //parametresiz constructor
    public Student() {
        this.studentName = "Adı alanı girilmedi";
        this.studentSurname = "Soyadı alanı girilmedi";
    }

    //Alt+Ins
    //parametreli constructor
    public Student(String studentName, String studentSurname) {
        this.studentName = studentName;
        this.studentSurname = studentSurname;
    }

    //sınıf adında bilgiler bize döner
    @Override
    public String toString() {
        return "Student(" +
                "studentName='" + studentName + '\'' +
                ", studentSurname='" + studentSurname + '\'' +
                ')';
    }

    //Metot
    public void fullName(){
        System.out.println(this.studentName+" "+this.studentSurname);
    }

    //getter setter
    public String getStudentName() {
        return studentName;
    }

    public Student setStudentName(String studentName) {
        this.studentName = studentName;
        return this;
    }

    public String getStudentSurname() {
        return studentSurname;
    }

    public Student setStudentSurname(String studentSurname) {
        this.studentSurname = studentSurname;
        return this;
    }
}
