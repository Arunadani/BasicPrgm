// reverse a String
public class RevString {
    // string Reversed
    public String process(String str) {

        StringBuilder reversedString = new StringBuilder();
        int i = str.length() - 1;

        do {
            reversedString.append(str.charAt(i));
            i--;
        } while (i >= 0);

        return reversedString.toString();
    }

    // Main function

    public static void main(String[] args) {
        String s = "Java is a programming language and computing platform first released by Sun Microsystems in 1995";
        String reversedString = new RevString().process(s);
        System.out.println(reversedString);
    }
}
