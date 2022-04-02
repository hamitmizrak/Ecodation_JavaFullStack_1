package javase;

import java.util.Locale;

public class _03_String {

    public static void main(String[] args) {
        //default değerler
        //tam sayılarda:0
        //virgüllü:0.0
        //boolean:false
        //String:null
        //char : \u0000
        //String primitive tür değildir.

        //kelime ==> String
        //NOT: Boşluk bir karakterdir.
        //sout
        //System.out.println(kelime);
        //kelime=kelime.concat(" -sona eklendi");
        //System.out.println(kelime);
        String kelime = "Html5 Css3 JS Jquery Bootstrap JS ";

        //concat: sona eklemek
        System.out.println(kelime.concat(" -sona eklemek"));

        //length: karakter sayısı
        System.out.println(kelime.length());

        //replace: değiştirmek için kullanıyoruz.
        //replace(eskiData,yeniData)
        String kelime2 = "Html5 Css3 JS Jquery Bootstrap JS JavaSE";
        System.out.println(kelime.replace(kelime, kelime2));

        //trim: kelimenin sadece başındaki ve sonundaki boşlukları siler
        System.out.println(kelime.length());
        System.out.println(kelime.trim().length());

        //startsWith ==> Bununla mı başlıyor ? evet:true hayır:false
        System.out.println("Bununla mı başlıyor: " + kelime.startsWith("H"));

        //endsWith ==> Bununla mı bitiyor ? evet:true hayır:false
        System.out.println("Bununla mı bitiyor:  " + kelime.endsWith(" "));

        //charAt: sıfır(0) indiste başlar
        //charAt: biz sayı veriririz ilgili indisi bize döndürür
        //charAt: aramalarda sıklıkla kullanılır.
        System.out.println(kelime.charAt(33));

        //indexOf veya lastIndexOf =-1 demek bulamadı anlamına geliyor.
        //indexOf:arama
        System.out.println("soldan arama: " + kelime.indexOf("JS"));

        //lastIndexOf:
        System.out.println("sağdan arama: " + kelime.lastIndexOf("JS"));

        //toLowerCase() ==> bütün karakterleri küçük yaz
        System.out.println(kelime.toLowerCase());

        //toUpperCase() ==> bütün karakterleri büyük yaz
        System.out.println(kelime.toUpperCase());

        //String nokta(.) koyarak ilerleyebiliyoruz
        System.out.println(kelime.concat("Mysql").trim().toLowerCase().length());


//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);
//        System.out.println(kelime.);

    }
}
