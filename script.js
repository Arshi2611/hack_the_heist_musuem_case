///screens
const caseAlertScreen = document.getElementById("caseAlertScreen");
const missionScreen = document.getElementById("missionScreen");
const desktopScreen = document.getElementById("desktopScreen");
const emailScreen = document.getElementById("emailScreen");
const photosScreen = document.getElementById("photosScreen");
const documentScreen = document.getElementById("documentScreen"); 
const loginScreen = document.getElementById("loginScreen");
const marketScreen = document.getElementById("marketScreen");
const NewEmails = document.getElementById("NewEmails");
const caseScreen = document.getElementById("caseScreen");

///buttons 
const proceedBtn = document.getElementById("proceedBtn");
const beginBtn = document.getElementById("beginBtn");
const DesBtn = document.getElementById("DesBtn");
const homeBtn = document.getElementById("homeBtn");
const DoneBtn = document.getElementById("Done");
///buttons from the desktop 
const employeeBtn = document.getElementById("employeeBtn");
const emailBtn = document.getElementById("emailBtn");
const photosBtn = document.getElementById("photosBtn");
const documentsBtn = document.getElementById("documentsBtn");
const loginBtn = document.getElementById("loginBtn");
const caseBtn = document.getElementById("caseBtn");
const logBtn = document.getElementById("logBtn");
///employees
const avaID = document.getElementById("avaID");
const lucyID = document.getElementById("lucyID");
const marcusID = document.getElementById("marcusID");
const elenaID = document.getElementById("elenaID");
const noahID = document.getElementById("noahID");
///employee files buttons
const avaBack = document.getElementById("avaBack");
const avaNext = document.getElementById("avaNext");
const lucyBack = document.getElementById("lucyBack");
const lucyNext = document.getElementById("lucyNext");
const marcusNext = document.getElementById("marcusNext");
const marcusBack = document.getElementById("marcusBack");
const elenaBack = document.getElementById("elenaBack");
const elenaNext = document.getElementById("elenaNext");
const noahBack = document.getElementById("noahBack");
const noahNext = document.getElementById("noahNext");


///internal screens 
const logScreen = document.getElementById("logScreen");
const employeeFilesScreen = document.getElementById("employeeFilesScreen");
const emailFolder = document.getElementById("emailFolder");
const photosFolder = document.getElementById("photosFolder");
const documentsFolder = document.getElementById("documentsFolder");
const loginFolder = document.getElementById("loginFolder");
const caseFolder = document.getElementById("caseFolder");

const splashScreen = document.getElementById("splashScreen");

setTimeout(() => {
    splashScreen.style.display = "none";
}, 10000);


/// notification
const notification = document.getElementById("notification");

function showNotification(message) {
  notification.textContent = message;
  notification.classList.remove("hidden");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 5000);
}

// Screen 1 → Screen 2
proceedBtn.addEventListener("click", () => {
  caseAlertScreen.classList.add("hidden");
  missionScreen.classList.remove("hidden");
 
});

// Screen 2 → Screen 3



homeBtn.addEventListener("click", () => {
  desktopScreen.classList.add("hidden");
  missionScreen.classList.add("hidden");
  caseAlertScreen.classList.remove("hidden");
  employeeFilesScreen.classList.add("hidden");
  logScreen.classList.add("hidden");
   


});

logBtn.addEventListener("click", () => {
  desktopScreen.classList.add("hidden");
  missionScreen.classList.add("hidden");
  caseAlertScreen.classList.add("hidden");
  logScreen.classList.remove("hidden");

});

DesBtn.addEventListener("click", () => {
  desktopScreen.classList.remove("hidden");
  missionScreen.classList.add("hidden");
  caseAlertScreen.classList.add("hidden");
  logScreen.classList.add("hidden");
  employeeFilesScreen.classList.add("hidden");
  photosScreen.classList.add("hidden");
  emailScreen.classList.add("hidden");
  documentScreen.classList.add("hidden");
  NewEmails.classList.add("hidden");
  attachmentScreen.classList.add("hidden");
    loginScreen.classList.add("hidden");
    unlisted.classList.add("hidden");
    caseScreen.classList.add("hidden");
  
});


beginBtn.addEventListener("click", () => {
    missionScreen.classList.add("hidden");
    desktopScreen.classList.remove("hidden");
    notesBtn.classList.remove("hidden");
    DesBtn.classList.remove("hidden");
     
});

employeeBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
    employeeFilesScreen.classList.remove("hidden");
   


});

emailBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
    emailFolder.classList.remove("hidden");
  

});

///next


avaNext.addEventListener("click", () => {
    avaID.classList.add("hidden");
    lucyID.classList.remove("hidden");
});

lucyNext.addEventListener("click", () => {
    lucyID.classList.add("hidden");
    marcusID.classList.remove("hidden");
}); 
marcusNext.addEventListener("click", () => {
    marcusID.classList.add("hidden");
    elenaID.classList.remove("hidden");
});
elenaNext.addEventListener("click", () => {
    elenaID.classList.add("hidden");
    noahID.classList.remove("hidden");
    emailFolder.classList.remove("locked");
    showNotification(" 1 piece of Evidence Unlocked within Emails");


}); 
noahNext.addEventListener("click", () => {
    noahID.classList.add("hidden");
    avaID.classList.remove("hidden");
});


///back

avaBack.addEventListener("click", () => {
    avaID.classList.add("hidden");
    noahID.classList.remove("hidden");
});

lucyBack.addEventListener("click", () => {
    lucyID.classList.add("hidden");
    avaID.classList.remove("hidden");
});

elenaBack.addEventListener("click", () => {
    elenaID.classList.add("hidden");
    marcusID.classList.remove("hidden");
});
noahBack.addEventListener("click", () => {
    noahID.classList.add("hidden");
    elenaID.classList.remove("hidden");
});     
marcusBack.addEventListener("click", () => {
    marcusID.classList.add("hidden");
    lucyID.classList.remove("hidden");
}); 


emailBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
    emailScreen.classList.remove("hidden");
});


DoneBtn.addEventListener("click", () => {
    emailScreen.classList.add("hidden");
    desktopScreen.classList.remove("hidden");
    DoneBtn.classList.add("hidden");
    showNotification("1 piece of Evidence Unlocked in Photos");
    photosFolder.classList.remove("locked");
    attachmentScreen.classList.add("hidden");
    
});

photosBtn.addEventListener("click", () => {
    photosScreen.classList.remove("hidden");
    desktopScreen.classList.add("hidden");
});
const metaBtn = document.getElementById("metaBtn");
const metaPanel = document.getElementById("metaPanel");

metaBtn.addEventListener("click", () => {
    metaBtn.classList.add("hidden");
    metaPanel.classList.remove("hidden");
    showNotification("1 piece of Evidence Unlocked in Documents");
    documentsFolder.classList.remove("locked");

});
const NewEmailFolder = document.getElementById("NewEmailFolder");

documentsBtn.addEventListener("click", () => {
    documentScreen.classList.remove("hidden");
    desktopScreen.classList.add("hidden");
    photosScreen.classList.add("hidden");
    emailScreen.classList.add("hidden");
    NewEmails.classList.add("hidden");

    // Unlock after 3 seconds
    setTimeout(() => {
        NewEmailFolder.classList.remove("locked");
        showNotification("New emails recovered.");
    }, 3000);
});
const newEmailBtn = document.getElementById("newEmailBtn");

newEmailBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
   NewEmails.classList.remove("hidden");
  

});
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underlineBtn = document.getElementById("underlineBtn");

const highlightColor = document.getElementById("highlightColor");

boldBtn.addEventListener("click", () => {
    document.execCommand("bold");
});

italicBtn.addEventListener("click", () => {
    document.execCommand("italic");
});

underlineBtn.addEventListener("click", () => {
    document.execCommand("underline");
});

highlightColor.addEventListener("input", () => {
    document.execCommand("hiliteColor", false, highlightColor.value);
});





const notesBtn = document.getElementById("notesBtn");
const notesPanel = document.getElementById("notesPanel");

notesBtn.addEventListener("click", () => {
    notesPanel.classList.toggle("open");
});



const viewAttachmentBtn = document.getElementById("viewAttachmentBtn");
const attachmentScreen = document.getElementById("attachmentScreen");

viewAttachmentBtn.addEventListener("click", () => {
    NewEmails.classList.add("hidden");
    attachmentScreen.classList.remove("hidden");
});

const metaBtn2 = document.getElementById("metaBtn2");
const metaPanel2 = document.getElementById("metaPanel2");

metaBtn2.addEventListener("click", () => {
    metaBtn2.classList.add("hidden");
    metaPanel2.classList.remove("hidden");
     
});


newEmailBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
    setTimeout(() => {
        loginFolder.classList.remove("locked");
        showNotification("Login Screen is now accessible.");
    }, 3000);
});


loginBtn.addEventListener("click", () => {
    loginScreen.classList.remove("hidden");
    desktopScreen.classList.add("hidden");
    
});


const loginSubmitBtn = document.getElementById("loginSubmit");

loginSubmitBtn.addEventListener("click", function () {

    const username = document.getElementById("usernameInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const loginError = document.getElementById("loginError");
    if (username === "E356098" && password === "Destiny45") {

        // Hide login screen
        loginScreen.classList.add("hidden");

        // Show the black market screen
        marketScreen.classList.remove("hidden");

    } else {

        loginError.classList.remove("hidden");

    }

});
const unlistBtn = document.getElementById("unlistItemBtn");
const unlisted = document.getElementById("unlisted");
unlistBtn.addEventListener("click", () => {
    marketScreen.classList.add("hidden");
    unlisted.classList.remove("hidden");
    caseFolder.classList.remove("locked");
    showNotification("Case report unlocked.");
});

caseBtn.addEventListener("click", () => {
    caseScreen.classList.remove("hidden");
    desktopScreen.classList.add("hidden");
});

const submitCaseBtn = document.getElementById("submitCaseBtn");
const caseResult = document.getElementById("caseResult");





submitCaseBtn.addEventListener("click", () => {
    const time = document.getElementById("timeAnswer").value.trim().toLowerCase();
    const location = document.getElementById("locationAnswer").value.trim().toLowerCase();
    const culprit = document.getElementById("culpritAnswer").value.trim().toLowerCase();
    const accomplice = document.getElementById("accompliceAnswer").value.trim().toLowerCase();

    const unlisted = document.querySelector('input[name="unlisted"]:checked');

const validTime =
    time === "7:06 pm-7:10 pm" ||
    time === "7:06pm-7:10pm" ||
    time === "7:06 pm - 7:10 pm";


    if (
        validTime &&
        location === "rohr park" &&
        culprit === "marcus reed" &&
        accomplice === "artdealer@protonmail.com" &&
        unlisted &&
        unlisted.value === "yes"
    ) {

        caseResult.classList.remove("hidden");
        caseResult.style.color = "#33cc66";

        caseResult.innerHTML = `
            <h3>CASE CLOSED</h3>
            <p>Excellent work, Detective.</p>

            Time of Theft Confirmed<br>
            Artifact Location Confirmed<br>
            Culprit Identified<br>
            Accomplice Identified<br>
            Black Market Listing Removed<br><br>

            The Golden Phoenix has been recovered and both suspects have been arrested.
        `;

    } else {

        caseResult.classList.remove("hidden");
        caseResult.style.color = "#ff5555";

        caseResult.innerHTML = `
            <h3>CASE INCOMPLETE</h3>
            <p>Your report contains one or more incorrect answers.</p>
            <p>Review the evidence and try again.</p>
        `;

    }

});const lucyNext = document.getElementById("lucyNext");
const marcusNext = document.getElementById("marcusNext");
const marcusBack = document.getElementById("marcusBack");
const elenaBack = document.getElementById("elenaBack");
const elenaNext = document.getElementById("elenaNext");
const noahBack = document.getElementById("noahBack");
const noahNext = document.getElementById("noahNext");


///internal screens 
const logScreen = document.getElementById("logScreen");
const employeeFilesScreen = document.getElementById("employeeFilesScreen");
const emailFolder = document.getElementById("emailFolder");
const photosFolder = document.getElementById("photosFolder");
const documentsFolder = document.getElementById("documentsFolder");
const loginFolder = document.getElementById("loginFolder");
const caseFolder = document.getElementById("caseFolder");

const splashScreen = document.getElementById("splashScreen");

setTimeout(() => {
    splashScreen.style.display = "none";
}, 10000);


/// notification
const notification = document.getElementById("notification");

function showNotification(message) {
  notification.textContent = message;
  notification.classList.remove("hidden");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 5000);
}

// Screen 1 → Screen 2
proceedBtn.addEventListener("click", () => {
  caseAlertScreen.classList.add("hidden");
  missionScreen.classList.remove("hidden");
 
});

// Screen 2 → Screen 3



