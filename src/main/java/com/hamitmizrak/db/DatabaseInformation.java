package com.hamitmizrak.db;

import lombok.Data;
import lombok.Getter;

@Data
 public class DatabaseInformation {
    //object variable
    private String url;
    private String user;
    private String password;
    private String forNameData;

    //parametresiz constructor
    //Alt+Ins

    public DatabaseInformation() {
        //Mysql
         this.user="root";
         this.password="root";
         this.url="jdbc:mysql://localhost:3306/springboot";
         this.forNameData="com.mysql.cj.jdbc.Driver";

        //Postgresql
        /*this.user = "root";
        this.password = "root";
        this.url = "jdbc:postgresql://localhost:5432/springboot";
        this.forNameData = "org.postgresql.Driver";*/

        //H2DB
       /* this.user = "root";
        this.password = "";
        this.url = "jdbc:h2:file:./memory_persist/denemedb";
        this.forNameData = "org.h2.Driver";*/
    }

    //parametreli constructor
    public DatabaseInformation(String url, String user, String password, String forNameData) {
        this.url = url;
        this.user = user;
        this.password = password;
        this.forNameData = forNameData;
    }

    //getter setter


}
