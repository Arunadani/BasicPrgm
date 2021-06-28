public class Main {
    int x = 5;
    int y = 3;
    // int z = x + y;

    public static void main(String[] args) {
        Main addObj = new Main();
        Main subObj = new Main();
        Main mulObj = new Main();
        Main divObj = new Main();
        System.out.println("addition is: "+ (addObj.x + addObj.y));
        System.out.println("subtraction is: "+ (subObj.x - subObj.y));
        System.out.println("multiplication is: "+ (mulObj.x * mulObj.y));
        System.out.println("division is: "+ (divObj.x / divObj.y));

    }
}
