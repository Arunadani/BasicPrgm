public class calltwomethods {
    static void myFunction(){
        int i = 2;
        int j = 12;
        int k = 21;
        System.out.println("The value is:" + ((i*k)/j));
    }
    static void advancefunc(){
         int i = 12;
         int j = 7;
        String k = "The dividend of value is: ";
        System.out.println(k + (i%j));

    }
    public static void main(String[] args){
        myFunction();
        advancefunc();
    }

}
