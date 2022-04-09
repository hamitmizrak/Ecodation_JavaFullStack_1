package com.hamitmizrak.db;

import lombok.extern.log4j.Log4j2;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Log4j2
public class DatabaseConnection extends DatabaseInformation {

    //database bağlanmak için konfigurasyon
    private String url = this.getUrl();
    private String user = this.getUser();
    private String password = this.getPassword();
    private String forNameData = this.getForNameData();

    //database-Java bağlantı
    private java.sql.Connection connection;

    //singleton design pattern
    private static DatabaseConnection instance;

    //parametresiz constructur
    //private parametresiz constructur=instance oluşturamazsın(new yapamazsın)
    private DatabaseConnection() {
        try {
            Class.forName(this.forNameData);
            log.info("Driver Yüklendi");
            this.connection = DriverManager.getConnection(url, user, password);
            log.info("Bağlantı başarılı");
        } catch (Exception exception) {
            log.error("!!!! Bağlantı Kurulalamadı");
            exception.printStackTrace();
        }

    }

    public static DatabaseConnection getInstance() {
        try {
            if (instance == null || instance.connection.isClosed()) {
                instance = new DatabaseConnection();
            }
        } catch (SQLException sql) {
            log.error("Database Connection failed !!!!");
            sql.printStackTrace();
        } catch (Exception ex) {
            log.error("Database Connection failed !!!!");
            ex.printStackTrace();
        }
        return instance;
    }

    //connection get set
    public Connection getConnection() {
        return connection;
    }

    public DatabaseConnection setConnection(Connection connection) {
        this.connection = connection;
        return this;
    }

    //PSVM
    public static void main(String[] args) {
        DatabaseConnection connection=new DatabaseConnection();

    }


}
