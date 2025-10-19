const quizData = {
    sts: [
        
        { question: "What does STS primarily study?", options: ["Scientific laws only", "How science and technology impact society", "Technological inventions only", "Pure science in laboratories"], answer: "How science and technology impact society" },
        { question: "The nature of science suggests that scientific knowledge is:", options: ["Absolute and unchangeable", "Based on belief and faith", "Subject to change and revision based on new evidence", "A collection of opinions"], answer: "Subject to change and revision based on new evidence" },
        { question: "STS as an academic field emerged primarily after which major global event?", options: ["The Renaissance", "The Industrial Revolution", "World War II", "The French Revolution"], answer: "World War II" },
        { question: "Which historical period is known as the 'Age of Reason'?", options: ["The Renaissance", "The Industrial Revolution", "The Enlightenment", "The Middle Ages"], answer: "The Enlightenment" },
        { question: "Who is credited with inventing the printing press with movable type?", options: ["Leonardo da Vinci", "Galileo Galilei", "Johannes Gutenberg", "Isaac Newton"], answer: "Johannes Gutenberg" },
        { question: "The Banaue Rice Terraces are an example of advanced indigenous technology from which era in the Philippines?", options: ["Spanish Colonial Era", "American Period", "Pre-Spanish Era", "Post-Independence"], answer: "Pre-Spanish Era" },
        { question: "The current era characterized by a fusion of digital, physical, and biological technologies is called:", options: ["The Information Age", "The Fourth Industrial Revolution", "The Atomic Age", "The Space Age"], answer: "The Fourth Industrial Revolution" },
        { question: "The theory of evolution by natural selection was proposed by whom?", options: ["Nicolaus Copernicus", "Isaac Newton", "Charles Darwin", "Sigmund Freud"], answer: "Charles Darwin" },
        { question: "The shift from a geocentric to a heliocentric model of the universe is known as which revolution?", options: ["Darwinian Revolution", "Freudian Revolution", "Copernican Revolution", "Industrial Revolution"], answer: "Copernican Revolution" },
        { question: "Sigmund Freud's theory of psychoanalysis introduced the concept of the:", options: ["Conscious Mind", "Paradigm Shift", "Unconscious Mind", "Natural Selection"], answer: "Unconscious Mind" },
        { question: "The term 'paradigm shift' was popularized by which philosopher of science?", options: ["Karl Popper", "Thomas Kuhn", "Francis Bacon", "Immanuel Kant"], answer: "Thomas Kuhn" },
        { question: "The 'survival of the fittest' is a phrase that summarizes a key mechanism of:", options: ["Psychoanalysis", "Natural Selection", "Heliocentrism", "Relativity"], answer: "Natural Selection" },
        { question: "Acupuncture is a traditional medical practice that originated in:", options: ["India", "Japan", "China", "Korea"], answer: "China" },
        { question: "A key role of S&T in nation-building is to:", options: ["Preserve traditional beliefs", "Drive economic growth and innovation", "Increase military power exclusively", "Maintain the status quo"], answer: "Drive economic growth and innovation" },
        { question: "The Philippine government's 'Balik Scientist Program' aims to:", options: ["Fund research for local scientists only", "Encourage Filipino scientists abroad to return", "Provide scholarships for science students", "Establish new science high schools"], answer: "Encourage Filipino scientists abroad to return" },
        { question: "Project NOAH (Nationwide Operational Assessment of Hazards) is a program for:", options: ["Agricultural development", "Space exploration", "Disaster risk reduction and management", "Marine conservation"], answer: "Disaster risk reduction and management" },
        { question: "The first Industrial Revolution was powered by what invention?", options: ["The internal combustion engine", "The semiconductor", "The steam engine", "The nuclear reactor"], answer: "The steam engine" },
        { question: "Who is considered the 'Father of Optics' for his work during the Islamic Golden Age?", options: ["Avicenna", "Al-Khwarizmi", "Ibn al-Haytham", "Al-Biruni"], answer: "Ibn al-Haytham" },
        { question: "The word 'science' is derived from the Latin word 'scientia,' meaning:", options: ["To invent", "To discover", "Knowledge", "Nature"], answer: "Knowledge" },
        { question: "The Diwata-1 and Diwata-2 are examples of Philippine:", options: ["Weather balloons", "Research vessels", "Microsatellites", "Geothermal plants"], answer: "Microsatellites" },
        { question: "The practical application of scientific knowledge for human purposes is called:", options: ["Philosophy", "Society", "Technology", "Ideology"], answer: "Technology" },
        { question: "What does 'Filipinnovation' refer to?", options: ["A government agency", "A brand for the Philippines as an innovation hub", "A scientific journal", "A national science fair"], answer: "A brand for the Philippines as an innovation hub" },
         { question: "Which of the following is one of China's 'Four Great Inventions'?", options: ["The Wheel", "Papyrus", "Gunpowder", "The Aqueduct"], answer: "Gunpowder" },
        { question: "Which ancient civilization is credited with the development of papyrus?", options: ["Mesopotamia", "Greece", "Rome", "Egypt"], answer: "Egypt" },
        { question: "What was the primary research center in the Philippines during the American Period?", options: ["DOST", "University of the Philippines", "Bureau of Science", "National Research Council of the Philippines"], answer: "Bureau of Science" },
        { question: "Ayurveda is a traditional system of medicine that originated in which country?", options: ["China", "Japan", "India", "Egypt"], answer: "India" },
        { question: "Dr. Fe Del Mundo, a Filipina scientist, is famous for inventing a:", options: ["Medical Incubator", "Videophone", "Karaoke Machine", "Moon Buggy"], answer: "Medical Incubator" },
        { question: "The Ptolemaic model of the universe is also known as the:", options: ["Heliocentric Model", "Geocentric Model", "Elliptical Model", "Atomic Model"], answer: "Geocentric Model" },
        { question: "The Maya, Aztec, and Inca civilizations were located in which region?", options: ["Mesoamerica", "The Middle East", "East Asia", "Sub-Saharan Africa"], answer: "Mesoamerica" },
         { question: "Who challenged the Ptolemaic model by proposing a Sun-centered universe?", options: ["Galileo Galilei", "Johannes Kepler", "Isaac Newton", "Nicolaus Copernicus"], answer: "Nicolaus Copernicus" },
        { question: "What does DOST stand for in the Philippines?", options: ["Department of Science and Training", "Department of Social Technology", "Department of Science and Technology", "Division of Scientific Treatises"], answer: "Department of Science and Technology" },
        { question: "The Magna Carta for Scientists in the Philippines aims to:", options: ["Regulate scientific publications", "Provide benefits and support for scientists", "Set ethical standards for research", "Fund international collaborations"], answer: "Provide benefits and support for scientists" },
        { question: "Dr. Jose Rizal was a prominent scientist and engineer during which period of Philippine history?", options: ["Pre-Spanish Era", "Spanish Colonial Era", "American Period", "Japanese Occupation"], answer: "Spanish Colonial Era" },
        { question: "Which part of the mind did Freud say operates on the 'pleasure principle'?", options: ["The Ego", "The Superego", "The Id", "The Conscience"], answer: "The Id" },
        { question: "'On the Origin of Species' is the groundbreaking book written by:", options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Gregor Mendel"], answer: "Charles Darwin" },
        { question: "Gregorio Zara, a Filipino scientist, is known for inventing the:", options: ["Erythromycin", "Medical Incubator", "Videophone", "Banana Ketchup"], answer: "Videophone" },
        { question: "The development of Cuneiform, the first system of writing, is credited to which civilization?", options: ["Egyptians", "Greeks", "Mesopotamians", "Chinese"], answer: "Mesopotamians" },
        { question: "The theory of relativity, including the equation E=mc², was developed by:", options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"], answer: "Albert Einstein" },
        { question: "The invention of the compass was a major contribution from which civilization?", options: ["Ancient Rome", "Ancient Greece", "Ancient China", "Ancient India"], answer: "Ancient China" },
        { question: "The primary focus of the Darwinian revolution was on:", options: ["The laws of physics", "The structure of the atom", "The study of the mind", "Biological evolution"], answer: "Biological evolution" },
        { question: "The term for a state that breaks established international rules is:", options: ["A developed state", "A rogue state", "A failed state", "An allied state"], answer: "A rogue state" },
        { question: "Which UN organ is considered the main deliberative and policymaking body?", options: ["Security Council", "General Assembly", "Secretariat", "International Court of Justice"], answer: "General Assembly" },
        { question: "How many permanent members are in the UN Security Council?", options: ["15", "10", "5", "193"], answer: "5" },
        { question: "What is the primary role of the International Court of Justice (ICJ)?", options: ["To prosecute individuals for war crimes", "To settle legal disputes between states", "To create international laws", "To manage the UN budget"], answer: "To settle legal disputes between states" },
        { question: "Global governance primarily relies on the cooperation of:", options: ["States and IGOs only", "Corporations and NGOs", "States, IGOs, and transnational actors", "The UN Security Council alone"], answer: "States, IGOs, and transnational actors" },
        { question: "Which UN organ has its operations currently suspended?", options: ["Economic and Social Council", "Secretariat", "Trusteeship Council", "General Assembly"], answer: "Trusteeship Council" },
        { question: "A pandemic like COVID-19 is considered what kind of challenge to global governance?", options: ["A political challenge", "An economic challenge", "A health and environmental challenge", "A military challenge"], answer: "A health and environmental challenge" },
        { question: "The head of the UN Secretariat is known as the:", options: ["President", "Chief Administrative Officer", "Secretary-General", "Director"], answer: "Secretary-General" },
        { question: "Which of the following is a primary purpose of the UN?", options: ["To regulate global trade", "To act as a center for harmonizing the actions of nations", "To create a single world government", "To control the world's currency"], answer: "To act as a center for harmonizing the actions of nations" },
        { question: "The rapid and dramatic rise in the world population is known as:", options: ["Population density", "Urbanization", "Population explosion", "Migration"], answer: "Population explosion" }
    ],
    hci: [
        
        { question: "What does HCI stand for?", options: ["Human-Computer Interaction", "Human-Computer Interface", "Human-Centered Integration", "Highly-Complex Interaction"], answer: "Human-Computer Interaction" },
        { question: "The design principle of providing information about what action has been done is called:", options: ["Visibility", "Constraint", "Feedback", "Affordance"], answer: "Feedback" },
        { question: "Which of the following is a subjective 'User Experience Goal'?", options: ["Learnability", "Effectiveness", "Enjoyable", "Efficiency"], answer: "Enjoyable" },
        { question: "A button on a website that looks 'clickable' is an example of a perceived:", options: ["Constraint", "Feedback", "Affordance", "Mental Model"], answer: "Affordance" },
        { question: "The extent to which a product can be used by people with disabilities is known as:", options: ["Inclusiveness", "Usability", "User Experience", "Accessibility"], answer: "Accessibility" },
        { question: "Which of these is a key usability goal?", options: ["Engaging", "Aesthetically pleasing", "Safety", "Fun"], answer: "Safety" },
        { question: "The principle of designing interfaces to have similar operations for similar tasks is:", options: ["Affordance", "Consistency", "Visibility", "Feedback"], answer: "Consistency" },
        { question: "Inclusiveness in design means designing for:", options: ["The 'average' user", "Expert users only", "The widest possible range of people", "A specific niche market"], answer: "The widest possible range of people" },
        { question: "Making relevant parts of an interface apparent is an example of:", options: ["Visibility", "Feedback", "Constraint", "Simplicity"], answer: "Visibility" },
        { question: "A design philosophy that places the user at the center of the process is known as:", options: ["Technology-Centered Design", "User-Centered Design", "Agile Design", "System-Centered Design"], answer: "User-Centered Design" },
        { question: "In the Double Diamond of Design, what are the four phases?", options: ["Plan, Design, Build, Test", "Discover, Define, Develop, Deliver", "Research, Ideate, Prototype, Launch", "Think, Make, Check, Act"], answer: "Discover, Define, Develop, Deliver" },
        { question: "Which of these is NOT a principle of User-Centered Design?", options: ["Early focus on users and tasks", "Iterative design", "Empirical measurement", "Prioritizing technical features over user needs"], answer: "Prioritizing technical features over user needs" },
        { question: "A low-fidelity paper sketch of an interface is a form of:", options: ["Conceptual Model", "Prototype", "Mental Model", "Final Product"], answer: "Prototype" },
        { question: "The cyclical process of building, testing, and refining a design is called:", options: ["Linear development", "Iteration", "Conceptualization", "Requirement gathering"], answer: "Iteration" },
        { question: "Which of the four basic activities of interaction design involves understanding user needs?", options: ["Prototyping", "Evaluating", "Designing Alternatives", "Discovering Requirements"], answer: "Discovering Requirements" },
        { question: "A user's internal representation of how a system works is called a:", options: ["Conceptual Model", "Interaction Type", "Mental Model", "Cognitive Framework"], answer: "Mental Model" },
        { question: "Graying out an unavailable menu option is an example of which design principle?", options: ["Feedback", "Constraint", "Visibility", "Consistency"], answer: "Constraint" },
        { question: "Using a 'shopping cart' on an e-commerce site is an example of an:", options: ["Interface Metaphor", "Interaction Type", "Usability Goal", "External Cognition"], answer: "Interface Metaphor" },
        { question: "Which interaction type involves interacting with a system as if having a conversation?", options: ["Instructing", "Manipulating", "Exploring", "Conversing"], answer: "Conversing" },
        { question: "A high-level description of how a system is organized and operates is a:", options: ["Mental Model", "Prototype", "Conceptual Model", "User flow"], answer: "Conceptual Model" },
        { question: "Dragging and dropping a file is an example of which interaction type?", options: ["Conversing", "Instructing", "Exploring", "Manipulating"], answer: "Manipulating" },
        { question: "The 'Gulf of Execution' refers to the gap between:", options: ["The system's state and the user's understanding of it", "The user's goal and the actions required to achieve it", "The designer's idea and the final product", "The user's expectation and the system's performance"], answer: "The user's goal and the actions required to achieve it" },
        { question: "Which cognitive process is concerned with selecting things to concentrate on?", options: ["Memory", "Perception", "Attention", "Learning"], answer: "Attention" },
        { question: "Using a to-do list to offload the mental work of remembering is an example of:", options: ["Mental Model", "External Cognition", "Perception", "Attention"], answer: "External Cognition" },
        { question: "The 'Gulf of Evaluation' can be bridged by providing good:", options: ["Affordances", "Constraints", "Feedback and Visibility", "Consistency"], answer: "Feedback and Visibility" },
        { question: "Why is 'recognition over recall' a good principle for designing for memory?", options: ["It is easier for people to recognize than to recall", "It makes the interface more colorful", "It is faster to code", "It works better on small screens"], answer: "It is easier for people to recognize than to recall" },
        { question: "A mismatch between the system's design and a user's mental model often leads to:", options: ["Faster task completion", "User errors and frustration", "A more engaging experience", "Higher user satisfaction"], answer: "User errors and frustration" },
        { question: "How information is acquired from the environment via the senses is called:", options: ["Attention", "Memory", "Perception", "Cognition"], answer: "Perception" },
        { question: "Which term describes how a person feels when using a product, including their perceptions of usability and pleasure?", options: ["Interaction Design", "User Experience (UX)", "Accessibility", "Human-Computer Interaction (HCI)"], answer: "User Experience (UX)" },
        { question: "Which usability goal refers to how easy a system is to learn to use?", options: ["Effectiveness", "Efficiency", "Learnability", "Memorability"], answer: "Learnability" },
        { question: "What is the primary goal of prototyping in the interaction design process?", options: ["To create the final, polished product", "To test and evaluate design ideas with users", "To write the complete code for the system", "To market the product to investors"], answer: "To test and evaluate design ideas with users" },
        { question: "The first phase of the Double Diamond of Design, 'Discover', involves what kind of thinking?", options: ["Convergent thinking to narrow down ideas", "Divergent thinking to explore possibilities", "Evaluative thinking to test prototypes", "Finalizing the design specification"], answer: "Divergent thinking to explore possibilities" },
        { question: "An interface metaphor's primary purpose is to:", options: ["Make the interface look more modern", "Leverage familiar knowledge to help users understand", "Restrict what users can do", "Provide direct manipulation of objects"], answer: "Leverage familiar knowledge to help users understand" },
        { question: "Which part of cognition involves recalling information that has been stored?", options: ["Perception", "Attention", "Learning", "Memory"], answer: "Memory" },
        { question: "Don Norman's model of interaction includes the 'Gulf of Execution' and the 'Gulf of...'", options: ["Understanding", "Evaluation", "Interaction", "Design"], answer: "Evaluation" },
        { question: "The cognitive process of interpreting sensory information to understand the environment is:", options: ["Perception", "Attention", "Memory", "Learning"], answer: "Perception" },
        { question: "When a designer restricts possible actions to prevent errors, they are using:", options: ["Feedback", "Affordance", "Constraints", "Visibility"], answer: "Constraints" },
        { question: "The user-centered design approach emphasizes:", options: ["The designer's personal preferences", "The latest technology available", "The needs and goals of the end-user", "The business's marketing strategy"], answer: "The needs and goals of the end-user" },
        { question: "What is the main purpose of the 'Define' phase in the Double Diamond model?", options: ["To brainstorm as many ideas as possible", "To build the final product", "To frame a clear problem statement", "To test the product with users"], answer: "To frame a clear problem statement" },
        { question: "Involving users in the design process helps to:", options: ["Increase development costs", "Ensure the product meets their needs", "Slow down the entire process", "Focus only on the designer's vision"], answer: "Ensure the product meets their needs" },
        { question: "What is a potential downside of interface metaphors?", options: ["They are always too complex", "They can limit designers' creativity", "They are not understood by users", "They cannot be used on mobile devices"], answer: "They can limit designers' creativity" },
        { question: "Issuing commands via a command line is which interaction type?", options: ["Conversing", "Instructing", "Manipulating", "Exploring"], answer: "Instructing" },
        { question: "Navigating a 3D virtual environment is an example of:", options: ["Exploring", "Instructing", "Conversing", "Manipulating"], answer: "Exploring" },
        { question: "Cognitive frameworks are used in HCI to:", options: ["Write code for the user interface", "Understand and explain user interaction", "Market the product", "Test system hardware"], answer: "Understand and explain user interaction" },
        { question: "The ability to multitask effectively is limited by our:", options: ["Memory capacity", "Perceptual filters", "Attentional resources", "Motor skills"], answer: "Attentional resources" },
        { question: "Well-designed interfaces that act as reminders or guides are examples of technology supporting:", options: ["Mental models", "Internal cognition", "External cognition", "Direct manipulation"], answer: "External cognition" },
        { question: "The 'Discover' phase of the Double Diamond model is a period of:", options: ["Convergent thinking", "Divergent thinking", "Prototyping", "Finalizing design"], answer: "Divergent thinking" },
        { question: "What is the difference between usability and user experience?", options: ["They are the same thing", "Usability is about function, UX is about feelings", "Usability is a part of the overall user experience", "Usability is for hardware, UX is for software"], answer: "Usability is a part of the overall user experience" },
        { question: "In the Double Diamond model, the 'Develop' phase involves:", options: ["Narrowing down to one final idea", "Researching the problem space", "Creating and testing multiple potential solutions", "Launching the product"], answer: "Creating and testing multiple potential solutions" },
        { question: "The main purpose of a conceptual model is to:", options: ["Provide a detailed technical specification", "Establish a common ground for the design team", "Act as a marketing document", "List all the features of the product"], answer: "Establish a common ground for the design team" }
    ],
    nstp: [
        
        { question: "What Republic Act established the National Service Training Program (NSTP)?", options: ["RA 8491", "RA 10121", "RA 9163", "RA 9003"], answer: "RA 9163" },
        { question: "Which is NOT one of the three components of NSTP?", options: ["ROTC", "LTS", "CWTS", "NSRC"], answer: "NSRC" },
        { question: "Which NSTP component is designed to provide military training for national defense preparedness?", options: ["LTS", "CWTS", "ROTC", "All of the above"], answer: "ROTC" },
        { question: "The Literacy Training Service (LTS) component focuses on training students to teach:", options: ["Military tactics", "Literacy and numeracy skills", "Disaster response", "Environmental protection"], answer: "Literacy and numeracy skills" },
        { question: "Activities that enhance community welfare, such as improving health and education, fall under which component?", options: ["ROTC", "LTS", "CWTS", "NSRC"], answer: "CWTS" },
        { question: "Which article of the Philippine Constitution states the duty of citizens to defend the State?", options: ["Article III", "Article II Section 4", "Article II Section 13", "The Preamle"], answer: "Article II Section 4" },
        { question: "Article II, Section 13 of the Constitution recognizes the vital role of the ____ in nation-building.", options: ["Government", "Military", "Youth", "Church"], answer: "Youth" },
        { question: "The 'Bill of Rights' which limits the powers of the State is found in which article of the Constitution?", options: ["Article I", "Article II", "Article III", "Article IV"], answer: "Article III" },
        { question: "The Preamble of the Constitution comes from the Latin word 'Preambulare', which means:", options: ["To walk before", "To promise", "To establish law", "To protect the people"], answer: "To walk before" },
        { question: "What is the official title of Republic Act 8491?", options: ["NSTP Act of 2001", "Clean Air Act", "Flag and Heraldic Code of the Philippines", "Disaster Risk Reduction Act"], answer: "Flag and Heraldic Code of the Philippines" },
        { question: "According to RA 8491, which of these is NOT a fundamental symbol of the nation?", options: ["The Flag", "The National Anthem", "The Coat of Arms", "The National Hero"], answer: "The National Hero" },
        { question: "RA 10121 is also known as the:", options: ["Clean Water Act", "Philippine Disaster Risk Reduction and Management Act", "Environmental Awareness Act", "Ecological Solid Waste Management Act"], answer: "Philippine Disaster Risk Reduction and Management Act" },
        { question: "The law that promotes environmental awareness through education is:", options: ["RA 9512", "RA 9275", "RA 8749", "RA 9003"], answer: "RA 9512" },
        { question: "The Ecological Solid Waste Management Act of 2000 is also known as:", options: ["RA 9175", "RA 9003", "RA 8749", "RA 9275"], answer: "RA 9003" },
        { question: "What is the main objective of the Clean Air Act of 1999 (RA 8749)?", options: ["To regulate water pollution", "To manage solid waste", "To maintain healthy air quality for all Filipinos", "To protect endangered species"], answer: "To maintain healthy air quality for all Filipinos" },
        { question: "The Chainsaw Act of 2002 (RA 9175) was enacted to regulate:", options: ["The use of all power tools", "The ownership and use of chainsaws", "Logging in national parks", "The sale of lumber"], answer: "The ownership and use of chainsaws" },
        { question: "Republic Act 9165 is also known as the:", options: ["Clean Air Act", "Dangerous Drugs Act of 2002", "Anti-Terrorism Act", "Cybercrime Prevention Act"], answer: "Dangerous Drugs Act of 2002" },
        { question: "Which of the following is NOT classified as a gateway drug?", options: ["Cigarettes", "Alcohol", "Heroin", "Marijuana"], answer: "Heroin" },
        { question: "Which government agency is the primary enforcer of the Dangerous Drugs Act?", options: ["Philippine National Police (PNP)", "Philippine Drug Enforcement Agency (PDEA)", "National Bureau of Investigation (NBI)", "Armed Forces of the Philippines (AFP)"], answer: "Philippine Drug Enforcement Agency (PDEA)" },
        { question: "What concept is described as 'the right to life, liberty, and security of person'?", options: ["Civil Rights", "Political Rights", "Human Rights", "Social Rights"], answer: "Human Rights" },
        { question: "The Universal Declaration of Human Rights was proclaimed by which international body?", options: ["The World Bank", "The United Nations General Assembly", "The European Union", "ASEAN"], answer: "The United Nations General Assembly" },
        { question: "Which right is NOT included in the Universal Declaration of Human Rights?", options: ["Right to education", "Right to own property", "Right to asylum", "Right to disobey laws"], answer: "Right to disobey laws" },
        { question: "According to the pointers, which is NOT considered a threat to National Security?", options: ["Terrorism", "Rebellion or Insurrection", "Kidnapping", "Online dating"], answer: "Online dating" },
        { question: "The main goal of NSTP, as stated in the pointers, is Civic Consciousness and ____.", options: ["Economic Development", "Political Activism", "Defense Preparedness", "Cultural Preservation"], answer: "Defense Preparedness" },
        { question: "Who serves as the Commander-in-Chief of the Armed Forces of the Philippines?", options: ["The Chief Justice", "The Senate President", "The President of the Philippines", "The Secretary of National Defense"], answer: "The President of the Philippines" },
        { question: "Peace Education primarily promotes respect for human rights and ____ among nations.", options: ["Competition", "Tolerance", "Superiority", "Isolation"], answer: "Tolerance" },
        { question: "A 'Culture of Peace' (COP) is characterized by understanding, global cooperation, and ____.", options: ["Respect for diversity", "Uniformity of beliefs", "Military strength", "Economic dominance"], answer: "Respect for diversity" },
        { question: "Which of the following is NOT one of the 7 Human Security areas defined by the UNDP?", options: ["Food Security", "Health Security", "Mechanical Security", "Political Security"], answer: "Mechanical Security" },
        { question: "Rebellion, terrorism, and kidnapping are examples of ____ threats to national security.", options: ["External", "Economic", "Environmental", "Internal"], answer: "Internal" },
        { question: "What is the ability to influence, inspire, and guide others to achieve goals?", options: ["Management", "Authority", "Leadership", "Coercion"], answer: "Leadership" },
        { question: "Which of the following is a key trait of a Servant Leader?", options: ["Seeking power and control", "Making unilateral decisions", "Listening and empathy", "Managing budgets primarily"], answer: "Listening and empathy" },
        { question: "Which one is NOT a trait of a Servant Leader according to the review material?", options: ["Listening", "Empathy", "Budget/Finance Manager", "Building Community"], answer: "Budget/Finance Manager" },
        { question: "Which law mandates the integration of environmental education in school curricula?", options: ["RA 9003", "RA 8749", "RA 9512", "RA 10121"], answer: "RA 9512" },
        { question: "RA 9275 is also known as the:", options: ["Clean Air Act", "Clean Water Act of 2004", "Chainsaw Act", "Solid Waste Management Act"], answer: "Clean Water Act of 2004" },
        { question: "The 'wholeness of life where all can live with dignity' is a definition of:", options: ["Security", "Peace", "Freedom", "Justice"], answer: "Peace" },
        { question: "The UNDP's concept of Human Security focuses on protecting:", options: ["State borders", "Government institutions", "Individuals and communities", "National economies"], answer: "Individuals and communities" },
        { question: "The ____ component of NSTP is concerned with projects and activities for the general welfare of the community.", options: ["ROTC", "LTS", "CWTS", "NSRC"], answer: "CWTS" },
        { question: "Which part of the constitution recognizes the importance of the youth in building the nation?", options: ["Article II, Section 13", "Article III, Bill of Rights", "Preamble", "Article I, National Territory"], answer: "Article II, Section 13" },
        { question: "Terrorism is an example of what kind of threat to national security?", options: ["Social threat", "Political threat", "Internal threat", "External threat"], answer: "Internal threat" },
        { question: "The motto 'Maka-Diyos, Maka-tao, Makakalikasan at Makabansa' is established under which law?", options: ["RA 9163", "RA 10121", "RA 8491", "RA 9165"], answer: "RA 8491" },
        { question: "Which is an example of an external threat to national security?", options: ["Rebellion", "Espionage from another country", "Organized crime", "Graft and corruption"], answer: "Espionage from another country" },
        { question: "Drug abuse is primarily addressed by which Republic Act?", options: ["RA 9003", "RA 9165", "RA 8749", "RA 9275"], answer: "RA 9165" },
        { question: "Who are mandated to take one component of NSTP for two semesters?", options: ["All high school students", "All college students, male and female", "Only male college students", "Graduating students only"], answer: "All college students, male and female" },
        { question: "The Philippine Disaster Risk Reduction and Management Act of 2010 focuses on:", options: ["Response after disasters only", "Disaster prevention and mitigation", "International disaster relief", "Funding for disaster victims"], answer: "Disaster prevention and mitigation" },
        { question: "The right to form associations or societies for purposes not contrary to law is part of the:", options: ["Preamble", "Bill of Rights", "NSTP Act", "Flag Code"], answer: "Bill ofRights" },
        { question: "What does the 'S' in LTS stand for?", options: ["Service", "Security", "State", "Social"], answer: "Service" },
        { question: "Which human security area is concerned with protection from hunger and having physical and economic access to basic food?", options: ["Economic Security", "Health Security", "Food Security", "Personal Security"], answer: "Food Security" },
        { question: "The concept of 'servant leadership' prioritizes:", options: ["The leader's authority", "The organization's profits", "The needs of others", "The leader's personal success"], answer: "The needs of others" },
        { question: "The preamble of the constitution is an introductory statement that outlines the ____ of the government.", options: ["History and structure", "Powers and limitations", "Principles and purposes", "List of officials"], answer: "Principles and purposes" },
        { question: "Which program component of NSTP did the ROTC program replace for those who do not wish to join the military?", options: ["LTS and CWTS", "NSRC and LTS", "Only CWTS", "Only LTS"], answer: "LTS and CWTS" }
    ],
    intro_to_computing: [
         
        { question: "Which of the following is NOT one of the five main components of a computer?", options: ["Input Devices", "Output Devices", "System Unit", "Application Software"], answer: "Application Software" },
        { question: "A keyboard and a mouse are examples of what type of device?", options: ["Output", "Storage", "Input", "Communication"], answer: "Input" },
        { question: "The main circuit board of the system unit is the:", options: ["CPU", "RAM", "Motherboard", "Hard Drive"], answer: "Motherboard" },
        { question: "A worldwide collection of networks that links millions of businesses, government agencies, and individuals is called:", options: ["The World Wide Web", "An ISP", "The Internet", "A LAN"], answer: "The Internet" },
        { question: "System software and application software are the two main categories of computer:", options: ["Hardware", "Networks", "Software", "Processors"], answer: "Software" },
        { question: "Which type of computer is designed to be portable and can fit on your lap?", options: ["Server", "Mainframe", "Desktop Computer", "Laptop/Notebook Computer"], answer: "Laptop/Notebook Computer" },
        { question: "Supercomputers are primarily used for:", options: ["Personal banking", "Playing games", "Complex, sophisticated applications like weather forecasting", "Word processing"], answer: "Complex, sophisticated applications like weather forecasting" },
        { question: "The two main components of the CPU are the Control Unit and the ____.", options: ["RAM", "Motherboard", "ALU (Arithmetic Logic Unit)", "Cache"], answer: "ALU (Arithmetic Logic Unit)" },
        { question: "Which of the following is an example of an output device?", options: ["Scanner", "Microphone", "Printer", "Webcam"], answer: "Printer" },
        { question: "What does RAM stand for?", options: ["Read-Only Memory", "Random Access Memory", "Real-time Access Memory", "Remote Application Memory"], answer: "Random Access Memory" },
        { question: "What is the smallest unit of data a computer can process?", options: ["Byte", "Bit", "Kilobyte", "Gigabyte"], answer: "Bit" },
        { question: "How many bits make up one byte?", options: ["1", "4", "8", "16"], answer: "8" },
        { question: "Which type of memory loses its contents when the computer's power is turned off?", options: ["ROM", "Flash Memory", "RAM", "Cache"], answer: "RAM" },
        { question: "A network that covers a limited geographical area, such as a school or office, is called a:", options: ["WAN", "MAN", "LAN", "PAN"], answer: "LAN" },
        { question: "The set of rules that governs communication between computers on a network is called a:", options: ["Protocol", "Topology", "Firewall", "Server"], answer: "Protocol" },
        { question: "A program that allows you to access and view webpages, such as Chrome or Firefox, is called a:", options: ["Search Engine", "Web Server", "Web Browser", "Homepage"], answer: "Web Browser" },
        { question: "What does 'WWW' stand for?", options: ["Wide World Web", "World Wide Web", "Web World Wide", "Worldwide Website"], answer: "World Wide Web" },
        { question: "Which of the following is a popular search engine?", options: ["Microsoft Word", "Google", "Adobe Photoshop", "Facebook"], answer: "Google" },
        { question: "Buying and selling goods over the Internet is known as:", options: ["E-mail", "E-commerce", "Netiquette", "FTP"], answer: "E-commerce" },
        { question: "The code of acceptable behaviors users should follow while on the Internet is called:", options: ["Internet Law", "Cybersecurity", "Netiquette", "Protocol"], answer: "Netiquette" },
        { question: "Which type of software consists of programs designed to make users more productive?", options: ["System Software", "Utility Software", "Application Software", "Operating System"], answer: "Application Software" },
        { question: "Word processing, spreadsheet, and presentation software are examples of what category of software?", options: ["Business Software", "Graphics Software", "Communication Software", "Utility Software"], answer: "Business Software" },
        { question: "Which application is best suited for creating letters, reports, and other text-based documents?", options: ["Spreadsheet", "Database", "Word Processing", "Presentation"], answer: "Word Processing" },
        { question: "Microsoft Excel or Google Sheets are examples of which type of software?", options: ["Word Processing", "Spreadsheet", "Presentation", "Database"], answer: "Spreadsheet" },
        { question: "A collection of data organized in a manner that allows access, retrieval, and use of that data is a:", options: ["Spreadsheet", "Document", "Database", "Slide show"], answer: "Database" },
        { question: "Software provided for use, modification, and redistribution at no cost is called:", options: ["Shareware", "Freeware", "Open Source Software", "Packaged Software"], answer: "Open Source Software" },
        { question: "What is the primary function of an operating system?", options: ["To browse the internet", "To manage the computer's hardware and software resources", "To create documents", "To protect against viruses"], answer: "To manage the computer's hardware and software resources" },
        { question: "A small program that tells the operating system how to communicate with a specific device is called a:", options: ["Utility", "Compiler", "Driver", "Spooler"], answer: "Driver" },
        { question: "Which of the following is an example of an operating system?", options: ["Microsoft Office", "Windows 11", "Adobe Photoshop", "Google Chrome"], answer: "Windows 11" },
        { question: "A software application for retrieving, presenting, and traversing information resources on the World Wide Web is a:", options: ["Search Engine", "Web Browser", "Web Server", "ISP"], answer: "Web Browser" },
        { question: "The case that contains and protects the motherboard, hard disk drive, and other electronic components is the:", options: ["CPU", "System Unit", "RAM", "Adapter Card"], answer: "System Unit" },
        { question: "The processor, memory, and storage devices are housed in a box-like case called the:", options: ["System Unit", "CPU", "Motherboard", "Bus"], answer: "System Unit" },
        { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"], answer: "Central Processing Unit" },
        { question: "The component of the processor that directs and coordinates most of the operations in the computer is the:", options: ["ALU", "Register", "Control Unit", "Cache"], answer: "Control Unit" },
        { question: "The four basic operations of a processor (fetching, decoding, executing, and storing) are collectively called a:", options: ["System Clock", "Bus Cycle", "Machine Cycle", "Instruction Set"], answer: "Machine Cycle" },
        { question: "The binary system uses which two digits?", options: ["0 and 1", "1 and 2", "A and B", "On and Off"], answer: "0 and 1" },
        { question: "ASCII is an example of a:", options: ["Memory chip", "Coding scheme for representing data", "Type of processor", "Port"], answer: "Coding scheme for representing data" },
        { question: "Which type of memory is nonvolatile, meaning its contents are not lost when power is removed?", options: ["RAM", "Cache", "Virtual Memory", "ROM"], answer: "ROM" },
        { question: "A temporary storage area that helps speed up computer processes by storing frequently used instructions is:", options: ["RAM", "ROM", "Flash Memory", "Cache"], answer: "Cache" },
        { question: "A USB port is a common way to connect devices to a computer. What does USB stand for?", options: ["Universal Serial Bus", "Unified System Bus", "Universal System Block", "Unified Serial Block"], answer: "Universal Serial Bus" },
        { question: "The channel that allows various devices inside and attached to the system unit to communicate with each other is the:", options: ["Port", "Bus", "Bay", "Slot"], answer: "Bus" },
        { question: "Which of the following is a type of optical disc?", options: ["Hard disk", "USB flash drive", "DVD", "Memory card"], answer: "DVD" },
        { question: "A collection of related web pages is called a:", options: ["Website", "Homepage", "Search Engine", "Web Server"], answer: "Website" },
        { question: "The process of a computer receiving information from a server on the Internet is known as:", options: ["Uploading", "Downloading", "Streaming", "Browsing"], answer: "Downloading" },
        { question: "Software that performs functions specific to a business or industry is called:", options: ["Custom Software", "Packaged Software", "Shareware", "Freeware"], answer: "Custom Software" },
        { question: "Which component of the CPU performs arithmetic, comparison, and other operations?", options: ["Control Unit", "Register", "Bus Interface Unit", "Arithmetic Logic Unit (ALU)"], answer: "Arithmetic Logic Unit (ALU)" },
        { question: "A unique address for a webpage is called a:", options: ["IP Address", "Homepage", "URL (Uniform Resource Locator)", "Protocol"], answer: "URL (Uniform Resource Locator)" },
        { question: "The main page of a website is called the:", options: ["Index page", "Homepage", "Directory", "Root"], answer: "Homepage" },
        { question: "Which of these is a utility program?", options: ["Word Processor", "Web Browser", "File Manager", "Spreadsheet"], answer: "File Manager" },
        { question: "A 'Wizard' in a software application is a:", options: ["Security feature", "Help file", "Step-by-step guide for a task", "Programming tool"], answer: "Step-by-step guide for a task" }
    ]
};

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const subjectSelect = document.getElementById('subject-select');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');

const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const finalScoreText = document.getElementById('final-score-text');
const resultMessage = document.getElementById('result-message');
const resultIcon = document.getElementById('result-icon');

const correctAnswersEl = document.getElementById('correct-answers');
const incorrectAnswersEl = document.getElementById('incorrect-answers');
const scorePercentageEl = document.getElementById('score-percentage');

let currentSubject = '';
let allQuestions = [];
let currentQuizQuestions = [];
let answeredQuestions = [];
const questionsPerQuiz = 50;
let score = 0;
let currentQuestionIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    currentSubject = subjectSelect.value;
    allQuestions = [...quizData[currentSubject]];
    currentQuizQuestions = shuffleArray(allQuestions).slice(0, questionsPerQuiz);
    
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];

    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    nextBtn.classList.add('hidden');
    updateScoreDisplay();
    loadQuestion();
}

function loadQuestion() {
    // Reset options container
    optionsContainer.innerHTML = '';
    nextBtn.classList.add('hidden');

    const currentQuestion = currentQuizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn', 'btn', 'w-full', 'p-4', 'text-left', 'bg-white', 'border-2', 'border-slate-300', 'rounded-lg', 'hover:bg-slate-50', 'hover:border-blue-500');
        button.onclick = () => selectAnswer(button, option);
        optionsContainer.appendChild(button);
    });

    updateProgress();
}

