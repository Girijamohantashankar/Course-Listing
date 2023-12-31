const sampleCourses = [
  {
    id: 1,
    name: "CSS Course",
    instructor: "Girija Shankar",
    description:
      "A CSS (Cascading Style Sheets) course is a comprehensive educational program that teaches students how to design and format web content using CSS. Participants learn key concepts, selectors, properties, and best practices to create visually appealing and responsive web pages. The course covers topics such as layout, typography, color, and animations to enhance web design skills.",
    status: "Open",
    duration: "8 weeks",
    schedule: "Mon, Wed, Fri",
    location: "Online",
    prerequisites: "None",
    syllabus: "Week 1: Introduction to CSS, Week 2: CSS Selectors, Week 3: CSS Properties and Values, Week 4: Layout and Positioning,Week 5: Responsive Web Design, Week 6: Transitions and Animations, Week 7: CSS Preprocessors,Week 8: Best Practices and Project ",
    dueDate: 'December 31, 2023',
    image:
      "https://www.w3docs.com/uploads/media/default/0001/05/6d07a36ebe6d55273b39440f2391f1d7e6d4092a.png",
  },
  {
    id: 2,
    name: "HTML  Course",
    instructor: "Shankar Mohanta",
    description: "Description for Course 1",
    status: "Open",
    duration: "7 weeks",
    schedule: "Mon, Wed, Fri",
    location: "Online",
    prerequisites: "None",
    syllabus: "Introduction to HTML covering basic document structure, text formatting, links, images, forms, HTML5 semantics, best practices, and a final project.",
    dueDate: 'December 25, 2023',
    image:
      "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1551437392/img/co_img_1518_1631724053.png",
  },
  {
    id: 3,
    name: "Python Course",
    instructor: "Dr. Manas Ranjan",
    description: "Learn Python from scratch and become a Python expert.",
    status: "Open",
    duration: "8 weeks",
    schedule: "Tue, Thu",
    location: "Online",
    prerequisites: "Basic programming knowledge is recommended.",
    syllabus: "Course Title: Introduction to Python covering basic syntax, data types, control structures, functions, libraries, and practical coding exercises.",
    dueDate: 'December 31, 2023',
    image:
      "https://trisectinstitute.com/wp-content/uploads/2021/12/best-python-training.png",
  },
  {
    id: 4,
    name: "Machine Learning ",
    instructor: "Sambit Smith",
    description:
      "Explore the fundamentals of machine learning and data analysis.",
    status: "Open",
    duration: "10 weeks",
    schedule: "Mon, Wed",
    location: "Online",
    prerequisites: "Basic understanding of programming and mathematics.",
    syllabus: "Introduction to Machine Learning exploring algorithms, data preprocessing, model evaluation, and practical applications.",
    dueDate: 'January 15, 2024',
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCKJ7kOFFIxJYr__UXFFg9qbRgfH_1W7qYg&usqp=CAU",
  },
  {
    id: 5,
    name: "Web Development",
    instructor: "Girija Mohanta",
    description: "Become a web development pro in just 6 weeks.",
    status: "Open",
    duration: "6 weeks",
    schedule: "Tue, Thu, Sat",
    location: "Online",
    prerequisites: "No prior experience required.",
    syllabus: "Introduction to Web Development covering HTML, CSS, JavaScript, responsive design, and building a basic website",
    dueDate: 'January 15, 2024',
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp71bMNhc491wpEmqoDRNybniIVMKOOfRnAI8J9Va9lTTRYM1BBG2aEK1422jPNi7CykI&usqp=CAU",
  },
  {
    id: 6,
    name: "Data Science",
    instructor: "Dr. G S M",
    description: "An introductory course to the world of data science.",
    status: "Open",
    duration: "12 weeks",
    schedule: "Mon, Wed, Fri",
    location: "Online",
    prerequisites: "Basic knowledge of statistics is recommended.",
    syllabus: " Introduction to Data Science, exploring data analysis, statistics, machine learning, and real-world data projects",
    dueDate: 'January 25, 2024',
    image:
      "https://s40424.pcdn.co/in/wp-content/uploads/2023/08/Featured-Images-April-28-1140x628.png.webp",
  },
  {
    id: 7,
    name: "Java",
    instructor: "Jagatjit Barik",
    description: "Master the art of Java programming from scratch.",
    status: "Open",
    duration: "9 weeks",
    schedule: "Mon, Wed",
    location: "Online",
    prerequisites: "No prior programming experience required.",
    syllabus: "Introduction to Java programming, covering syntax, data types, control structures, object-oriented programming, and basic application development.",
    dueDate: 'January 1, 2024',
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbO89i5oTybW6jIf-6Vyy9LU1V8gAzRZK79hUCTtKhbt7PiZb79_50qM6mJfjPhwR_Yw&usqp=CAU",
  },
  {
    id: 8,
    name: "Cybersecurity",
    instructor: "Babun Kumar",
    description:
      "Learn the basics of cybersecurity and protect your digital world.",
    status: "Open",
    duration: "7 weeks",
    schedule: "Tue, Thu",
    location: "Online",
    prerequisites: "Basic computer skills are recommended.",
    syllabus: "Introduction to Cybersecurity, covering key concepts, threat analysis, security practices, and hands-on exercises in securing digital environments",
    dueDate: 'January 4, 2025',
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOI6LurWiGBb3w9KdmruY2PGG6RQtrQepLfmMvZalCfRKKI0oyDtn-gCAdECtKXbqRyM&usqp=CAU",
  },
  {
    id: 9,
    name: "Mobile App ",
    instructor: "SatyaBratya Giri",
    description: "Build cross-platform mobile apps using React Native.",
    status: "Open",
    duration: "8 weeks",
    schedule: "Tue, Thu",
    location: "Online",
    prerequisites: "Familiarity with JavaScript is a plus.",
    syllabus: " Introduction to Mobile App Development, covering app design, development for Android and iOS, user interfaces, and app deployment",
    dueDate: 'January 15, 2024',
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGA7iuRQkXsoTu33evQNeCFsw5CugghbukognkWFJcBixtnDN0TwHfjGiKpxhU5LzOnSM&usqp=CAU",
  },
];

export default sampleCourses;
