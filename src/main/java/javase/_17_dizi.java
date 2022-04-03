package javase;


import java.util.Arrays;

public class _17_dizi {

    public static void main(String[] args) {
        //diziler sıfırıncı indiste başlar
// et deneme=[];
//  int [] dizi=new int[10];
//  dizi[0]=44;
//  dizi[1]=33;
//  dizi[9]=66;
        int[] dizi = {22, 3, 39, 4, 5, 6};

        //System.out.println(Math.pow(2,dizi[9]));
        //iterative
        for (int i = 0; i < dizi.length; i++) {
            //System.out.print(dizi[i] + " ");
        }
        //System.out.println("\n************");

        //küçükten büyüğe sıralamak
        Arrays.sort(dizi);
        for (int i = 0; i < dizi.length; i++) {
            // System.out.print(dizi[i] + " ");
        }
        //System.out.println("\n*******************************");
        // System.out.println( Arrays.binarySearch(dizi,6));

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //Matrix:
        int[][] matrix = new int[4][4];

        for (int i = 0; i < matrix.length; i++) {//satır
            for (int j = 0; j < matrix[i].length; j++) {//sutun
                // System.out.print("*");
                if (dizi[i] > dizi[j]) {
                    System.out.print("*");
                }
            }
            System.out.println();
        }


    }

}
