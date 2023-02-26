package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Then;

public class LoginStepDefinition {
	WebDriver driver;
	//@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\SeleniumTesting\\SeleniumJars\\chromedriver.exe");
		driver = new ChromeDriver(); 
		driver.get("https://classic.crmpro.com/");
	}

	//@When("^title of login page is FREE CRM$")
	public void title_of_login_page_is_FREE_CRM(){
	    String title=driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.", title);
	    
	}
   
	//regular expression 
	//1. \"(.*)/"
	//2. \"([^\"]*)\"
	
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_And_password(String username, String password){
	    driver.findElement(By.name("username")).sendKeys(username);
	    driver.findElement(By.name("password")).sendKeys(password);
	}

	//@Then("^user clicks on login button$")
	public void user_clicks_on_login_button(){
	    WebElement loginbtn=driver.findElement(By.xpath("//input[@type='submit']"));
	    JavascriptExecutor js = (JavascriptExecutor)driver;
	    js.executeScript("arguments[0].click();",loginbtn);
	  
	}
	//@Then("^user is on homepage$")
	public void user_is_on_homepage(){
	   String title=driver.getTitle();
	   System.out.println("Homepage title is: "+ title);
	   Assert.assertEquals("CRMPRO", title);
	}
	
	@Then("^user moves to new contacts page$")
	public void user_moves_to_new_contacts_page(){
		driver.switchTo().frame("mainpanel");
		Actions build =new Actions(driver);
		build.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}

	@Then("^user enters contacts details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_contacts_details_and_and(String firstname, String lastname, String position) {
	   driver.findElement(By.id("first_name")).sendKeys(firstname);
	   driver.findElement(By.id("surname")).sendKeys(lastname);
	   driver.findElement(By.id("company_position")).sendKeys(position);
	   driver.findElement(By.xpath("//input[@value='Save']")).click();
	}
 
	//@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}
}