function selectAnswer(button, selectedOption) {
    const currentQuestion = currentQuizQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    
    if (isCorrect) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }
    
    answeredQuestions.push({
        question: currentQuestion.question,
        selected: selectedOption,
        correctAnswer: currentQuestion.answer,
        isCorrect: isCorrect
    });

 
    Array.from(optionsContainer.children).forEach(btn => {
        if (btn.textContent === currentQuestion.answer) {
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });
    
    updateScoreDisplay();
    nextBtn.classList.remove('hidden');
}

function updateProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / currentQuizQuestions.length) * 100;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${currentQuizQuestions.length}`;
    progressBar.style.width = `${progressPercentage}%`;
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    finalScoreText.textContent = `Your final score is ${score} out of ${currentQuizQuestions.length}.`;
    
    const scorePercentage = Math.round((score / currentQuizQuestions.length) * 100);
    if (scorePercentage >= 80) {
        resultMessage.textContent = "Excellent work! You've mastered the material.";
        resultIcon.className = "fas fa-trophy text-6xl text-amber-400 mb-4";
    } else if (scorePercentage >= 50) {
        resultMessage.textContent = "Good job! A little more review and you'll be an expert.";
        resultIcon.className = "fas fa-medal text-6xl text-slate-400 mb-4";
    } else {
        resultMessage.textContent = "Keep studying! You can improve with a bit more practice.";
        resultIcon.className = "fas fa-book-open text-6xl text-orange-500 mb-4";
    }
    
    displayStatistics();
}

function displayStatistics() {
    const correctCount = answeredQuestions.filter(q => q.isCorrect).length;
    const incorrectCount = currentQuizQuestions.length - correctCount;
    const percentage = Math.round((correctCount / currentQuizQuestions.length) * 100);
    
    correctAnswersEl.textContent = correctCount;
    incorrectAnswersEl.textContent = incorrectCount;
    scorePercentageEl.textContent = `${percentage}%`;
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', showNextQuestion);
retryBtn.addEventListener('click', () => {
     startScreen.classList.remove('hidden');
     resultsScreen.classList.add('hidden');
});
