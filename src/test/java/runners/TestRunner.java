
package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.testng.TestNGCucumberRunner;
import cucumber.api.testng.CucumberFeatureWrapper;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.*;
import pageobject.ClarkAction;

@CucumberOptions(
        features = "src/test/resources/features",
        glue = {"stepdefinitions"},
        format = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
public class TestRunner {
    private TestNGCucumberRunner testNGCucumberRunner;
    public WebDriver driver;

    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }

    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
    }

    @BeforeTest
    public void beforeScenario(){
        System.setProperty("webdriver.chrome.driver","C:\\Users\\sbanchhor\\Documents\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        ClarkAction.setDriver(driver);
        System.out.println("Before Scenario");
    }

    @AfterTest
    public void afterScenario(){
        System.out.println("After Scenario");
        driver.close();
    }
}
