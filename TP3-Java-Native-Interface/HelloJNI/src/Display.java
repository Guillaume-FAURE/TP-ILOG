public class Display{
    private native void displayLine(int iLine, String message);
    static{
        System.loadLibrary("HelloNative");
    }
    public static void main(String[] args) {
        Display inst1 = new Display();
        inst1.displayLine(4,"Hello JNI");
    }
}