---
title:  "HTML basic"
description: "Something you may need to copy paste it, or just to read it."
date: 2020-12-19
img: '/cover (1).JPG'
tags: [Nuxt, Content, Learning]
---
Some time we need to remember about basic, thats why I wrtie this post
## Heading
	<h1>This is heading 1</h1>
	<h1>This is heading 4</h1>
	<h2>This is heading 2</h2>
	<h3>This is heading 3</h3>
## Paragraph
	<p>This is a paragraph.</p>
	<p>This is another paragraph.</p>
## Link
	<a href="https://www.w3schools.com">This is a link</a>
## Image
	<img src="Sunset.jpg" alt="Sunset.com" width="104" height="142"> 
## Button
	<button>Click me</button>
## Lists
	- Unordered Lists
	<ul>
		 <li>Coffee</li>
		  <li>Tea</li>
		  <li>Milk</li>
	</ul>
	
	- Ordered Lists
	<ol>
	  <li>Coffee</li>
	  <li>Tea</li>
	  <li>Milk</li>
	</ol>
## Paragraph with style
	<p style="color:red">This is a paragraph.</p>
## Tool tip
	<p title="I'm a tooltip">This is a paragraph.</p>
## Performated
	<p>
	  My Bonnie lies over the ocean.
	  My Bonnie lies over the sea.
	  My Bonnie lies over the ocean.
	  Oh, bring back my Bonnie to me.
	</p>

	<pre>
	  My Bonnie lies over the ocean.
	  My Bonnie lies over the sea.
	  My Bonnie lies over the ocean.
	  Oh, bring back my Bonnie to me.
	</pre>
## Style
	<h1 style="color:blue;">This is a heading</h1>
	<p style="color:red;">This is a paragraph.</p>
	<h1 style="font-family:verdana;">This is a heading</h1>
	<p style="font-family:courier;">This is a paragraph.</p>

	<h1 style="font-size:300%;">This is a heading</h1>
	<p style="font-size:160%;">This is a paragraph.</p>

	<h1 style="text-align:center;">Centered Heading</h1>
	<p style="text-align:center;">Centered paragraph.</p>

## Formatting text
	<b>1. This text is bold</b>
 
	<strong>2. This text is importance</strong>

	<i>3. This text is italic</i>
 
	<em>4. This text is emphasized</em>
  
	<h2>5. HTML <small>Small</small> Formatting</h2>
  
	<h2>6. HTML <mark>Marked</mark> Formatting</h2>
  
	<p>7. My favorite color is <del>blue</del> red.</p>
  
	<p>8. My favorite <ins>color</ins> is red.</p>
  
	<p>9. This is <sub>subscripted</sub> text.</p>
  
	<p>10. This is <sup>superscripted</sup> text.</p>

## Quotation

	<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
 
	<p>Here is a quote from WWF's website:</p>
	<blockquote cite="http://www.worldwildlife.org/who/index.html">
	For 50 years, WWF has been protecting the future of nature.
	The world's leading conservation organization,
	WWF works in 100 countries and is supported by
	1.2 million members in the United States and`
	close to 5 million globally.
	</blockquote>

	<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
	<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
	<address>
		Written by John Doe.<br>
		Visit us at:<br>
		Example.com<br>
		Box 564, Disneyland<br>
		USA
	</address> 

	 <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p> 
	 <bdo dir="rtl">This text will be written from right to left</bdo> 
 
 <p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization,
WWF works in 100 countries and is supported by
1.2 million members in the United States and
close to 5 million globally.
</blockquote> `

 <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
 
  <address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address> 

 <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p> 
 
  <bdo dir="rtl">This text will be written from right to left</bdo> 

## Comment
	 <!-- This is a comment -->

	<p>This is a paragraph.</p>

	<!-- Remember to add more information here --> 

	<!-- Do not display this image at the moment
	<img border="0" src="pic_trulli.jpg" alt="Trulli">
	-->

## Color
	 <h1 style="background-color:DodgerBlue;">Hello World</h1>
	<p style="background-color:Tomato;">Lorem ipsum...</p> 

	 <h1 style="color:Tomato;">Hello World</h1>
	<p style="color:DodgerBlue;">Lorem ipsum...</p>
	<p style="color:MediumSeaGreen;">Ut wisi enim...</p> 

	 <h1 style="border:2px solid Tomato;">Hello World</h1>
	<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
	<h1 style="border:2px solid Violet;">Hello World</h1> 

	 <h1 style="background-color:rgb(255, 99, 71);">...</h1>
	<h1 style="background-color:#ff6347;">...</h1>
	<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

	<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
	<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1> 

