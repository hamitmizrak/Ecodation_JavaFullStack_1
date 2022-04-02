package javase;


public class _05_Math {
    public static void main(String[] args) {
        //Math: Java Lang kütüphanesidir
        //static bir yapıya sahiptir
        //hesaplama işlemlerinden kullanırız

        System.out.println("E: " + Math.E);
        System.out.println("PI: " + Math.PI);
        System.out.println(Math.abs(-44)); //abs=Mutlak
        System.out.println(Math.sqrt(16));//karekök
        System.out.println(Math.min(-500, 25));//minumum
        System.out.println(Math.max(-500, 25));//maksimum
        System.out.println(Math.pow(2, 5));//2=taban 5=üst
        System.out.println(Math.random() * 4 + 1);//rastgele sayı
        System.out.println(Math.floor(4.9)); //aşağı yuvarlamak
        System.out.println(Math.ceil(4.1)); //yukarı yuvarlamak
        System.out.println(Math.round(1.5)); //x>=.5 Yukarı yuvarlar
        // System.out.println( Math.round(Math.random()*4+1)  );

    }
}
