package com.hamitmizrak.dao;

import com.hamitmizrak.db.DatabaseConnection;

import java.sql.Connection;

//generics
public interface IDaoConnection <T>{
    //gövdesiz metot {} yoksa

    //CRUD
    public void create(T t);
    public void delete(T t);
    public void update(T t);
    public java.util.ArrayList<T> list();

    //gövdeli metot
    default Connection getInterfaceConnection(){
        return DatabaseConnection.getInstance().getConnection();
    }
}
