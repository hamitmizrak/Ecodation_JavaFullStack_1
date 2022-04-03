package javase;


import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class _18_diziExam {
    //Kullanıcıdan alacağımız dizi eleman sayısının ;
    //1-) Bu sayılardan 0<=x<=sayi toplama
    //2-) ortalaması
    //3-) en küçüğü
    //4-) en büyüğünü bulsun

    //kullanıcıdan alıcak değer
    public  int scannerNumber(){
        Scanner klavye=new Scanner(System.in);
        System.out.println("Lütfen eleman sayısını giriniz");
        int elemanSayisi=klavye.nextInt();
        return elemanSayisi;
    }

    //int dizi
    public  int[] diziMethod(){
        int [] arr=new int[scannerNumber()];
        Random random=new Random();
        int rastgele ;
        for (int i = 0; i <arr.length; i++) {
            rastgele= random.nextInt(9)+1;
            arr[i]=rastgele;
        }

        for( int temp:arr){
            System.out.print(temp+" ");
        }
        return arr;
    }


    public void diziProcess(){
        int [] dizi=diziMethod();
        int sum=0;
        double average=0;
        for (int i = 0; i <dizi.length ; i++) {
            sum+=dizi[i];
        }
        System.out.println("dizi toplamları: "+sum);
        double result=sum/dizi.length-1;
        System.out.println("ortalama: "+result);
        Arrays.sort(dizi);
        System.out.println("En küçük: "+dizi[0]);
        System.out.println("En büyük: "+dizi[dizi.length-1]);
    }


    public static void main(String[] args) {
        _18_diziExam exam=new _18_diziExam();
        exam.diziProcess();

    }



}
