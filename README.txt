TopOne Build deployment
(Unity build)
- Go to the TopOneBUILD.Unity repository in github
- Download files in as a ZIP
- Extract files 
- Download the latest verison of unity and unity hub https://unity3d.com/get-unity/download
- Open unity hub and click the add button, locate the TopOneBuild Unity folder 
- Open the project on unity hub
- Go to the file tab and click build settings 
- Make sure it is on the WebGL platform and click on player settings then publishing settings check if Decompression Fallback is ticked
- Click build and select the build folder. After a few minutes the project should be built.

(Website build)
- Go to the 3DVisualzation repository in github
- Go to the public folder and open the 3D folder, copy the contents from the unity project's build folder here
- Open the website folder in visual studio code. Open a new terminal 
- To test the website locally type "npm start" in the terminal 
- To build the website type "npm run build" in the terminal 
- Once the build is completed connect to the TopOneUK FTP on Filezilla
- Open the public_html folder, inside there will be two folders: "TopOneBuild" and "TopOneBuild-Test"
- TopOneBuild should contain the production build and TopOneBuild-Test should contain the non-production build
- First copy the contents of the website's build folder into the TopOneBuild-Test folder 
- Go to the website to test the build https://topone.uk/TopOneBuild-Test/
- If there are no errors on the website and everything is working correctly do the same for the TopOneBuild folder
- Go to the website https://topone.uk/TopOneBuild/