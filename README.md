# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

Summarized what I learned and put Cites below for the webpages I used. Answered each question to the best of my ability. I was specific on what I do know so that you know whether or not I got the question.

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When you hit the text with the hyperlink, the web browser you are using reads a line of code (HTML) telling the browser the next webpage you want to view. The browser does this by reading the Uniform Resource Locator (URL). Inside the URL is the name of the webpage you asked for, where the browser then takes the Domain Name System (DNS) from the URL to the IP (Internet Protocol) address for the next website. The browser then opens a Transmission Control Protocol (TCP) connection to the website over the IP, where it asks to speak to a Hypertext Transfer Protocol (HTTP or HTTPS for secure) which then provides the Hypertext Markup Language (HTML). The browser then reads and translates this HTML to the webpage you view.

## From start to finish, how does data reach you to be rendered in the browser?

When you ask your browser to get a website the website sends your browser packets of information measured in bytes. The browser then has to convert the raw bytes of data into a language it can understand. So the browser converts the bytes of data into characters which is done based on the encoding of HTML files. From characters of HTML it is then parsed into tokens, which are translated HTML code that the browser understands. From here, tokens are translated into nodes which are separate entities within the document object tree. The browser understands nodes but needs to organize them and relate them together. This is where the DOM comes in, where it then can render the webpage. Then you now get the rendered webpage on your browser.

## What code is rendered in the browser?

Most common codes rendered in browser are: HTML, HTML5, CSS and Java. Of course, this is the code that we can write and both us and the browser can understand.

## What is the server-side code’s main function?

The server-side code's main function is to interact with permanent storage like databases or files to render pages to the client and process user input. This is basically the initial webpage, so for example when Google search has a specific link and you press it that link gives you the server-side code initially. This code usually also gives the browser the client-side code so that the webpage can run faster.

## What is the client-side code’s main function?

Client-side code's main function is to interact directly with the page's HTML elements (Ex. textboxes, list-boxes). This allows for faster response times, more interactive webpage, and less strain on the web server. Downsides to this over server-side code are that the code takes more time and effort to write and the client's browser must support the scripting language.

## What is runtime?

Runtime is the time that software/instructions are being executed while the program is running. This can be the whole program, or just a couple lines of code. This can be used by programmers to see how long a specific line(s) are running.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

According to the website https://www.techtonic.com : there are four scroll down menus on the top of the page; Seven tables throughout the page at a given time; and six text boxes.

## How many instances of the server-side code are available at any given time?

According to the website https://www.techtonic.com and ignoring the drop down menu links, there are twenty-nine links. I also see one instance of retrieving data.

## How many instances of the databases connected to the server application are created?

Server applications are applications that wait for requests from other applications and respond to them. Using the website https://www.techtonic.com there is one table that includes how many cups of coffee as well as how many code lines created.


Cites:
https://www.quora.com/What-happens-when-you-click-on-a-link-from-a-technical-perspective

https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10

https://www.seguetech.com/client-server-side-code/

https://techterms.com/definition/runtime
