// This method would replace every vowel in the String with W
public class ReplaceChar {
    /* Method that works
     */
    public String process(String str) {

        StringBuilder replaced = new StringBuilder();
        int i = 0;

        while (i < str.length()) {
            if (str.charAt(i) == ('a') || str.charAt(i) == ('e') || str.charAt(i) == ('i') || str.charAt(i) == ('o')
                    || str.charAt(i) == ('u')) {
                replaced.append('W');
            } else {
                replaced.append(str.charAt(i));
            }
            i++;
        }

        return replaced.toString();
    }
    // main function
    public static void main (String[] args){
        String s = "Java is most fun where we learn so much of things in one place";
        String replaced = new ReplaceChar().process(s);
        System.out.println(replaced);
    }
}
