package stepDefinitions;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;

public class DealStepDefinition {
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
		
		
		@Then("^user enters username and password$")
		public void user_enters_username_And_password(DataTable credentials){
			List<List<String>>  data =credentials.raw(); //to initialize the credentials
		    driver.findElement(By.name("username")).sendKeys(data.get(0).get(0)); // 1st one is the index of row and 2nd is the index of element
		    driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
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
		
		@Then("^user moves to new deal page$")
		public void user_moves_to_new_contacts_page(){
			driver.switchTo().frame("mainpanel");
			Actions build =new Actions(driver);
			build.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		}

		@Then("^user enters deal details$")
		public void user_enters_deal_details(DataTable dealData) {
		   List<List<String>> dealValues=dealData.raw();
		   driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
		   driver.findElement(By.id("amount")).sendKeys(dealValues.get(0).get(1));
		   driver.findElement(By.id("probability")).sendKeys(dealValues.get(0).get(2));
		   driver.findElement(By.id("commission")).sendKeys(dealValues.get(0).get(3));
		}	
	 
		//@Then("^close the browser$")
		public void close_the_browser() {
			driver.quit();
		}
	}
