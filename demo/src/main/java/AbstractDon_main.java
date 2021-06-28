public class AbstractDon_main {
    public static void main(String[] args){
        AbstractDon_encounter myObj = new AbstractDon_encounter();
        System.out.println("Name : " + myObj.name);
        System.out.println("Age : " + myObj.age);
        System.out.println("Influence : " + myObj.influence);
        System.out.println("Encountered in : " + myObj.encounter_year);
        myObj.since();
    }
}
