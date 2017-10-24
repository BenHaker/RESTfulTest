package hello;

import java.util.Random;

public class GenerateName {
	private static String characters = "abcdefghijklmnopqrstuvwxyz";
	private static Random rng = new Random(System.currentTimeMillis());
	
	public static String generateString()
	{
		int length = rng.nextInt(10) + 1;
	    char[] text = new char[length];
	    for(int i = 0; i < length; i++)
	        text[i] = characters.charAt(rng.nextInt(characters.length()));
	    return new String(text);
	}
}