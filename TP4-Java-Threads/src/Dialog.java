public class Dialog implements Runnable {
    @Override
    public void run(){
        Thread thrCur = Thread.currentThread();
        String name = thrCur.getName();
        System.out.printf("%s entering Dialog#run\n", name);
		// ...
		System.out.printf("%s leaving Dialog#run\n", name);
    }
}
