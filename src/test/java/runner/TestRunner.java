package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"classpath:features"}, //path of feature folder or file
		glue= {"stepDefinitions"},// step definition package name
		plugin = {"pretty","html:test-output", "json:json-output/cucumber.json","junit:junit_xml/cucumber.xml"},
		dryRun =true , //to check the mapping between each step and method is okay
		monochrome = true, //display the console output in 12a proper readable format
		strict= true)// it will check if any step is not defined in step definition file
        //tags= {"@RegressionTest,@SmokeTest"} //or:("a,b")         and for AND:{"a","b"} 

public class TestRunner {
}
