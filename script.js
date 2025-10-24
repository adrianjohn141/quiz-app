const quizData = {
    sts: [ // Keep existing STS questions here
        // ... (STS questions from previous interaction)
        { question: "What does the Latin word 'scientia,' from which 'science' is derived, mean?", options: ["To invent", "To discover", "Knowledge", "Nature"], answer: "Knowledge" },
        { question: "Which concept refers to a systematic activity of organizing knowledge about the universe through observation and experimentation?", options: ["Technology", "Society", "Science", "Philosophy"], answer: "Science" },
        { question: "Which of the following is NOT a primary characteristic of science?", options: ["It demands evidence", "It is a complex social activity", "It provides complete answers to all questions", "Scientific ideas are open to change"], answer: "It provides complete answers to all questions" },
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
        { question: "During the American period, what institution was established as the primary research center in the Philippines?", options: ["Department of Science and Technology (DOST)", "University of the Philippines", "Bureau of Science", "National Research Council of the Philippines"], answer: "Bureau ofScience" },
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
    hci: [ // Keep existing HCI questions here
        // ... (HCI questions from previous interaction)
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
    nstp: [ // Keep existing NSTP questions here
        // ... (NSTP questions from previous interaction)
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
    intro_to_computing: [ // Keep existing Intro to Computing questions here
        // ... (Intro to Computing questions from previous interaction)
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
    ],
    mmw: [ // Keep existing MMW questions here
        // ... (MMW questions from previous interaction)
         { question: "Which term describes an arrangement that helps observers anticipate, model, and understand reality?", options: ["Sequence", "Pattern", "Ratio", "Symmetry"], answer: "Pattern" },
        { question: "What type of pattern involves classifying objects based on characteristics or order, often seen in aptitude tests?", options: ["Number Patterns", "Logic Patterns", "Geometric Patterns", "Word Patterns"], answer: "Logic Patterns" },
        { question: "A sequence formed by adding or subtracting a constant value is called:", options: ["Geometric Sequence", "Fibonacci Sequence", "Arithmetic Sequence", "Quadratic Sequence"], answer: "Arithmetic Sequence" },
        { question: "What is the common difference in the arithmetic sequence 1, 3, 5, 7, 9?", options: ["1", "2", "3", "4"], answer: "2" },
        { question: "A sequence where each term is found by multiplying the previous term by a constant value is a:", options: ["Arithmetic Sequence", "Geometric Sequence", "Fibonacci Sequence", "Lucas Sequence"], answer: "Geometric Sequence" },
        { question: "What is the common ratio in the geometric sequence 4, 2, 1, 0.5?", options: ["2", "4", "0.5", "1"], answer: "0.5" },
        { question: "The sequence 1, 4, 9, 16, 25 consists of:", options: ["Prime Numbers", "Fibonacci Numbers", "Perfect Squares", "Odd Numbers"], answer: "Perfect Squares" },
        { question: "What type of pattern involves abstract shapes like lines and polygons repeating regularly?", options: ["Number Patterns", "Logic Patterns", "Geometric Patterns", "Word Patterns"], answer: "Geometric Patterns" },
        { question: "Which term describes a figure having symmetry if a non-trivial transformation maps it onto itself?", options: ["Ratio", "Sequence", "Pattern", "Symmetry"], answer: "Symmetry" },
        { question: "Bilateral symmetry means an object can be divided by an imaginary line into:", options: ["Three equal parts", "Two mirror images", "Four quadrants", "Multiple radial sections"], answer: "Two mirror images" },
        { question: "Radial symmetry occurs when an object looks the same after being rotated around a:", options: ["Horizontal axis", "Vertical axis", "Central point", "Diagonal line"], answer: "Central point" },
        { question: "What is the angle of rotation for an object with five-fold symmetry, like a starfish?", options: ["60°", "72°", "90°", "120°"], answer: "72°" },
        { question: "Patterns that emerge naturally from simple rules without a central planner are called:", options: ["Invoked Patterns", "Designed Patterns", "Self-Organized Patterns", "Artificial Patterns"], answer: "Self-Organized Patterns" },
        { question: "The V-formation of flying geese is an example of which type of pattern?", options: ["Invoked Pattern", "Symmetry", "Self-Organized Pattern", "Geometric Pattern"], answer: "Self-Organized Pattern" },
        { question: "The formula A = Pe^(rt) is used to model what kind of growth?", options: ["Linear Growth", "Arithmetic Growth", "Exponential Growth", "Quadratic Growth"], answer: "Exponential Growth" },
        { question: "The sequence 1, 1, 2, 3, 5, 8, 13... is known as the:", options: ["Lucas Sequence", "Arithmetic Sequence", "Geometric Sequence", "Fibonacci Sequence"], answer: "Fibonacci Sequence" },
        { question: "Who introduced the sequence where each number is the sum of the two preceding ones?", options: ["Isaac Newton", "Euclid", "Leonardo Pisano (Fibonacci)", "Pythagoras"], answer: "Leonardo Pisano (Fibonacci)" },
        { question: "What is the recursive formula for the Fibonacci sequence (for n ≥ 3)?", options: ["Fn = Fn-1 * Fn-2", "Fn = Fn-1 + Fn-2", "Fn = 2 * Fn-1", "Fn = n^2"], answer: "Fn = Fn-1 + Fn-2" },
        { question: "The ratio of consecutive Fibonacci numbers (Fn / Fn-1) approaches what value as n becomes large?", options: ["Pi (π)", "Euler's number (e)", "The Golden Ratio (φ)", "Zero (0)"], answer: "The Golden Ratio (φ)" },
        { question: "What is the approximate numerical value of the Golden Ratio (φ)?", options: ["3.141", "2.718", "1.618", "1.414"], answer: "1.618" },
        { question: "Which is NOT a characteristic of mathematical language?", options: ["Precise", "Concise", "Ambiguous", "Powerful"], answer: "Ambiguous" },
        { question: "In mathematics, '2x - 5' is an example of a(n):", options: ["Sentence", "Equation", "Expression", "Inequality"], answer: "Expression" },
        { question: "What acts as the 'verb' in the mathematical sentence 'ax + by = 3'?", options: ["a", "x", "+", "="], answer: "=" },
        { question: "Which symbol represents 'is an element of' in set theory?", options: ["⊂", "∪", "∩", "∈"], answer: "∈" },
        { question: "The set A = {x | x is a positive odd number} uses which method of description?", options: ["Roster Method", "Tabular Method", "Set Builder Notation", "Venn Diagram"], answer: "Set Builder Notation" },
        { question: "What is the cardinality of the set C = {a, e, i, o, u}?", options: ["26", "5", "1", "Infinite"], answer: "5" },
        { question: "A set with no elements is called the:", options: ["Universal Set", "Unit Set", "Power Set", "Empty Set (Null Set)"], answer: "Empty Set (Null Set)" },
        { question: "If A = {1, 2} and B = {a, b}, what is the Cartesian Product A × B?", options: ["{(1,a), (2,b)}", "{(1,a), (1,b), (2,a), (2,b)}", "{1, 2, a, b}", "{(a,1), (b,2)}"], answer: "{(1,a), (1,b), (2,a), (2,b)}" },
        { question: "A relation where each input (x-value) is paired with exactly one output (y-value) is a:", options: ["Set", "Cartesian Product", "Function", "Domain"], answer: "Function" },
        { question: "Given f(x) = x + 4, what is f(3)?", options: ["3", "4", "7", "1"], answer: "7" },
        { question: "What branch of logic deals with propositions (statements that are true or false)?", options: ["Set Theory", "Predicate Logic", "Propositional Logic", "Number Theory"], answer: "Propositional Logic" },
        { question: "Which logical connective represents 'AND'?", options: ["∨", "¬", "→", "∧"], answer: "∧" },
        { question: "What is the negation (¬p) of the proposition p: 'It is sunny'?", options: ["It is cloudy", "It is raining", "It is not sunny", "It is warm"], answer: "It is not sunny" },
        { question: "A compound proposition that is always true regardless of the truth values of its components is a:", options: ["Contradiction", "Contingency", "Tautology", "Equivalence"], answer: "Tautology" },
        { question: "What type of reasoning uses patterns and examples to make general conclusions?", options: ["Deductive", "Syllogistic", "Inductive", "Conditional"], answer: "Inductive" },
        { question: "Deductive reasoning moves from:", options: ["Specific to General", "General to Specific", "Observation to Hypothesis", "Analogy to Conclusion"], answer: "General to Specific" },
        { question: "A syllogism 'All men are mortal. Socrates is a man. Therefore, Socrates is mortal.' is an example of:", options: ["Inductive Reasoning", "Proof by Contradiction", "Deductive Reasoning", "Statistical Inference"], answer: "Deductive Reasoning" },
        { question: "What is the median of the dataset: 4, 8, 9, 12, 14, 21?", options: ["9", "12", "10.5", "11"], answer: "10.5" },
        { question: "Which measure of central tendency represents the most frequently occurring value?", options: ["Mean", "Median", "Mode", "Range"], answer: "Mode" },
        { question: "If a dataset has scores 10, 20, 20, 30, 70, what is the mode?", options: ["10", "20", "30", "No mode"], answer: "20" },
        { question: "Calculating a student's GPA based on grades and course units uses which type of mean?", options: ["Arithmetic Mean", "Geometric Mean", "Harmonic Mean", "Weighted Mean"], answer: "Weighted Mean" },
        { question: "Which measure of dispersion is calculated as the difference between the largest and smallest values?", options: ["Variance", "Standard Deviation", "Range", "Mean Deviation"], answer: "Range" },
        { question: "The standard deviation measures:", options: ["The average value", "The middle value", "The most frequent value", "The average spread of data around the mean"], answer: "The average spread of data around the mean" },
        { question: "A z-score indicates:", options: ["The percentile rank", "The number of standard deviations a value is from the mean", "The range of the data", "The mode of the data"], answer: "The number of standard deviations a value is from the mean" },
        { question: "In a normal distribution, what percentage of data lies within 1 standard deviation of the mean?", options: ["50%", "68%", "95%", "99.7%"], answer: "68%" },
        { question: "The standard normal distribution has a mean of ___ and a standard deviation of ___.", options: ["1, 0", "0, 1", "1, 1", "0, 0"], answer: "0, 1" },
        { question: "What does a correlation coefficient (r) close to +1 indicate?", options: ["Strong negative linear relationship", "Weak negative linear relationship", "Strong positive linear relationship", "No linear relationship"], answer: "Strong positive linear relationship" },
        { question: "Linear regression aims to find the:", options: ["Correlation coefficient", "Standard deviation", "Line of best fit for the data", "Median of the data"], answer: "Line of best fit for the data" },
        { question: "If a dataset is skewed to the left (negatively skewed), the tail is longer on which side?", options: ["Right", "Left", "Both sides equally", "Middle"], answer: "Left" }
    ],
    cc102: [ // Keep existing CC 102 questions here
        // ... (CC102 questions from previous interaction)
        { question: "Who designed the C++ programming language in 1985?", options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"], answer: "Bjarne Stroustrup" },
        { question: "What was the original name for C++?", options: ["C#", "Objective-C", "C with Classes", "Enhanced C"], answer: "C with Classes" },
        { question: "Is C++ a compiled or interpreted language?", options: ["Interpreted", "Compiled", "Both", "Neither"], answer: "Compiled" },
        { question: "What does IDE stand for in the context of programming?", options: ["Integrated Design Environment", "Internal Development Engine", "Integrated Development Environment", "Interface Design Engine"], answer: "Integrated Development Environment" },
        { question: "What does the `#include <iostream>` directive do in C++?", options: ["Declares variables", "Starts the main function", "Imports the input/output stream library", "Defines classes"], answer: "Imports the input/output stream library" },
        { question: "What is the primary function of `int main(void)` in a C++ program?", options: ["To define global variables", "To include header files", "To serve as the program's starting point", "To handle output formatting"], answer: "To serve as the program's starting point" },
        { question: "Which symbol terminates most C++ statements?", options: [", (comma)", "{ (curly brace)", "; (semicolon)", ": (colon)"], answer: "; (semicolon)" },
        { question: "What object is used with the `<<` operator to display output to the console?", options: ["cin", "cout", "main", "iostream"], answer: "cout" },
        { question: "What does `return 0;` typically signify at the end of the `main` function?", options: ["The program encountered an error", "The program is returning a value of 0", "The program exited normally", "The program needs to loop"], answer: "The program exited normally" },
        { question: "In C++, what is a variable?", options: ["A constant value", "A function name", "An abstraction of a memory location", "An output stream"], answer: "An abstraction of a memory location" },
        { question: "Which of the following is a valid variable name in C++?", options: ["1stName", "student Name", "student_name", "class"], answer: "student_name" },
        { question: "What is the data type used for whole numbers in C++?", options: ["float", "char", "string", "int"], answer: "int" },
        { question: "Which data type is used for single characters in C++?", options: ["int", "string", "char", "float"], answer: "char" },
        { question: "What is the purpose of the `cin` object in C++?", options: ["To display output", "To accept user input", "To declare variables", "To perform calculations"], answer: "To accept user input" },
        { question: "Which operator is used with `cin` to get input?", options: ["<< (insertion)", ">> (extraction)", "+ (addition)", "= (assignment)"], answer: ">> (extraction)" },
        { question: "What does the `%` operator do in C++?", options: ["Integer division", "Multiplication", "Calculates the remainder (modulo)", "Exponentiation"], answer: "Calculates the remainder (modulo)" },
        { question: "Which logical operator represents 'AND' in C++?", options: ["||", "!", "!=", "&&"], answer: "&&" },
        { question: "What is the result of the expression `5 < 10` in C++?", options: ["0 (false)", "1 (true)", "5", "10"], answer: "1 (true)" },
        { question: "How do you declare a variable `age` that can store whole numbers?", options: ["float age;", "char age;", "int age;", "string age;"], answer: "int age;" },
        { question: "To use the `string` object type, which header file should typically be included?", options: ["<iostream>", "<cmath>", "<string>", "<iomanip>"], answer: "<string>" }, // Note: <cstring> is for C-style string functions, <string> for std::string
        { question: "Which function is used to read an entire line of text (including spaces) into a `string` object?", options: ["cin >>", "cout <<", "getline(cin, var);", "cin.getline(var, size);"], answer: "getline(cin, var);" },
        { question: "Which function is used to compare two C-style character arrays (strings)?", options: ["compare()", "==", "strcomp()", "strcmp()"], answer: "strcmp()" },
        { question: "What statement is used to make decisions in C++ based on a condition?", options: ["while", "for", "if", "switch"], answer: "if" },
        { question: "In an `if(relational expression)`, what does the expression evaluate to?", options: ["An integer", "A floating-point number", "True or False (non-zero or zero)", "A character"], answer: "True or False (non-zero or zero)" },
        { question: "What is the purpose of the `else` block in an `if-else` statement?", options: ["To repeat the 'if' block", "To execute if the 'if' condition is true", "To execute if the 'if' condition is false", "To declare variables"], answer: "To execute if the 'if' condition is false" },
        { question: "Which operator is used to check for equality in a relational expression?", options: ["=", "==", ":=", "!="], answer: "==" },
        { question: "What does the expression `inpt % 2 == 0` check for?", options: ["If inpt is odd", "If inpt is positive", "If inpt is even", "If inpt is negative"], answer: "If inpt is even" },
        { question: "Which C++ statement allows selecting one of many code blocks based on the value of an expression?", options: ["if-else if", "while", "for", "switch"], answer: "switch" },
        { question: "What keyword is used to exit a `switch` block after a `case` is executed?", options: ["exit", "stop", "continue", "break"], answer: "break" },
        { question: "What does the `default` case in a `switch` statement do?", options: ["It's always executed first", "It executes if no other case matches", "It defines variables", "It exits the switch statement"], answer: "It executes if no other case matches" },
        { question: "Which loop structure evaluates the condition *before* entering the loop?", options: ["do-while", "while", "for", "switch"], answer: "while" },
        { question: "Which loop structure is generally more efficient for counter-controlled loops?", options: ["while", "do-while", "for", "if"], answer: "for" },
        { question: "What are the three parts inside the parentheses of a `for` loop, separated by semicolons?", options: ["Condition, Increment, Initialization", "Initialization, Condition, Change of State", "Change of State, Condition, Initialization", "Initialization, Body, Condition"], answer: "Initialization, Condition, Change of State" },
        { question: "What does the loop `for(;;)` create?", options: ["A loop that runs once", "A conditional loop", "An infinite loop", "A syntax error"], answer: "An infinite loop" },
        { question: "Which loop structure guarantees that the loop body will execute at least once?", options: ["for", "while", "if", "do-while"], answer: "do-while" },
        { question: "What is an array in C++?", options: ["A single variable", "A collection of homogeneous variables", "A type of function", "A decision statement"], answer: "A collection of homogeneous variables" },
        { question: "How are individual elements of an array accessed?", options: ["By name", "Using an index/subscript", "Through a pointer", "Sequentially only"], answer: "Using an index/subscript" },
        { question: "What is the index of the first element in a C++ array?", options: ["1", "0", "-1", "Depends on the size"], answer: "0" },
        { question: "If an array is declared as `int scores[10];`, what is the index of the last element?", options: ["10", "11", "9", "0"], answer: "9" },
        { question: "What does 'volatile' mean in the context of arrays mentioned in the module?", options: ["They are very fast", "Their contents are lost when the program ends", "They can change size dynamically", "They only store characters"], answer: "Their contents are lost when the program ends" },
        { question: "What is the purpose of type-casting, like `(float)sum / N;`?", options: ["To declare a variable", "To check for errors", "To force a calculation to result in a specific data type", "To print output"], answer: "To force a calculation to result in a specific data type" },
        { question: "What is the goal of a sequential search algorithm?", options: ["To sort the array", "To find the average", "To find a specific value within the array", "To find the highest value"], answer: "To find a specific value within the array" },
        { question: "Which sorting algorithm repeatedly compares adjacent elements and swaps them if they are in the wrong order?", options: ["Selection Sort", "Merge Sort", "Quick Sort", "Bubble Sort"], answer: "Bubble Sort" },
        { question: "In Selection Sort, where is the smallest (or largest) element placed after each pass through the unsorted part?", options: ["At the end", "In the middle", "At its correct sorted position", "In a temporary variable"], answer: "At its correct sorted position" },
        { question: "How is the median found in an array with an *even* number of elements after sorting?", options: ["It's the first element", "It's the last element", "It's the average of the two middle elements", "It's the element at index N/2"], answer: "It's the average of the two middle elements" },
        { question: "Which header file is needed for formatted output manipulators like `setw` and `setprecision`?", options: ["<iostream>", "<string>", "<cmath>", "<iomanip>"], answer: "<iomanip>" },
        { question: "What does `setw(10)` do?", options: ["Sets the precision to 10 decimal places", "Sets the minimum field width for the next output to 10", "Sets the variable 'w' to 10", "Fills empty space with 10 zeros"], answer: "Sets the minimum field width for the next output to 10" },
        { question: "Which manipulator is used to align output to the left within its field width?", options: ["right", "fixed", "left", "setfill"], answer: "left" },
        { question: "What does `fixed << setprecision(2)` achieve for floating-point output?", options: ["Outputs in scientific notation", "Outputs with exactly 2 digits total", "Outputs with a fixed width of 2", "Outputs with exactly 2 digits after the decimal point"], answer: "Outputs with exactly 2 digits after the decimal point" },
        { question: "What is the purpose of the `setfill('0')` manipulator?", options: ["To set precision to 0", "To fill unused space in a field width with zeros", "To replace all output with zeros", "To set the field width to 0"], answer: "To fill unused space in a field width with zeros" }
    ],
    // --- ADDED THE NEW SUBJECT AND QUESTIONS HERE ---
    tcw: [
        { question: "What best defines globalization?", options: ["Isolation of countries", "Interconnectedness of people worldwide", "Independence from other nations", "Limiting trade"], answer: "Interconnectedness of people worldwide" },
        { question: "Which term means cultures becoming more similar?", options: ["Glocalization", "Homogenization", "Heterogenization", "Localization"], answer: "Homogenization" },
        { question: "'Think globally, act locally' refers to:", options: ["Globalism", "Glocalization", "Isolationism", "Modernization"], answer: "Glocalization" },
        { question: "Martin Khor viewed globalization as:", options: ["Liberation", "Colonization", "Revolution", "Cooperation"], answer: "Colonization" },
        { question: "What is heterogenization?", options: ["Global cultures uniting", "Retaining cultural uniqueness", "Rejecting modernization", "Political isolation"], answer: "Retaining cultural uniqueness" },
        { question: "Economic globalization means:", options: ["Limiting trade", "Interdependence of world economies", "Isolating national markets", "Reducing technology"], answer: "Interdependence of world economies" },
        { question: "The Silk Road is known for:", options: ["Connecting Asia and Europe", "Being a war route", "A political treaty", "A modern highway"], answer: "Connecting Asia and Europe" },
        { question: "The Manila-Acapulco Galleon Trade connected the Philippines to:", options: ["Spain", "Mexico", "China", "USA"], answer: "Mexico" },
        { question: "Fiat money is:", options: ["Backed by gold", "Has no intrinsic value", "Made of silver", "A barter item"], answer: "Has no intrinsic value" },
        { question: "A company operating in several countries is a:", options: ["Local business", "Multinational corporation", "Domestic company", "Startup"], answer: "Multinational corporation" },
        { question: "The Treaty of Westphalia established:", options: ["Global trade", "State sovereignty", "Democracy", "Colonization"], answer: "State sovereignty" },
        { question: "Napoleon Bonaparte spread:", options: ["Democracy only", "Freedom, equality, fraternity", "Socialism", "Imperialism"], answer: "Freedom, equality, fraternity" },
        { question: "What is internationalism?", options: ["Cooperation among states", "Isolationism", "Colonization", "Local politics"], answer: "Cooperation among states" },
        { question: "The League of Nations was based on:", options: ["Socialist ideals", "Liberal internationalism", "Dictatorship", "Military alliances"], answer: "Liberal internationalism" },
        { question: "Who coined the term 'International'?", options: ["Immanuel Kant", "Jeremy Bentham", "Karl Marx", "Lenin"], answer: "Jeremy Bentham" },
        { question: "The UN was established in:", options: ["1918", "1939", "1945", "1950"], answer: "1945" },
        { question: "The main goal of the UN is to:", options: ["Promote global conflict", "Maintain peace and security", "Limit trade", "Create colonies"], answer: "Maintain peace and security" },
        { question: "WTO replaced:", options: ["GATT", "NATO", "ASEAN", "EU"], answer: "GATT" },
        { question: "Kyoto Protocol focused on:", options: ["Women's rights", "Trade laws", "Reducing CO emissions", "Disarmament"], answer: "Reducing CO emissions" },
        { question: "CEDAW promotes:", options: ["Women's equality", "Arms control", "Economic reform", "Free trade"], answer: "Women's equality" },
        { question: "Protectionism aims to:", options: ["Boost imports", "Protect local industries", "Remove tariffs", "Promote globalization"], answer: "Protect local industries" },
        { question: "Tariffs are:", options: ["Taxes on imports", "Government loans", "Exports", "Currencies"], answer: "Taxes on imports" },
        { question: "Immanuel Wallerstein's theory is:", options: ["Marxism", "World Systems Theory", "Game Theory", "Modernization Theory"], answer: "World Systems Theory" },
        { question: "Core countries are:", options: ["Economically dependent", "Poor and unstable", "Industrialized and wealthy", "Isolated"], answer: "Industrialized and wealthy" },
        { question: "The Philippines is part of the:", options: ["Core", "Semi-periphery", "Periphery", "North"], answer: "Semi-periphery" },
        { question: "ASEAN was founded in:", options: ["1967", "1975", "1984", "1999"], answer: "1967" },
        { question: "Which country is NOT an original ASEAN member?", options: ["Indonesia", "Philippines", "Brunei", "Thailand"], answer: "Brunei" },
        { question: "Regionalism means:", options: ["Political cooperation among neighbors", "Total independence", "Cultural isolation", "Free trade"], answer: "Political cooperation among neighbors" },
        { question: "Regionalization refers to:", options: ["Economic interaction", "Political alliance", "War formation", "Social division"], answer: "Economic interaction" },
        { question: "The main goal of ASEAN is:", options: ["War prevention", "Economic growth and stability", "Cultural dominance", "Territorial expansion"], answer: "Economic growth and stability" },
        { question: "Global North includes:", options: ["Africa", "Japan", "Brazil", "India"], answer: "Japan" },
        { question: "Global South includes:", options: ["USA", "Canada", "Philippines", "Germany"], answer: "Philippines" },
        { question: "The term Global South replaced:", options: ["East-West", "First, Second, Third World", "Cold War", "Globalization"], answer: "First, Second, Third World" },
        { question: "What separates North from South?", options: ["Geography", "Economic development", "Religion", "Language"], answer: "Economic development" },
        { question: "World inequality is caused by:", options: ["Equal trade", "Climate only", "Unequal resources and governance", "Similar growth"], answer: "Unequal resources and governance" },
        { question: "'Workers of the world unite!' was said by:", options: ["Lenin", "Marx & Engels", "Wilson", "Mazzini"], answer: "Marx & Engels" },
        { question: "The UN Secretary-General as of 2025 is:", options: ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Boutros Boutros-Ghali"], answer: "António Guterres" },
        { question: "Which treaty reduced trade barriers?", options: ["CEDAW", "GATT", "Kyoto", "NAM"], answer: "GATT" },
        { question: "Which organization manages international trade?", options: ["WTO", "WHO", "IMF", "NATO"], answer: "WTO" },
        { question: "Which of the following is NOT a goal of global governance?", options: ["Promote peace", "Increase inequality", "Ensure justice", "Develop standards"], answer: "Increase inequality" },
        { question: "Global catastrophic risk includes:", options: ["Economic stability", "Pandemics and nuclear war", "Trade growth", "Population decline"], answer: "Pandemics and nuclear war" },
        { question: "Poverty means:", options: ["Lack of money and basic needs", "Political instability", "Overpopulation", "Cultural change"], answer: "Lack of money and basic needs" },
        { question: "Population explosion causes:", options: ["More food security", "Resource depletion", "Peace", "Balanced growth"], answer: "Resource depletion" },
        { question: "Terrorism aims to:", options: ["Promote peace", "Coerce through violence", "Support governments", "Reduce migration"], answer: "Coerce through violence" },
        { question: "Environmental degradation results from:", options: ["Industrial growth", "Balanced consumption", "Overpopulation and pollution", "Green policies"], answer: "Overpopulation and pollution" },
        { question: "Which describes glocalization best?", options: ["Global ideas adapted locally", "Local ideas becoming global", "Isolation", "Colonization"], answer: "Global ideas adapted locally" },
        { question: "What is the opposite of free trade?", options: ["Globalization", "Protectionism", "Liberalization", "Cooperation"], answer: "Protectionism" },
        { question: "Who believed sovereignty prevents chaos among states?", options: ["Kant", "Bentham", "Marx", "Stalin"], answer: "Kant" }, // Note: Answer key says A (Kant), PDF text has Kant.
        { question: "The main principle of World Trade Organization is:", options: ["Free trade and dispute resolution", "War prevention", "Labor rights", "Migration"], answer: "Free trade and dispute resolution" },
        { question: "'Think globally, act locally' promotes:", options: ["Homogenization", "Glocalization", "Isolation", "Uniformity"], answer: "Glocalization" }
    ]
};

// --- Rest of the JavaScript code remains the same ---

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
const questionsPerQuiz = 50; // Keep this at 50 to match the number of questions per subject
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
    // Ensure allQuestions is populated correctly for the selected subject
    if (!quizData[currentSubject] || quizData[currentSubject].length === 0) {
        alert("No questions available for this subject yet!");
        return; // Stop if no questions
    }
    allQuestions = [...quizData[currentSubject]];
    // Ensure we don't try to slice more questions than available
    const numAvailableQuestions = allQuestions.length;
    // Adjust questionsPerQuiz to be the actual number of questions for the subject, up to 50
    const questionsToTake = Math.min(questionsPerQuiz, numAvailableQuestions);
    
    // If the subject has FEWER than 50 questions, take all of them.
    // If the subject has 50 or MORE, take exactly 50.
    // The new TCW subject has exactly 50, so this logic works.
    let questionsForThisQuiz = questionsToTake;
    
    // Special check: if a subject has *more* than 50, we still only take 50
    if (numAvailableQuestions >= questionsPerQuiz) {
        questionsForThisQuiz = questionsPerQuiz;
    } else {
        // if a subject has *fewer* than 50 (e.g. 49), we take all 49
        questionsForThisQuiz = numAvailableQuestions;
    }


    currentQuizQuestions = shuffleArray(allQuestions).slice(0, questionsForThisQuiz);

    // If fewer than 'questionsPerQuiz' are available, warn but proceed
    if (currentQuizQuestions.length < questionsPerQuiz && currentQuizQuestions.length > 0) {
        console.warn(`Only ${currentQuizQuestions.length} questions available for ${currentSubject}. Quiz length adjusted.`);
    }

    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];

    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    nextBtn.classList.add('hidden');
    updateScoreDisplay();
    // Check if there are any questions to load
    if (currentQuizQuestions.length > 0) {
      loadQuestion();
    } else {
      // This should ideally not be reached if the check at the start works
      console.error("Error: Could not load questions for the quiz.");
      startScreen.classList.remove('hidden');
      quizScreen.classList.add('hidden');
    }
}


function loadQuestion() {
    // Reset options container
    optionsContainer.innerHTML = '';
    nextBtn.classList.add('hidden');

    // Check if currentQuestionIndex is valid
    if (currentQuestionIndex >= currentQuizQuestions.length) {
        console.error("Attempted to load question index out of bounds.");
        showResults(); // Go to results if no more questions
        return;
    }

    const currentQuestion = currentQuizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        // Make sure base classes are always applied
        button.className = 'option-btn btn w-full p-4 text-left bg-white border-2 border-slate-300 rounded-lg hover:bg-slate-50 hover:border-blue-500';
        button.onclick = () => selectAnswer(button, option);
        optionsContainer.appendChild(button);
    });

    updateProgress();
}


function selectAnswer(button, selectedOption) {
     // Check if currentQuestionIndex is valid
    if (currentQuestionIndex >= currentQuizQuestions.length) {
        console.error("Attempted to answer question index out of bounds.");
        return; // Prevent errors if index is wrong
    }
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
        // Ensure btn.textContent is checked before adding class
        if (btn.textContent === currentQuestion.answer) {
             // Avoid adding 'correct' if it was already marked 'incorrect'
            if (!btn.classList.contains('incorrect')) {
                 btn.classList.add('correct');
            }
        }
        btn.disabled = true; // Disable all buttons after an answer is selected
    });

    updateScoreDisplay();
    nextBtn.classList.remove('hidden'); // Show next button
}


