package oop;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //getter setter+ toStrring+hashcode
@NoArgsConstructor //parametresiz constructır
@AllArgsConstructor //parametreli constructır
public class Teacher {
    private String teacherName;
    private String teacherSurname;
}
