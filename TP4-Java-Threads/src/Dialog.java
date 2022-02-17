public class Dialog implements java.lang.Runnable {
    @Override
    public void run(){
        Thread thrCur = Thread.currentThread();
        String name = thrCur.getName();
        System.out.printf("%s : entering Dialog#run\n", name);
		while (!Thread.interrupted()) {
			System.out.printf("%s : looping in Dialog#run\n", name);
		}
		// System.out.printf("%s leaving Dialog#run\n", name);
    }
}
