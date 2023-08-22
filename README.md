**Web-Based Drawing Program**

## Part 1: Geometric Shapes Data Model
### 1.1 Overview
The Geometric Shapes Data Model encompasses a variety of geometric shapes grouped into categories such as Elliptical Shapes, Polygons, Sectors, and more. These shape groups share common properties, forming a foundation for an efficient and object-oriented drawing application. Designing a model that accounts for these relationships is crucial to the application's implementation.

### 1.2 Tasks
1. **Object-Oriented Model Design**: Devise a comprehensive object-oriented model that covers the following geometric shapes: Line Segment, Circle, Ellipse, Triangle, Rectangle, and Square.
2. **UML Class Diagram**: Create a UML Class diagram that visually represents your model, showcasing all classes, attributes, and methods.
3. **Inheritance and Polymorphism**: Implement the principles of inheritance and polymorphism in your design to facilitate extensibility and flexibility.

## Part 2: Drawing and Painting Application
### 2.1 Overview
Drawing and painting applications enjoy widespread popularity with a large user base. These applications offer an array of features, including Drawing, Coloring, and Resizing. Additionally, they incorporate a diverse set of built-in geometric shapes, often extendable, while allowing users to undo and redo actions for enhanced usability.

### 2.2 Tasks
1. **Implementation of Part 1 Design**: Bring your design from Part 1 to life by translating it into functional code.
2. **Graphical User Interface (GUI)**: Craft an intuitive GUI that empowers users to perform various actions on the shapes defined in Part 1, including Drawing, Coloring, Resizing, Moving, Copying, and Deleting. Consider exploring design patterns such as "Factory Design Pattern" and "Prototype Design Pattern" for guidance.
3. **Undo and Redo Functionality**: Develop your application to enable users to effortlessly undo or redo any action they perform.
4. **Enhanced Shape Control**: Employ the cursor for precise shape parameter control during drawing or relocation. You can opt for techniques like mouse dragging or other user-friendly approaches.

## Part 3: Save and Load Functionality
### 3.1 Overview
A crucial feature of any paint application involves the ability to save user-created drawings in files for future modification.

### 3.2 Tasks
1. **File Saving Options**: Provide users with the choice to save their drawings in both XML (encoded with ISO-8859-1) and JSON formats.
2. **Loading and Modifying Drawings**: Enable users to load previously saved drawings, affording them the capability to modify the existing shapes.
3. **User-Defined File Locations**: Empower users to specify the destination for saving files, enhancing the flexibility of the application.
