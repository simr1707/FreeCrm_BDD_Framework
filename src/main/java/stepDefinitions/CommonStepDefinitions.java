package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CommonStepDefinitions {
	
	WebDriver driver;
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\SeleniumTesting\\SeleniumJars\\chromedriver.exe");
		driver = new ChromeDriver(); 
		driver.get("https://classic.crmpro.com/");
	}
	
	@When("^title of login page is FREE CRM$")
	public void title_of_login_page_is_FREE_CRM(){
	    String title=driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.", title);
	    
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button(){
	    WebElement loginbtn=driver.findElement(By.xpath("//input[@type='submit']"));
	    JavascriptExecutor js = (JavascriptExecutor)driver;
	    js.executeScript("arguments[0].click();",loginbtn);
	}
	
	@Then("^user is on homepage$")
	public void user_is_on_homepage(){
	   String title=driver.getTitle();
	   System.out.println("Homepage title is: "+ title);
	   Assert.assertEquals("CRMPRO", title);
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}
}
