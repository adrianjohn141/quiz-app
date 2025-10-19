const quizData = {
    sts: [
        { question: "What does the Latin word 'scientia,' from which 'science' is derived, mean?", options: ["To invent", "To discover", "Knowledge", "Nature"], answer: "Knowledge" },
        { question: "Which concept refers to a systematic activity of organizing knowledge about the universe through observation and experimentation?", options: ["Technology", "Society", "Science", "Philosophy"], answer: "Science" },
        { question: "According to the modules, which of the following is NOT a primary characteristic of science?", options: ["It demands evidence", "It is a complex social activity", "It provides complete answers to all questions", "Scientific ideas are open to change"], answer: "It provides complete answers to all questions" },
        { question: "What is defined as the practical application of scientific results to develop tools, equipment, and techniques?", options: ["Philosophy", "Society", "Technology", "Ideology"], answer: "Technology" },
        { question: "The academic field of STS (Science, Technology, and Society) traces its roots to which historical period?", options: ["The Renaissance", "The Industrial Revolution", "The Interwar period and Cold War", "The Enlightenment"], answer: "The Interwar period and Cold War" },
        { question: "What is the primary goal of studying STS?", options: ["To become an expert in coding", "To memorize scientific formulas", "To bridge the gap between humanities and natural sciences", "To focus only on historical inventions"], answer: "To bridge the gap between humanities and natural sciences" },
        { question: "Which ancient civilization developed 'papyrus,' a revolutionary form of paper?", options: ["Mesopotamia", "Greece", "Rome", "Egypt"], answer: "Egypt" },
        { question: "The first known potter's wheel was used by which ancient civilization?", options: ["Chinese", "Egyptians", "Mesopotamians", "Greeks"], answer: "Mesopotamians" },
        { question: "Which of the following is one of China's 'Four Great Inventions'?", options: ["The Wheel", "Papyrus", "Gunpowder", "The Aqueduct"], answer: "Gunpowder" },
        { question: "The period known as the 'Golden Age of Science' and the rebirth of learning is called:", options: ["The Dark Ages", "The Renaissance", "The Industrial Revolution", "The Information Age"], answer: "The Renaissance" },
        { question: "Who is credited with inventing the printing press with movable metal type around 1455?", options: ["Leonardo da Vinci", "Galileo Galilei", "Johannes Gutenberg", "Isaac Newton"], answer: "Johannes Gutenberg" },
        { question: "The Industrial Revolution, which began in the 18th century, was primarily driven by the invention of the:", options: ["Computer", "Internet", "Steam Engine", "Telescope"], answer: "Steam Engine" },
        { question: "What is the Fourth Industrial Revolution characterized by?", options: ["The use of steam power", "The development of mass production", "A fusion of physical, digital, and biological technologies", "The invention of the printing press"], answer: "A fusion of physical, digital, and biological technologies" },
        { question: "What was the ancient system of writing used by early Filipinos in the pre-colonial period?", options: ["Cuneiform", "Hieroglyphics", "Baybayin", "Alibata"], answer: "Baybayin" },
        { question: "During the Spanish colonial era in the Philippines, science education was primarily introduced through:", options: ["Military training", "Public libraries", "Schools and universities established by Catholic orders", "Trade guilds"], answer: "Schools and universities established by Catholic orders" },
        { question: "Who is known as the 'Father of Philippine Pharmacy' for his work during the Spanish colonial period?", options: ["Dr. Jose Rizal", "Anacleto del Rosario", "Gregorio Zara", "Fe del Mundo"], answer: "Anacleto del Rosario" },
        { question: "During the American period, what institution was established as the primary research center in the Philippines?", options: ["Department of Science and Technology (DOST)", "University of the Philippines", "Bureau of Science", "National Research Council of the Philippines"], answer: "Bureau of Science" },
        { question: "President Ferdinand Marcos declared a 35-hectare lot in Bicutan, Taguig as the Philippine Science Community, which is now the site of the:", options: ["University of the Philippines Diliman", "Department of Health", "Department of Science and Technology (DOST)", "National Museum"], answer: "Department of Science and Technology (DOST)" },
        { question: "What is a 'paradigm shift' as described by Thomas Kuhn?", options: ["A minor correction to a scientific theory", "A gradual evolution of scientific thought", "A fundamental change in the basic concepts and practices of a scientific discipline", "A new technological invention"], answer: "A fundamental change in the basic concepts and practices of a scientific discipline" },
        { question: "The geocentric model, which places the Earth at the center of the universe, was proposed by which ancient civilization?", options: ["The Mayans", "The Chinese", "The Ancient Greeks", "The Egyptians"], answer: "The Ancient Greeks" },
        { question: "Who proposed the heliocentric model, which places the Sun at the center of the universe?", options: ["Ptolemy", "Aristotle", "Nicolaus Copernicus", "Isaac Newton"], answer: "Nicolaus Copernicus" },
        { question: "Charles Darwin's 'On the Origin of Species' introduced which groundbreaking theory?", options: ["Theory of Relativity", "Theory of Evolution by Natural Selection", "Big Bang Theory", "Psychoanalysis"], answer: "Theory of Evolution by Natural Selection" },
        { question: "The concept of 'survival of the fittest' is a key part of which intellectual revolution?", options: ["Copernican Revolution", "Freudian Revolution", "Darwinian Revolution", "Information Revolution"], answer: "Darwinian Revolution" },
        { question: "Sigmund Freud is the father of which field that studies the unconscious mind?", options: ["Behaviorism", "Psychoanalysis", "Cognitive Psychology", "Heliocentrism"], answer: "Psychoanalysis" },
        { question: "According to Freud, which part of the personality operates on the 'pleasure principle' and seeks immediate gratification?", options: ["The Ego", "The Superego", "The Id", "The Conscience"], answer: "The Id" },
        { question: "Which ancient Mesoamerican civilization was known for its advanced understanding of astronomy and complex calendar systems?", options: ["The Inca", "The Olmec", "The Maya", "The Aztec"], answer: "The Maya" },
        { question: "Ayurveda, a traditional system of medicine that is still practiced today, originated in which country?", options: ["China", "Japan", "India", "Egypt"], answer: "India" },
        { question: "Who is known as the 'Father of Optics' for his work on the intromission theory of light during the Islamic Golden Age?", options: ["Al-Khwarizmi", "Ibn Sina (Avicenna)", "Ibn al-Haytham", "Al-Biruni"], answer: "Ibn al-Haytham" },
        { question: "The term 'algorithm' is derived from the name of which Persian mathematician?", options: ["Ibn al-Haytham", "Omar Khayyam", "Muhammad ibn Musa al-Khwarizmi", "Al-Kindi"], answer: "Muhammad ibn Musa al-Khwarizmi" },
        { question: "Ancient Egyptian alchemists laid the foundation for which modern scientific field?", options: ["Biology", "Physics", "Chemistry", "Astronomy"], answer: "Chemistry" },
        { question: "In the pre-colonial Philippines, the Banaue Rice Terraces are a prime example of indigenous:", options: ["Written language", "Religious rituals", "Science and technology in agriculture", "Military fortification"], answer: "Science and technology in agriculture" },
        { question: "The Galleon Trade during the Spanish era facilitated the exchange of goods and ideas between the Philippines and:", options: ["China", "The Americas (via Mexico)", "India", "Japan"], answer: "The Americas (via Mexico)" },
        { question: "Who was the Filipino medical doctor who studied beriberi in infants in the Philippines?", options: ["Fe del Mundo", "Manuel S. Guerrero", "Leon Ma. Guerrero", "Anacleto del Rosario"], answer: "Manuel S. Guerrero" },
        { question: "Which Filipina scientist is famous for inventing a medical incubator made from indigenous and cheap materials?", options: ["Lourdes Cruz", "Fe del Mundo", "Aisa Mijeno", "Mari-Jo Ruiz"], answer: "Fe del Mundo" },
        { question: "The 'Balik Scientist Program' was established to:", options: ["Fund research for local scientists only", "Encourage Filipino scientists working abroad to return to the Philippines", "Provide scholarships for high school students", "Establish new science museums"], answer: "Encourage Filipino scientists working abroad to return to the Philippines" },
        { question: "What does DOST stand for in the Philippines?", options: ["Department of Science and Training", "Department of Social Technology", "Department of Science and Technology", "Division of Scientific Treatises"], answer: "Department of Science and Technology" },
        { question: "The term 'Filipinnovation' was coined to promote the Philippines as an:", options: ["Agricultural hub", "Innovation hub in Asia", "Ecotourism destination", "English-speaking nation"], answer: "Innovation hub in Asia" },
        { question: "What is the primary purpose of Project NOAH (Nationwide Operational Assessment of Hazards)?", options: ["Agricultural development", "Space exploration", "Disaster risk reduction and management", "Marine biology research"], answer: "Disaster risk reduction and management" },
        { question: "The Diwata-1 and Diwata-2 are examples of Philippine-made:", options: ["Weather balloons", "Research vessels", "Microsatellites", "Geothermal plants"], answer: "Microsatellites" },
        { question: "Who is the Filipino inventor known for inventing the Salamander Amphibious Tricycle?", options: ["Fe del Mundo", "Gregorio Zara", "Dominic Chung and his team", "Aisa Mijeno"], answer: "Dominic Chung and his team" },
        { question: "The theory that science is not purely objective and is influenced by social factors is known as:", options: ["Empiricism", "Positivism", "Social Constructivism", "Functionalism"], answer: "Social Constructivism" },
        { question: "Which intellectual revolution challenged the long-held belief that humans were separate from the rest of the animal kingdom?", options: ["Copernican", "Freudian", "Darwinian", "Information"], answer: "Darwinian" },
        { question: "The development of Cuneiform, the first system of writing, is credited to which civilization?", options: ["Egyptians", "Greeks", "Mesopotamians", "Chinese"], answer: "Mesopotamians" },
        { question: "The invention of the compass, a major navigational tool, was a contribution from which civilization?", options: ["Ancient Rome", "Ancient Greece", "Ancient China", "Ancient India"], answer: "Ancient China" },
        { question: "During which Philippine president's term was the Department of Science and Technology (DOST) established, replacing the NSTA?", options: ["Ferdinand Marcos", "Corazon Aquino", "Fidel V. Ramos", "Gloria Macapagal-Arroyo"], answer: "Corazon Aquino" },
        { question: "The 'Doctors to the Barrio' program, which made healthcare accessible to remote areas, was a key initiative during which presidency?", options: ["Corazon Aquino", "Fidel V. Ramos", "Joseph Estrada", "Benigno Aquino III"], answer: "Fidel V. Ramos" },
        { question: "The Philippine Clean Air Act of 1999 (RA 8749) was signed into law during which president's term?", options: ["Fidel V. Ramos", "Joseph Estrada", "Gloria Macapagal-Arroyo", "Rodrigo Duterte"], answer: "Joseph Estrada" },
        { question: "Gregorio Zara, a Filipino scientist, is known for inventing the:", options: ["Erythromycin", "Medical Incubator", "Videophone", "Banana Ketchup"], answer: "Videophone" },
        { question: "The theory of relativity, which includes the famous equation E=mc², was developed by:", options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"], answer: "Albert Einstein" },
        { question: "Acupuncture is a traditional medical practice that originated in:", options: ["India", "Japan", "China", "Korea"], answer: "China" }
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
        { question: "Which article of the Philippine Constitution states the duty of citizens to defend the State?", options: ["Article III", "Article II Section 4", "Article II Section 13", "The Preamble"], answer: "Article II Section 4" },
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
        { question: "The right to form associations or societies for purposes not contrary to law is part of the:", options: ["Preamble", "Bill of Rights", "NSTP Act", "Flag Code"], answer: "Bill of Rights" },
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
