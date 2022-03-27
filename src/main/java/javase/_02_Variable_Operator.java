package javase;

public class _02_Variable_Operator {

    public static void main(String[] args) {
        // Matematik    Java    JavaScript
        // =            ==      ==  ===
        // ,            .       .

        //değişken tanımlamak (Js ve Java)
        var $_deneme44 = "Nasılsın";
        System.out.println($_deneme44);
        //Türkçe karakter yazmalalım üğşçöİı

        //JS JAVA
        // Aritmetik operatör ==>  + - * / %
        //ilişkili operatör  ==> > >= < <=  ==
        //Mantıksal opeatör ==> &&=VE ||=VEYA
        //Atama operatörü  ==> +=  -= *= /=

        // (* / (+-)))

        //+++++++++++++++++++++++++++++++++++++++++++
        //PRIMITIVE: ilkel değerler Wrapper beslenir
        //primititive types: Stack Hafıza(Ram,işi bittikten sonra otomatik silinir,hea'e göre hızlıdr,LIFO,boyutu belliyse,derleme zamanında)
        //null değer veremezsiniz
        //tamsayılar: b s i l
        //fL
        //TAMSAYILAR
        byte b1 = 44;  //-128<=x<=127
//        b1=null olmazzzzz
        short s1 = 555;
        int i1 = 5551144;
        long l1 = 5551144452L;


        //Virgüllü sayılar
        float f2 = 14.55f;
        double d2 = 1555.625525;

        double bilimsel = 4E-2;
        System.out.println(bilimsel);

        //boolean
        boolean isLogin = true;

        //char
        char c3 = '5';
        c3 = '\u5263';
        System.out.println(c3);

        //HATALAR
        //1-) Syntax error : Söz dizim hatası ==> in x=55;
        //2-) Logical error:  4/0
        //3-) Run time Error: çalışma zamanı hatası örneğin: bellek yer kalmadı sebebi: Sonsuz döngü olabilir




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //WRAPPER CLASS
        //Wrapper: Heap hafızayı kullanır
        //null değer verebiliriz
        //Wrapper: objenin özelliklerini alır

        //PRIMITIVE: ilkel değerler Wrapper beslenir

        //TAMSAYILAR
        Byte w1 = new Byte((byte) 44);   //-128<=x<=127
        w1 = null;
        Short w2 = 555;
        Integer w3 = 5551144;
        Long w4 = 5551144452L;


        //Virgüllü sayılar
        Float w5 = 14.55f;
        Double w6 = 1555.625525;

        //boolean
        Boolean w7 = true;

        //char
        Character w8 = '5';

        //DEFAULT
        //tamsayılarda: 0
        //virgüllü sayılarda: 0.0
        //boolean : false
        //char    : \u0000

        // ! =değil
        // new:hafıza yer kaplar
        // null=hafıza yer kaplamaz
        // sıfır=hafıza yer kaplar ancak değeri sıfırdır.


        //+++++++++++++++++++++++++++++++++
        //under score
        int telefon1=1122334455;
        System.out.println(telefon1);

        int telefon2=11_22_33_44_55;
        System.out.println(telefon2);

        //+++++++++++++++++++++++++++++++
        //sayı sistemleri
        //binary(ikilik)
        int sayi1=0b000011;
        System.out.println(sayi1);

        //octal(sekizlik)
        int sayi2=000011;
        System.out.println(sayi2);


        int sayi3=0xAbc;
        System.out.println(sayi3);
        System.out.println("////////////////////////////////////////");
        System.out.print("alt satıra geçmezzzzzz");
        System.out.println("alt satıra geçmek");

        //Escape character: \   \"  \'  \n \t
        System.out.println("1.alan\n\t2.alan");

    }
}