homeBtn.addEventListener("click", () => {
  desktopScreen.classList.add("hidden");
  missionScreen.classList.add("hidden");
  caseAlertScreen.classList.remove("hidden");
  employeeFilesScreen.classList.add("hidden");
  logScreen.classList.add("hidden");
   


});

logBtn.addEventListener("click", () => {
  desktopScreen.classList.add("hidden");
  missionScreen.classList.add("hidden");
  caseAlertScreen.classList.add("hidden");
  logScreen.classList.remove("hidden");

});

DesBtn.addEventListener("click", () => {
  desktopScreen.classList.remove("hidden");
  missionScreen.classList.add("hidden");
  caseAlertScreen.classList.add("hidden");
  logScreen.classList.add("hidden");
  employeeFilesScreen.classList.add("hidden");
  photosScreen.classList.add("hidden");
  emailScreen.classList.add("hidden");
  documentScreen.classList.add("hidden");
  NewEmails.classList.add("hidden");
  attachmentScreen.classList.add("hidden");
    loginScreen.classList.add("hidden");
    unlisted.classList.add("hidden")
  
});


beginBtn.addEventListener("click", () => {
    missionScreen.classList.add("hidden");
    desktopScreen.classList.remove("hidden");
    notesBtn.classList.remove("hidden");
    DesBtn.classList.remove("hidden");
     
});

employeeBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
    employeeFilesScreen.classList.remove("hidden");
   


});

emailBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
    emailFolder.classList.remove("hidden");
  

});

///next


avaNext.addEventListener("click", () => {
    avaID.classList.add("hidden");
    lucyID.classList.remove("hidden");
});

lucyNext.addEventListener("click", () => {
    lucyID.classList.add("hidden");
    marcusID.classList.remove("hidden");
}); 
marcusNext.addEventListener("click", () => {
    marcusID.classList.add("hidden");
    elenaID.classList.remove("hidden");
});
elenaNext.addEventListener("click", () => {
    elenaID.classList.add("hidden");
    noahID.classList.remove("hidden");
    emailFolder.classList.remove("locked");
    showNotification(" 1 piece of Evidence Unlocked within Emails");


}); 
noahNext.addEventListener("click", () => {
    noahID.classList.add("hidden");
    avaID.classList.remove("hidden");
});


///back

avaBack.addEventListener("click", () => {
    avaID.classList.add("hidden");
    noahID.classList.remove("hidden");
});

lucyBack.addEventListener("click", () => {
    lucyID.classList.add("hidden");
    avaID.classList.remove("hidden");
});

elenaBack.addEventListener("click", () => {
    elenaID.classList.add("hidden");
    marcusID.classList.remove("hidden");
});
noahBack.addEventListener("click", () => {
    noahID.classList.add("hidden");
    elenaID.classList.remove("hidden");
});     
marcusBack.addEventListener("click", () => {
    marcusID.classList.add("hidden");
    lucyID.classList.remove("hidden");
}); 


emailBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
    emailScreen.classList.remove("hidden");
});


DoneBtn.addEventListener("click", () => {
    emailScreen.classList.add("hidden");
    desktopScreen.classList.remove("hidden");
    DoneBtn.classList.add("hidden");
    showNotification("1 piece of Evidence Unlocked in Photos");
    photosFolder.classList.remove("locked");
    attachmentScreen.classList.add("hidden");
    
});

photosBtn.addEventListener("click", () => {
    photosScreen.classList.remove("hidden");
    desktopScreen.classList.add("hidden");
});
const metaBtn = document.getElementById("metaBtn");
const metaPanel = document.getElementById("metaPanel");

metaBtn.addEventListener("click", () => {
    metaBtn.classList.add("hidden");
    metaPanel.classList.remove("hidden");
    showNotification("1 piece of Evidence Unlocked in Documents");
    documentsFolder.classList.remove("locked");

});
const NewEmailFolder = document.getElementById("NewEmailFolder");

documentsBtn.addEventListener("click", () => {
    documentScreen.classList.remove("hidden");
    desktopScreen.classList.add("hidden");
    photosScreen.classList.add("hidden");
    emailScreen.classList.add("hidden");
    NewEmails.classList.add("hidden");

    // Unlock after 3 seconds
    setTimeout(() => {
        NewEmailFolder.classList.remove("locked");
        showNotification("New emails recovered.");
    }, 3000);
});
const newEmailBtn = document.getElementById("newEmailBtn");

newEmailBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
   NewEmails.classList.remove("hidden");
  

});
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underlineBtn = document.getElementById("underlineBtn");

const highlightColor = document.getElementById("highlightColor");

boldBtn.addEventListener("click", () => {
    document.execCommand("bold");
});

italicBtn.addEventListener("click", () => {
    document.execCommand("italic");
});

underlineBtn.addEventListener("click", () => {
    document.execCommand("underline");
});

highlightColor.addEventListener("input", () => {
    document.execCommand("hiliteColor", false, highlightColor.value);
});





const notesBtn = document.getElementById("notesBtn");
const notesPanel = document.getElementById("notesPanel");

notesBtn.addEventListener("click", () => {
    notesPanel.classList.toggle("open");
});



const viewAttachmentBtn = document.getElementById("viewAttachmentBtn");
const attachmentScreen = document.getElementById("attachmentScreen");

viewAttachmentBtn.addEventListener("click", () => {
    NewEmails.classList.add("hidden");
    attachmentScreen.classList.remove("hidden");
});

const metaBtn2 = document.getElementById("metaBtn2");
const metaPanel2 = document.getElementById("metaPanel2");

metaBtn2.addEventListener("click", () => {
    metaBtn2.classList.add("hidden");
    metaPanel2.classList.remove("hidden");
     
});


newEmailBtn.addEventListener("click", () => {
    desktopScreen.classList.add("hidden");
    setTimeout(() => {
        loginFolder.classList.remove("locked");
        showNotification("Login Screen is now accessible.");
    }, 3000);
});


loginBtn.addEventListener("click", () => {
    loginScreen.classList.remove("hidden");
    desktopScreen.classList.add("hidden");
    
});


const loginSubmitBtn = document.getElementById("loginSubmit");

loginSubmitBtn.addEventListener("click", function () {

    const username = document.getElementById("usernameInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const loginError = document.getElementById("loginError");
    if (username === "E356098" && password === "Destiny45") {

        // Hide login screen
        loginScreen.classList.add("hidden");

        // Show the black market screen
        marketScreen.classList.remove("hidden");

    } else {

        loginError.classList.remove("hidden");

    }

});
const unlistBtn = document.getElementById("unlistItemBtn");
const unlisted = document.getElementById("unlisted");
unlistBtn.addEventListener("click", () => {
    marketScreen.classList.add("hidden");
    unlisted.classList.remove("hidden");
    caseFolder.classList.remove("locked");
    showNotification("Case report unlocked.");
});

caseBtn.addEventListener("click", () => {
    caseScreen.classList.remove("hidden");
    desktopScreen.classList.add("hidden");
});

const submitCaseBtn = document.getElementById("submitCaseBtn");
const caseResult = document.getElementById("caseResult");





submitCaseBtn.addEventListener("click", () => {
    const time = document.getElementById("timeAnswer").value.trim().toLowerCase();
    const location = document.getElementById("locationAnswer").value.trim().toLowerCase();
    const culprit = document.getElementById("culpritAnswer").value.trim().toLowerCase();
    const accomplice = document.getElementById("accompliceAnswer").value.trim().toLowerCase();

    const unlisted = document.querySelector('input[name="unlisted"]:checked');

const validTime =
    time === "7:06 pm-7:10 pm" ||
    time === "7:06pm-7:10pm" ||
    time === "7:06 pm - 7:10 pm";


    if (
        validTime &&
        location === "rohr park" &&
        culprit === "marcus reed" &&
        accomplice === "artdealer@protonmail.com" &&
        unlisted &&
        unlisted.value === "yes"
    ) {

        caseResult.classList.remove("hidden");
        caseResult.style.color = "#33cc66";

        caseResult.innerHTML = `
            <h3>CASE CLOSED</h3>
            <p>Excellent work, Detective.</p>

            Time of Theft Confirmed<br>
            Artifact Location Confirmed<br>
            Culprit Identified<br>
            Accomplice Identified<br>
            Black Market Listing Removed<br><br>

            The Golden Phoenix has been recovered and both suspects have been arrested.
        `;

    } else {

        caseResult.classList.remove("hidden");
        caseResult.style.color = "#ff5555";

        caseResult.innerHTML = `
            <h3>CASE INCOMPLETE</h3>
            <p>Your report contains one or more incorrect answers.</p>
            <p>Review the evidence and try again.</p>
        `;

    }

});
