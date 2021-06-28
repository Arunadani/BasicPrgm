class Inheritance_food {
    protected String brand = "Maggie";
    public void masala(){
        System.out.println("Yummy, Yum masala it comes with variant tastes");
    }
}
 class type extends Inheritance_food{
    private String brandtype = "Noodles";
    public static void main(String[] args){
        type newType = new type();
        newType.masala();
        System.out.println("The type of food is " + newType.brandtype +", " + "where the brand is: " + newType.brand);
    }
 }
