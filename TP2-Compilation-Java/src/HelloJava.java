public class HelloJava{


	public static void main(String[] args){
		Message instance = new Message();
		String sentence = "Guillaume FAURE"; 
		instance.display();
		instance.display(sentence);
		//Use ant run -Darg0='yourSentence' to add arguments
		instance.display(args[0]);
	}
}
