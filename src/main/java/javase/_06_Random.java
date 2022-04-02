package javase;


import java.util.Random;

public class _06_Random {
    public static void main(String[] args) {
        //Math: Java Lang kütüphanesidir
        //static bir yapıya sahiptir
        //hesaplama işlemlerinden kullanırız
        System.out.println(Math.random() * 4 + 1);//rastgele sayı

        //Random Class(Object)
        Random rastgele=new Random();
        int sayi= rastgele.nextInt(4)+1;
        System.out.println(sayi);

    }
}