## Table
 
	 <style rel="stylesheet">
	 table, th, td {
	  border: 1px solid black;
	   border-collapse: collapse;
	   padding:15px;
	   border-spacing: 5px;
	}

	table#t01 {
	  width: 100%;
	  background-color: #f1f1c1;
	}

	table#t01 tr:nth-child(even) {
	  background-color: #eee;
	}
	table#t01 tr:nth-child(odd) {
	  background-color: #fff;
	}
	table#t01 th {
	  color: white;
	  background-color: black;
	}
	 </style>
 
	 <table style="width:100%">
	  <tr>
	    <th>Firstname</th>
	    <th>Lastname</th>
	    <th>Age</th>
	  </tr>
	  <tr>
	    <td>Jill</td>
	    <td>Smith</td>
	    <td>50</td>
	  </tr>
	  <tr>
	    <td>Eve</td>
	    <td>Jackson</td>
	    <td>94</td>
	  </tr>
	</table> 

	<br>
	 <table style="width:100%">
	  <tr>
	    <th>Name</th>
	    <th colspan="2">Telephone</th>
	  </tr>
	  <tr>
	    <td>Bill Gates</td>
	    <td>55577854</td>
	    <td>55577855</td>
	  </tr>
	</table> 

	<br>

	 <table style="width:100%">
	  <tr>
	    <th>Name:</th>
	    <td>Bill Gates</td>
	  </tr>
	  <tr>
	    <th rowspan="2">Telephone:</th>
	    <td>55577854</td>
	  </tr>
	  <tr>
	    <td>55577855</td>
	  </tr>
	</table> 

	<br>

	 <table style="width:100%">
	  <caption>Monthly savings</caption>
	  <tr>
	    <th>Month</th>
	    <th>Savings</th>
	  </tr>
	  <tr>
	    <td>January</td>
	    <td>$100</td>
	  </tr>
	  <tr>
	    <td>February</td>
	    <td>$50</td>
	  </tr>
	</table> 
	<br>
	 <table id="t01">
	  <tr>
	    <th>Firstname</th>
	    <th>Lastname</th>
	    <th>Age</th>
	  </tr>
	  <tr>
	    <td>Eve</td>
	    <td>Jackson</td>
	    <td>94</td>
	  </tr>
	</table> 

## Input attribute
	<h2>HTML Input Attribut</h2>
	
	<form action="">
	First Name : <br>
	<input type="text" name="firstName" value="Rijal">
	</form>

	<h2> Read only</h2>
	<form action="">
	First name : <br>
	<input type="text" name="firsName" value="Rijal" readonly>
	</form>

	<h2>Disable</h2>
	<form action="">
	<input type="text" name="firstName" value="Rijal" disabled>
	</form>

	<h2>Size</h2>
	<form action="">
	<input type="text" name="firstName" value="Rijal" size="40">
	</form>

	<h2>Max length</h2>
	<form action="">
	<input type="text" name="firstName" maxlength="10">
	</form>

	<h2>list</h2>
	<input list="browsers">
	<datalist id="browsers">
	<option value="Internet Explorer">
	<option value="Firefox">
	<option value="Chrome">
	<option value="Opera">
	<option value="Safari">
	</datalist>

	<h2>Min and max attribute</h2>
	<p>Enter a date before 1980-01-01 :</p>
	<input type="date" name="bday" max="1979-12-31">

	<p>Enter a date after 2000-01-01 :</p>
	<input type="date" name="bday" min="2000-01-02">

	<p>Quantity (between 1 and 5)</p>
	<input type="number" name="quantity" min="1" max="5">
	
	<h2>Multipel</h2>
	Select images: <input type="file" name="img" multiple>

	<h2>Pattern<h2>
	<input type="text" name="country_code" pattern="[A-Za-z]{3}" title="There letter country code">
	
	<h2>Placeholder</h2>
	<input type="text" name="fname" placeholder="firstname">

	<h2>Required</h2>
	Hanya aktif jika diletakkan dalam tag form <input type="text" name="username" require>

	<h2>Step</h2>
	<input type="number" name="points" step="3">

 Written with [StackEdit](https://stackedit.io/).
