package javase;

import javax.swing.*;
import java.util.Scanner;


public class _04_JOptionPaneScanner {
    public static void main(String[] args) {
        //Swing: Kullanıcıdan veri almak için
        //String temp=  JOptionPane.showInputDialog("Lütfen adınız giriniz");
        //System.out.println(temp);

        //Scanner Type Safe(Tür Güvenliği)
        //util
        Scanner klavye=new Scanner(System.in);
        System.out.println("Lütfen harf giriniz");
        String charKlavye=klavye.nextLine();
        char c1=charKlavye.charAt(0);
        System.out.println(c1);

        //Stringte alt satıra geçmek (nextLine)
//        System.out.println("Lütfen bir şeyler yazınız");
//        String kelime=klavye.nextLine();
//        System.out.println(kelime);
//        System.out.println("diğer");

//        System.out.println("*********");
//        System.out.println("Lütfen bir sayı giriniz");
//        int sayi=klavye.nextInt();
//        System.out.println(sayi*sayi);

        //NOT: unutma değer gerçekten virgül olmalı 14.55 değil 14,55 olmalı
//        System.out.println("Lütfen virgüllü sayı giriniz");
//        double virgullu=klavye.nextDouble();
//        System.out.println(virgullu);

        //escape character backSlash
//        System.out.println("Ankara\nBolu");
//        System.out.println("Ankara\"");
//        System.out.println("Ankara\'deneme");
//        System.out.println("Ankara\'\tdeneme");

        //C C++
        //System
//        System.out.print("Aynı  satır ");
//        System.out.println("Alt satıra geçecek\nescapecaharacter");
//        System.err.println("error");
//        //System.in() //dış dünyadan veri almak
//        System.exit(0); //çıkış sağlar
//        System.gc();


    }
}
