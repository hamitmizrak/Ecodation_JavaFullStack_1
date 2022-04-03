package javase;

//JS
//        function deneme(){}
//        let deneme2=function(){}
//        let deneme3=()=>{}
public class _15_Method {

    //1.voidli Parametresiz
    public void voidliParametresizMethod(){
        System.out.println("Voidli parametresiz method");
    }

    //2.voidli Parametreli
    public void voidliParametreliMethod(String adi){
        System.out.println("Voidli parametreli method "+adi);
    }

    //3.voidsiz parametresiz
    public static double voidsizParametresiz(){
        double para=200-4;
        return para;
    }

    //4.voidsiz parametreli
    public static double voidsizParametreli(double para){
        double kalan=para-4;
        return kalan;
    }

    //PSVM
    public static void main(String[] args) {
        _15_Method method=new _15_Method();

        //1
        method.voidliParametresizMethod();

        //2
        method.voidliParametreliMethod("Java");


        //Return
        //3
        double degisken=  voidsizParametresiz();
        System.out.println(degisken);

        //4  200=argüman
        double degisken2=  voidsizParametreli(200);
        System.out.println(degisken2);


    }
}
