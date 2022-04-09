package com.hamitmizrak.dao;

import com.hamitmizrak.dto.AdminDto;
import lombok.extern.log4j.Log4j2;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

@Log4j2
public class AdminDao implements IDaoConnection<AdminDto> {

    @Override
    public void create(AdminDto adminDto) {
        try (Connection connection = getInterfaceConnection()) {
            String sql = "insert into admin (name,surname) values(?,?)";
            PreparedStatement preparedStatement=connection.prepareStatement(sql);
            preparedStatement.setString(1,adminDto.getName());
            preparedStatement.setString(2,adminDto.getSurname());
            int rowEffected=preparedStatement.executeUpdate();
            if(rowEffected>0)
                log.info(AdminDao.class+ " Ekleme Başarılı");
            else
                log.error(AdminDao.class+ " !!! Ekleme Başarısız");
        } catch (SQLException sql) {
            log.error(AdminDao.class+ " !!! Ekleme Başarısız");
            sql.printStackTrace();
        }
    }

    @Override
    public void delete(AdminDto adminDto) {
        try (Connection connection = getInterfaceConnection()) {
            String sql = "delete  from  admin where id=?";
            PreparedStatement preparedStatement=connection.prepareStatement(sql);
            preparedStatement.setInt(1,adminDto.getId());
            int rowEffected=preparedStatement.executeUpdate();
            if(rowEffected>0)
                log.info(AdminDao.class+ " Silme Başarılı");
            else
                log.error(AdminDao.class+ " !!! Silme Başarısız");
        } catch (SQLException sql) {
            log.error(AdminDao.class+ " !!! Silme Başarısız");
            sql.printStackTrace();
        }
    }

    @Override
    public void update(AdminDto adminDto) {
        try (Connection connection = getInterfaceConnection()) {
            String sql = "update  admin set name=?,surname=? where id=?";
            PreparedStatement preparedStatement=connection.prepareStatement(sql);
            preparedStatement.setString(1,adminDto.getName());
            preparedStatement.setString(2,adminDto.getSurname());
            preparedStatement.setInt(3,adminDto.getId());
            int rowEffected=preparedStatement.executeUpdate();
            if(rowEffected>0)
                log.info(AdminDao.class+ " Güncelleme Başarılı");
            else
                log.error(AdminDao.class+ " !!! Güncelleme Başarısız");
        } catch (SQLException sql) {
            log.error(AdminDao.class+ " !!! Güncelleme Başarısız");
            sql.printStackTrace();
        }

    }

    @Override
    public ArrayList<AdminDto> list() {
        ArrayList<AdminDto> list=new ArrayList<AdminDto>();
        AdminDto adminDto;

        try (Connection connection = getInterfaceConnection()) {
            String sql = "select *  from  admin ";
            PreparedStatement preparedStatement=connection.prepareStatement(sql);
            ResultSet resultSet=preparedStatement.executeQuery();

            while(resultSet.next()){
                adminDto=new AdminDto();
                adminDto.setId(resultSet.getInt("id"));
                adminDto.setName(resultSet.getString("name"));
                adminDto.setSurname(resultSet.getString("surname"));
                adminDto.setCreatedDate(resultSet.getDate("created_date"));
                list.add(adminDto);
            }
        }catch (SQLException sql) {
            sql.printStackTrace();
        }
        return list;
    }
}
