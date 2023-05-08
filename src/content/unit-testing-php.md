---
    title:  "The way I create unit test for php rest server"
    description: "Unit testing php"
    date: 2023-03-29
    img: '/600px-PHPUnit_Logo.svg.png'
    tags: [backend, unit testing, application]
---
**Unit testing** is one of the most important while You create an application, by creating unit testing you don't need to affraid while you make a huge change in your code, because the unit test will give error message about your code, and you can fix your code before it deployed in to server production.

If you don't do unit test to application, the application may failed in production while you don't know the problem, to fix the problem will take a great cost, the application will get complain from the user, even worse the user won't use your application *again*.

To unit test a REST API server, you can use a testing framework that allows you to send HTTP requests and verify the responses.

Because I use PHP version 5.5.37, I will use **phpunit** to do unit testing, a programmer-oriented testing framework for PHP.

To install PHPUnit on PHP 5.5.37, you can use Composer, which is a dependency manager for PHP. Here are the steps to install PHPUnit using Composer:

1. Install Composer: First, you need to install Composer on your system. You can download the Composer installer from the official website: https://getcomposer.org/download/

2. Create a **composer.json** file: In your project directory, create a **composer.json** file with the following content:

    ```json
    {
        "require-dev": {
            "phpunit/phpunit": "4.8.*"
        }
    }
    ```

    This file specifies that you need PHPUnit as a development dependency for your project.

3. Install dependencies: Run the following command in your project directory to install the PHPUnit dependency:

    ```css
    php composer.phar install --dev
    ```

    This command will download and install PHPUnit and its dependencies in the vendor directory of your project.

4. Write test cases: Write test cases for your PHP REST server using PHPUnit. PHPUnit provides various assertion methods to verify the expected output of your API endpoints.
Here is an example test case using PHPUnit.

## Unit testing HTTP GET Method

```php
class MyRestServerTest extends PHPUnit_Framework_TestCase
{
    public function testGetEndpoint()
    {
        // Send a GET request to the /endpoint URL
        $response = file_get_contents('http://localhost/my-rest-server/endpoint');
        // Verify that the response is "Hello World!"
        $this->assertEquals('Hello World!', $response);
    }
}
```

In this example, we are testing a GET endpoint that returns the string "Hello World!". We send a GET request to the endpoint and verify that the response is equal to "Hello World!" using the assertEquals method provided by PHPUnit.

This command will execute the test cases in the **MyRestServerTest.php** file and output the results.

## Unit testing HTTP POST, PUT, and DELETE Method

To test the POST, PUT, and DELETE methods of your PHP REST server using PHPUnit, you can use the PHPUnit_Framework_TestCase class's methods to create HTTP requests with the desired method and send them to your REST server. Here's an example for each method:

### POST Method:

```php
class MyRestServerTest extends PHPUnit_Framework_TestCase
{
    public function testPostEndpoint()
    {
        // Define the request body
        $data = array('foo' => 'bar');
        $data_string = json_encode($data);
        
        // Set up the request headers
        $headers = array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($data_string)
        );
        
        // Send a POST request to the /endpoint URL with the request body
        $ch = curl_init('http://localhost/my-rest-server/endpoint');
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $response = curl_exec($ch);
        curl_close($ch);
        
        // Verify that the response is "Success"
        $this->assertEquals('Success', $response);
    }
}
```
In this example, we are testing a POST endpoint that expects a JSON request body with the foo parameter set to bar. We set up the request headers to indicate that we are sending a JSON request body and send the POST request to the endpoint using cURL. We then verify that the response is equal to "Success".

### PUT Method:

```php
class MyRestServerTest extends PHPUnit_Framework_TestCase
{
    public function testPutEndpoint()
    {
        // Define the request body
        $data = array('foo' => 'baz');
        $data_string = json_encode($data);
        
        // Set up the request headers
        $headers = array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($data_string)
        );
        
        // Send a PUT request to the /endpoint URL with the request body
        $ch = curl_init('http://localhost/my-rest-server/endpoint');
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $response = curl_exec($ch);
        curl_close($ch);
        
        // Verify that the response is "Success"
        $this->assertEquals('Success', $response);
    }
}
```
In this example, we are testing a PUT endpoint that expects a JSON request body with the foo parameter set to baz. We set up the request headers to indicate that we are sending a JSON request body and send the PUT request to the endpoint using cURL. We then verify that the response is equal to "Success".

### DELETE Method:

```php
class MyRestServerTest extends PHPUnit_Framework_TestCase
{
    public function testDeleteEndpoint()
    {
        // Send a DELETE request to the /endpoint URL
        $ch = curl_init('http://localhost/my-rest-server/endpoint');
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        
        // Verify that the response is "Success"
        $this->assertEquals('Success', $response);
    }
}
```
In this example, we are testing a DELETE endpoint. We send the DELETE request to the endpoint using cURL and verify that.

## Unit testing Class or Function

To test Class or function, you need to import the class or function, execute it, compare your expectations and the results, you can do it like this way :

```php
// Class which we would to TEST.
require_once( __DIR__. '/../model/generator_id.php');

// Class to run Testing.
class SimpleTest extends PHPUnit_Framework_TestCase
{
    public function testGeneratorId()
    {
        $year = 2023; // replace with the year you want to generate
        $start_date = new DateTime("$year-01-02");
        $end_date = new DateTime("$year-12-31");

        $current_date = $start_date;
        $week = 1;
        // looping all date to test
        while ($current_date <= $end_date) {
            // execute the function and accept the result to variable
            $TestSentence = generateId("SUPER_22110000", $current_date->format("Y-m-d"));
            
            // set data to expect
            $weekId = $week < 10 ? "0". $week : $week;
            $expect = "SUPER_23". $weekId ."0000";
            // compare the expect and the result
            $this->assertEquals($expect, $TestSentence);
            // add day + 7
            $current_date->modify("+7 day");
            // add week + 1
            $week = $week + 1;
        }
            
    }
}
```

You can write similar test cases to test other HTTP methods and endpoints of your REST server. Once you have written the test cases, you can run them using PHPUnit:

```bash
./vendor/bin/phpunit MyRestServerTest.php
```

Or you can run all your test function inside a folder using :

```bash
./vendor/bin/phpunit foldertests/.
```

## Conclusion

Implementing unit testing in your project can have many benefits, such as catching bugs early in the development process, improving code quality, and reducing the overall time and cost of development. 

To implement unit testing effectively, it's important to choose a testing framework that meets your project's needs and to write test cases that cover all aspects of your code. 

Additionally, using tools like code coverage analysis and continuous integration can further improve the quality and reliability of your tests. 

By making unit testing a part of your development process, you can ensure that your code is of high quality and meets your project's requirements.