/*Write a method that uses a for loop to display numbers in descending order in the step of 5 starting from 100.
        Call your method from the main method. */

class BackCounting {
    public static void backCount()
    {
       //  Counting from 100 on backwards with difference of 5
        for(int i= 100; i>=0; i = i-5) {
            System.out.println(i);
        }
    }

    /* Main Method
    @args
     */
    public static void main(String[] args) {
        backCount();
        // System.out.println("Jed");
    }

}