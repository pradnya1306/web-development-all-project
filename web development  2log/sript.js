eles = ["Preeti Thakur",
"Rupali Singh",
"Sathya",
"Gurpreet",
"SudhaRani",
"Preeti Ranolia",
"Ruchi Rajput",
"Pranjali Singh",
"Megha",
"Kamini Devi",
"Navya Shree",
"Shalini Singh",
"Jyoti Chauhan",
"shubhangi siddhapure",
"Pragathi reddy",
"Radhika Verma",
"Sarika",
"Dhanashree",
"Rubina",
"Pinky Jangir",
"Manjula GP",
"shaik shabeera begum",
"M.Sindhu",
"Divya Rajnal",
"Vedavathi",
"Shailaja Begari",
"Himani",
"Samridhi",
"Angel",
"Preeti Thapa.",
"Priya yadav",
"Deepa",
"Shirisha Dharavath",
"Tanjum",
"Muskan Singh",
"Anusha",
"Pravalika lavolla",
"Sowjanya",
"Pragna Dasari",
"Anjali malviya",
"Shireen Nazneen",
"Rasmita Dalai",
"Somi SIngh",
"Bhuvaneswari",
"Sukanya Mohanty",
"Rajitha",
"Swapna godam",
"Sheetal Devrani",
"Mannat",
"Truptimayee singh",
"Sradhanjali",
"Laxmipriya sasee",
"ashwini waghmare",
"Gulnaaz Nasrin",
"Sushree supriti rana",
"Aarti Behra",
"Subhashree Dash",
"Jayshri Ghodke",
"Muskan",
"Savithri mothukuru",
"Gouri Sharma",
"Srishti Suman",
"Laxmi Vadekar",
"Munjam Saipriya",
"Jyotirmayee mohanta",
"vishakha",
"Sunita bai",
"Sai jyotirmayee",
"Itishree rout",
"Sunita Devi",
"Geeta Sharma",
"Rekha bai",
"Pooja Rani",
"Sapna Nyol",
"Riya singh",
"Vandana",
"Renu Panchal",
"Priyanka Gill",
"Mamtha",
"Priyanka Pandey",
"Priyam",
"Arati",
"Sandhya bauddha",
"Bharti sain",
"Monalisa mishra",
"Subhadra parida",
"Anju",
"pratigya",
"Aarti kashyap",
"Priyanka kumari",
"Neetu sah",
"Purnima",
"Neha ",
"Soni ",
"Pooja ",
"shirisha surnapu",
"Shubh kirti",
"Preeti thakur",
"Neetu Kumari",
"jhansi polishetti"]


document.getElementById('h1').innerHTML=eles[0]
document.getElementById('h2').innerHTML=eles[1]

// If you want to choose next two person click on the Agla din button(update function) and choose randomly 2 persons and assign them

function update() {
    var i=Math.floor(Math.random()*eles.length)
    document.getElementById('h1').innerHTML=eles[i]
    var j=Math.floor(Math.random()*eles.length)
    document.getElementById('h2').innerHTML=eles[j]
}
