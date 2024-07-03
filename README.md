DCIT202 Mobile Application Development - Assignment 6
ID:11014444

Introduction

This document provides an overview of the mobile application developed for DCIT202 Assignment 6. The project entails creating a basic shopping cart app that follows the design guidelines presented in the provided UI mockup. The main aim is to develop a functional mobile application that allows users to browse products, manage a shopping cart, and retain cart information using local storage.

Project Description

The application simulates an online shopping experience where users can:

 • Browse a list of available products on the HomeScreen.
 • Add desired products to their shopping cart using an Add to Cart Button.
 • View the contents of their shopping cart on the CartScreen.
 • Remove unwanted items from the cart using a Remove from Cart Button.

Local storage mechanisms, such as AsyncStorage, SecureStore, or FileSystem, are employed to save and persist the cart data locally on the user’s device. This ensures that the items added to the cart remain available even if the user closes and reopens the app.

Application Features

HomeScreen

The HomeScreen serves as the primary interface where users can view a comprehensive list of available products. Each product is displayed with relevant details, allowing users to make informed decisions about what to add to their cart. The user interface is designed to be intuitive and user-friendly, mirroring the layout provided in the UI mockup.
CartScreen
The CartScreen displays all the products that have been added to the cart. This screen allows users to review their selected items and make adjustments as needed. Each item in the cart can be removed if the user changes their mind. This screen is crucial for managing the cart’s contents and providing a summary of the selected products.

Add to Cart Button

Located on the HomeScreen, the Add to Cart Button allows users to add products to their cart quickly. Upon tapping this button, the selected product is added to the cart, and a visual indication or feedback confirms the action, enhancing the user experience.
Remove from Cart Button
Situated on the CartScreen, the Remove from Cart Button enables users to remove products from their cart. This functionality provides flexibility and control, allowing users to modify their cart contents before finalizing their selection.

Data Storage and Persistence

To ensure that the cart’s contents are retained across sessions, the application utilizes local storage. Depending on the specific requirements and implementation details, one of the following storage methods is used:

 • AsyncStorage: A simple, asynchronous, unencrypted, persistent, key-value storage system.
 • SecureStore: Provides a secure, encrypted storage solution for sensitive data.
 • FileSystem: Offers a more versatile approach for handling complex data structures or larger amounts of data.

These storage solutions enable the application to save and retrieve cart data effectively, providing a seamless experience for the user.

Design Resources and References

 • UI Mockup: Access the design specifications and layout provided in the UI mockup here.
 • Google Drive Resources: Download necessary resources, including images, icons, and additional documentation from Google Drive.

Usage of Icons
For those familiar with icon packages, incorporating icons can enhance the visual appeal and usability of the application. Choose appropriate icons that align with the overall design and functionality of the app.

Submission Guidelines
Preparing for Submission

 1. Remove Node Modules: Before compressing the project folder, delete the node_modules directory to reduce the overall size.
 2. Compress the Repository: Zip the project directory to create a single compressed file.
 3. Upload to Sakai: Submit the compressed file to the designated assignment submission portal on Sakai.

Implementation Details
User Interface Design

The user interface is crafted to mirror the provided UI mockup closely. Key aspects of the design include:
• Product List Display: On the HomeScreen, products are presented in a visually appealing list format, providing clear information and easy access to the Add to Cart functionality.
 • Cart Item Management: On the CartScreen, the design focuses on simplicity and ease of use, allowing users to view and manage their selected items effectively.

Local Storage Mechanism

 • Chosen Storage Method: The application uses [AsyncStorage/SecureStore/FileSystem] for storing the cart data locally on the device. This ensures data persistence and reliability.

Application Screenshots

Include the following screenshots to illustrate the application’s functionality:

 • HomeScreen: Showing the list of products.
 • CartScreen: Displaying items in the cart.
 • Add to Cart Interaction: Demonstrating the process of adding an item to the cart.
 • Remove from Cart Interaction: Demonstrating the process of removing an item from the cart.

 SCREENSHOOT
 
 <img src="https://i.ibb.co/1ZDgmHn/Screenshot-20240703-020403-1.jpg" width="400"/>
 <img src="https://i.ibb.co/XLzZNQ1/Screenshot-20240703-011425-1.jpg" width="400"/>
 
