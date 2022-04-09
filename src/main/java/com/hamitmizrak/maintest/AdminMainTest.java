package com.hamitmizrak.maintest;

import com.hamitmizrak.controller.AdminController;
import com.hamitmizrak.dao.AdminDao;
import com.hamitmizrak.dto.AdminDto;

public class AdminMainTest {
    public static void main(String[] args) {
        AdminController adminController=new AdminController();


        //Create(insert)
        /*AdminDto adminDto=AdminDto
                .builder()
                .name("Ali")
                .surname("Işık")
                .build();
        adminController.create(adminDto);*/

        //update
       /* AdminDto adminDto=AdminDto
                .builder()
                .id(4)
                .name("Ali4")
                .surname("Işık4")
                .build();
        adminController.update(adminDto);*/

        //delete
        /*AdminDto adminDto=AdminDto
                .builder()
                .id(2)
                .build();
        adminController.delete(adminDto);*/

        adminController.list().forEach(System.out::println);


    }
}
