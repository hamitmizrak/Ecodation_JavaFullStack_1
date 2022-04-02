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
        //Stringte alt satıra geçmek (nextLine)
//        System.out.println("Lütfen bir şeyler yazınız");
//        String kelime=klavye.nextLine();
//        System.out.println(kelime);
//        System.out.println("diğer");

//        System.out.println("*********");
        System.out.println("Lütfen bir sayı giriniz");
        int sayi=klavye.nextInt();
        System.out.println(sayi*sayi);
    }
}
