package stepDefinitions;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;

// data tables with maps for the paramterization of test cases
public class DealsStepWithMapDefinition {
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
	
	
	@Then("^user enters his username and password$")
	public void user_enters_username_And_password(DataTable credentials){
		for(Map<String, String> data:credentials.asMaps(String.class, String.class)){//to initialize the credentials
	    driver.findElement(By.name("username")).sendKeys(data.get("username")); // 1st one is the index of row and 2nd is the index of element
	    driver.findElement(By.name("password")).sendKeys(data.get("password"));
	}}

	//@Then("^user clicks login button$")
	public void user_clicks_login_button(){
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
	
	@Then("^user moves to a new deal page$")
	public void user_moves_to_new_contacts_page(){
		driver.switchTo().frame("mainpanel");
		Actions build =new Actions(driver);
		build.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}

	@Then("^user fills deal details$")
	public void user_enters_deal_details(DataTable dealData) {
		for(Map<String, String> data:dealData.asMaps(String.class, String.class)){
		   
	   driver.findElement(By.id("title")).sendKeys(data.get("title"));
	   driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
	   driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
	   driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
	   
	   driver.findElement(By.xpath("//input[@value='Save' and @type='submit']")).click();// click on save button
	   
	   Actions build =new Actions(driver); // to move to new deals page again
		build.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}}
	//@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
