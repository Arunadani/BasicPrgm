
    class Outerninnerclasses {
        int x = 10;

        class InnerClass {
            int y = 5;
        }
    }

    class Main {
        public static void main(String[] args) {
            Outerninnerclasses myOuter = new Outerninnerclasses();
            Outerninnerclasses.InnerClass myInner = myOuter.new InnerClass();
            System.out.println(myInner.y + myOuter.x);
        }
    }

