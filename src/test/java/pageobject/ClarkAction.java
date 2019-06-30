package pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import java.util.ArrayList;
import java.util.List;




public class ClarkAction {

   private static WebDriver driver;

    public static WebDriver getDriver() {
        return driver;
    }

    public static void setDriver(WebDriver driver) {
        ClarkAction.driver = driver;
    }

    public void open_clark() throws Throwable{
        driver.get("https://www.clark.de");
        driver.manage().window().maximize();
        Thread.sleep(3000);
    }

    public void login_Clark(){
        driver.findElement(By.xpath("//a[contains(text(),'Login')]")).click();
    }
    public void Enter_Emailid(String emailid){
        driver.findElement(By.xpath("//input[@id='user_email']")).sendKeys(emailid);
    }
    public void Enter_Password(String password){
        driver.findElement(By.id("user_password")).sendKeys(password);
    }
    public void loginButton() throws Throwable{
        driver.findElement(By.xpath("//input[@type='submit']")).click();
        Thread.sleep(4000);
    }

    public void verifyAfterLoginPage(String title) throws Throwable{
        WebElement actResult= driver.findElement(By.xpath("//h1[contains(text(),'Deine Verträge')]"));
        Assert.assertEquals(actResult.getText(),title);
    }

    public void clickOnLink(String link) throws Throwable{

        WebElement element = driver.findElement(By.xpath("//a[text()='"+link+"']"));
        element.click();
        Thread.sleep(2000);
    }
    public void verifyRenteneinkommen(int amount) throws Throwable{
        Thread.sleep(2000);
        String element=driver.findElement(By.xpath("//dt[text()='Renteneinkommen']//following-sibling::dd[1]")).getText();
        int number = Integer.parseInt(element.substring(0,element.lastIndexOf(",")).replace(".","").replace(",",""));
        Assert.assertFalse(number>2000,"Renteninkommen is not above 2000 Euro");
        System.out.println("Actual Amount is"+amount);
        Thread.sleep(2000);
    }
    public void logout_functionality(){
       WebElement element = driver.findElement(By.linkText("Mein Profil"));
        Actions action = new Actions(driver);
        action.moveToElement(element).build().perform();
        driver.findElement(By.xpath("//span[contains(text(),'Abmelden')]")).click();
    }

    public void text_verification() throws InterruptedException {
        Thread.sleep(3000);
        WebElement crossicon=driver.findElement(By.xpath("//i[@class='ember-modal__body__close  cucumber-no1-modal-close']"));
        JavascriptExecutor executor = (JavascriptExecutor)driver;
        executor.executeScript("arguments[0].click();", crossicon);
        String verifyText=driver.findElement(By.xpath("//h1[text()='Du hast alle empfohlenen Produkte!']")).getText();
        Assert.assertEquals(verifyText,"Du hast alle empfohlenen Produkte!");

    }
    public void invitation_emailid(String invitationid) throws InterruptedException {
        Thread.sleep(5000);
        driver.findElement(By.xpath("//input[@id='email']")).sendKeys(invitationid);
    }
    public void email_senden_button(String emailSendenButton) throws InterruptedException {
        Thread.sleep(2000);
        driver.findElement(By.xpath("//button[text()='"+emailSendenButton+"']")).click();
    }
    public void verifySuccessMsg(String message) throws InterruptedException {
        Thread.sleep(2000);
        String successMsg=driver.findElement(By.xpath("//div[text()='erfolgreich versendet']")).getText();
        Assert.assertEquals(successMsg,"erfolgreich versendet");
    }
    public void gutContractCount(int count,String contracts){
        List<WebElement> vertrage=driver.findElements(By.xpath("//div[@class='_list_1soe2d']//span[@class='_text_1trxuc']"));
        List<WebElement> gutList=new ArrayList<WebElement>();
        //System.out.print(vertrage);
        for(WebElement e:vertrage) {
            if(e.getText().contains(contracts)) {
                System.out.println(e.getText());
                gutList.add(e);

            }}
        int count_Gut = gutList.size();
        System.out.println("No of gut is " + gutList.size());
        Assert.assertEquals(count_Gut,count);
    }


    public void clickOnLinkPresent(String link){
        WebElement element = driver.findElement(By.xpath("//a[text()='"+link+"']"));
        JavascriptExecutor executor = (JavascriptExecutor)driver;
        executor.executeScript("arguments[0].click();", element);
    }
}
