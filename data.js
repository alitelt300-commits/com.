// ===== Edit data here =====
const doctors=[
 {"name": "Dr. Tarek Aboel", "course": "Math-3", "email": "t.hanafy@fci-cu.edu.eg"},
 {"name": "Dr. Ihab El-Khodary", "course": "Statistics-2", "email": "e.elkhodary@fci-cu.edu.eg"},
 {"name": "Dr. Dina Tarek", "course": "Logic Design", "email": "D.tarek@fci-cu.edu.eg"},
 {"name": "Dr. Eman Ahmed", "course": "Logic Design", "email": "e.ahmed@fci-cu.edu.eg"},
 {"name": "Dr. Mohamed Elramly", "course": "OOP", "email": "m.elramly@fci-cu.edu.eg"},
 {"name": "Dr. Haitham S. Hamza", "course": "Network", "email": "hhamza@fci-cu.edu.eg"},
 {"name": "Dr. Mohamed Hamed", "course": "Network", "email": "mnasrtaha@cu.edu.eg"},
 {"name": "Dr. Heba Sherif", "course": "Network", "email": "heba.sherif@fci-cu.edu.eg"},
 {"name": "Dr. Hayam", "course": "OR & DS", "email": "Hayam@fci-cu.edu.eg"},
 {"name": "Dr. Sally", "course": "OR & DS", "email": "s.kassem@fci-cu.edu.eg"},
 {"name": "Dr. Lamia", "course": "Software Engineering", "email": "l.abozaid@fci-cu.edu.eg"},
 {"name": "Dr. Sherif Zahran", "course": "Entrepreneurship", "email": "s.zahran@fci-cu.edu.eg"}
];
const admins=[
 {name:"Ali",role:"Admin",contact:"https://wa.me/201094025274",label:"WhatsApp · 01094025274"}
];

const L=(day,time,course,doc,A,B,note)=>({day,time,course,doc,A,B,note});
const IF="I. Farag Hall",AS="Al-Shafei Hall";
const lectures=[
 L("Saturday","09:30 - 11:00","Entrepreneurship","Dr. Sherif Zahran",IF,AS),
 L("Sunday","11:15 - 12:45","Probability & Statistics-2","Prof. Ehab El-Khodary",IF,AS),
 L("Sunday","12:45 - 02:15","Object Oriented Programming","Dr. Mohamed El-Ramly",IF,AS),
 L("Sunday","02:30 - 04:00","Mathematics-3","Prof. Tarek Aboel-Enin",IF,AS),
 L("Monday","08:00 - 09:30","Intro to Operations Research & Decision Support","Dr. Sally Kasem & Dr. Hayam Gamal",AS,IF),
 L("Tuesday","08:00 - 09:30","Probability & Statistics-2","Prof. Ehab El-Khodary",IF,AS),
 L("Tuesday","09:30 - 11:00","Computer Network Technology","Prof. Haitham Safwat, Prof. Mohamed Hamed & Dr. Heba El-Sherif",IF,AS),
 L("Tuesday","12:45 - 02:15","Mathematics-3","Prof. Tarek Aboel-Enin",IF,AS),
 L("Wednesday","11:15 - 12:45","Computer Network Technology","Prof. Haitham Safwat, Prof. Mohamed Hamed & Dr. Heba El-Sherif",AS,IF),
 L("Wednesday","12:45 - 02:15","Intro to Operations Research & Decision Support","Dr. Sally Kasem & Dr. Hayam Gamal",AS,IF),
 L("Thursday","12:45 - 02:15","Object Oriented Programming","Dr. Mohamed El-Ramly",IF,AS)
];
const other=[
 L("Monday","12:45 - 04:00","Logic Design","Dr. Eman Ahmed & Dr. Dina Tarek",AS,AS,"From the 'Second Level - Second' table"),
 L("Wednesday","08:00 - 11:00","Intro to Software Engineering","Dr. Lamia Abo Zaid","Exam. Room 409","Exam. Room 409","From the 'Second Level - Retakes' table")
];
