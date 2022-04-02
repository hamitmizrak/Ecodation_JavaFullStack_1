package javase;

import javax.swing.*;

public class _04_JOptionPaneScanner {
    public static void main(String[] args) {
        //Swing: Kullanıcıdan veri almak için
        String temp=  JOptionPane.showInputDialog("Lütfen adınız giriniz");
        System.out.println(temp);
    }
}
