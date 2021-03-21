# old-Project-WS19
This was one of my first webapplication written in 2019 as a project for university. 
There is no indent to develop it any further, it is a very unstructured project.

It is written in Golang and Plain Javascript.
For this Application you need to install MongoDB, the free verion is enough.
MongoDB is needed to store the images and userdata created by this application.

The Application create a mosaic image out of many tiny pictures.
The Algorithm takes small Areas of the image, calculates the average Brightness and RGB values
and then replaces the Area with a small image that has a average Brightness and RGB very close to the Area.

# Examples:

  <img src="/ReadmeFiles/0.PNG" width="400"/>


If you want to see the Examples, you copy the **dump folder** in your mongodb **bin folder**.  
  
Open your terminal and go to the mongodb **bin folder**, use the command **mongorestore**.  
After that login with the Credential **Username:khoi** **password:123** and you will have   
a gallery and pool.   

  <img src="/ReadmeFiles/example1.jpg" width="400"/>
  <img src="/ReadmeFiles/example2.jpg" width="400"/>
  <img src="/ReadmeFiles/example3.jpg" width="400"/>
  
# How it works it:   
1.)  
Go to the Folder **picx** and start **picx.exe**  
Now you should have access the the application, open    
**localhost:4242/picx** in a Browser.  

<img src="/ReadmeFiles/1.PNG" width="400"/>

2.)  
Your create a account under **sign up** and **log in** with your credentials.     
(You have to click the button, Enter key doesnt send the form, I think I didnt added a keylistener)  
Your crendential are stored in the mongoDB unencrypted.  
 <p float="left">   
<img src="/ReadmeFiles/2.PNG" width="400"/>
<img src="/ReadmeFiles/3.PNG" width="418"/>
 </p> 

3.)   
Go to image pool and **File Select**, here you should have a folder of many pictures.   
I recommend more then 50 different/diverse pictures to get better results.  
(You upload alot of images, the app cuts and resize the images to fit in  
a pool of alot of small 5x5 - 30x30 pixel sized images.)  
       
<img src="/ReadmeFiles/4.PNG" width="700"/>
    
Then select a size under **choose Kackelsize**. Then Click on **Pool/Upload**.  
    
<img src="/ReadmeFiles/5.PNG" width="700"/>
    
On the Popup click **Create New Pool**  
   
<img src="/ReadmeFiles/6.PNG" width="700"/>
    
Go and write a name for your Pool.  
        
<img src="/ReadmeFiles/7.PNG" width="700"/>
    
Now you have a pool  
    
<img src="/ReadmeFiles/8.PNG" width="700"/>


4.)   
Go to **MOSAIC CREATION**.  

<img src="/ReadmeFiles/9.PNG" width="700"/>
    
If you there is no Album, create a new one   
(if you create an Album first, before you set the field.  
Otherwise the fields reset).    
    
<img src="/ReadmeFiles/10.PNG" width="700"/>
<img src="/ReadmeFiles/11.PNG" width="700"/>

Upload a file of which you want a mosaic.  
    
<img src="/ReadmeFiles/12.PNG" width="700"/>

Choose a pool.  
    
<img src="/ReadmeFiles/13.PNG" width="700"/>
    
Set **Use Kackeln** to **multiple**.  
    
<img src="/ReadmeFiles/14.PNG" width="700"/>
    
Click on the Button "los geht's" and wait for the result.  

<img src="/ReadmeFiles/15.PNG" width="700"/>
<img src="/ReadmeFiles/16.PNG" width="700"/>

  
Now you can see your base motive unter BASIC MOTIVES and the mosaic unter GALLERY  
The documentation in Folder Doku is in german, and isnt that well written by me.  
<img src="/ReadmeFiles/17.PNG" width="700"/>
<img src="/ReadmeFiles/18.PNG" width="700"/>


You can download and delete pictures   
<img src="/ReadmeFiles/20.PNG" width="700"/>
<img src="/ReadmeFiles/19.PNG" width="700"/>