function updateProgress() {
    // Handle case where there might be 0 questions
    const totalQuestions = currentQuizQuestions.length;
    // Ensure totalQuestions is at least 1 to avoid division by zero if array is empty
    const totalQuestionsForCalc = totalQuestions > 0 ? totalQuestions : 1;
    
    const currentQNumber = currentQuestionIndex + 1;
    const progressPercentage = (currentQNumber / totalQuestionsForCalc) * 100;

    // Display the correct total number of questions for this specific quiz
    questionCounter.textContent = `Question ${currentQNumber}/${totalQuestions}`;
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

    // Handle case with 0 questions to avoid division by zero
    const totalQuestionsForResult = currentQuizQuestions.length > 0 ? currentQuizQuestions.length : 1;
    finalScoreText.textContent = `Your final score is ${score} out of ${currentQuizQuestions.length}.`;

    const scorePercentage = Math.round((score / totalQuestionsForResult) * 100);
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
     // Handle case with 0 questions
    const totalQuestionsForStats = currentQuizQuestions.length > 0 ? currentQuizQuestions.length : 1;
    const correctCount = answeredQuestions.filter(q => q.isCorrect).length;
    const incorrectCount = currentQuizQuestions.length - correctCount;
    const percentage = Math.round((correctCount / totalQuestionsForStats) * 100);

    correctAnswersEl.textContent = correctCount;
    incorrectAnswersEl.textContent = incorrectCount;
    scorePercentageEl.textContent = `${percentage}%`;
}


// Ensure event listeners are correctly assigned
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', showNextQuestion);
retryBtn.addEventListener('click', () => {
     // Reset quiz state variables if necessary before showing start screen
     currentQuestionIndex = 0;
     score = 0;
     answeredQuestions = [];
     currentQuizQuestions = []; // Clear current questions
     // Hide results and quiz screens, show start screen
     startScreen.classList.remove('hidden');
     quizScreen.classList.add('hidden');
     resultsScreen.classList.add('hidden');
     // Reset progress bar and score display visually if needed
     progressBar.style.width = `0%`;
     scoreDisplay.textContent = `Score: 0`;
     // Reset counter display to default
     questionCounter.textContent = `Question 1/50`;
});
