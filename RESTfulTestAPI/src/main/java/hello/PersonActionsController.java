package hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class PersonActionsController {
	private static int MAX_DOCS = 5000;
	
	@Autowired
	private PersonRepository repository;

    @RequestMapping("/people/actions/createRandom")
    public String createRandom(@RequestParam(value="number", defaultValue="10") int number) throws Exception {
    	long currentCount = repository.count();
    	
    	if(currentCount + number > MAX_DOCS)
    		throw new Exception("Cannot Add More documents As Maximum Document Count is=" + MAX_DOCS + ". Current Document Count=" + currentCount + ". Requested New Documents Number=" + number + ".");
        for(int i = 0; i < number; ++i) {
        	repository.save(Person.createRandomPerson());
        }
        return "{\"created\": " + number + " }";
    }
}