

    /*document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);
    console.log(new Date().toLocaleDateString("en-US", options));*/
    
    let daynames= [
        "sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurdsay",
        "Friday",
        "Satuday"
    ];

    let months = [
        "January",
        "Feburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
,    ]

        let d = new Date ();
        let dayname= dayname[d.getDay()];
        let monthname= momths[d.getMonth()];
        let fulldate = dayname + "," + monthname + "," + d.getDay() + "," + d.getFullYear();
        document.getElementById("currentdate").textContent=fulldate;