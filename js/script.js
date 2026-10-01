/* =====================================================
   AN EXERCISE IN PATIENCE
   EXCAVATION SCRIPT
===================================================== */


/* =====================================================
   ARTIFACT DATA
===================================================== */

const artifacts = [

    {
        era: "EARLY SETTLEMENT",

        title: "The handled cup",

        material: "Fired clay · domestic vessel",

        description:
            "A small drinking cup with a repaired rim. The uneven surface suggests it was shaped and used by hand rather than made purely for display.",

        significance:
            "Domestic pottery gives archaeologists evidence about ordinary meals, craft traditions, household routines, and the repeated use of everyday objects.",

        lesson:
            "Patient attention notices the repair before it notices the object itself.",

        image: "cup"
    },


    {
        era: "COASTAL TRADE",

        title: "The blue glass bead",

        material: "Blue glass · personal ornament",

        description:
            "A small blue glass bead, polished smooth from manufacture and handling. Its color would have made it a noticeable personal ornament.",

        significance:
            "Glass beads can provide evidence of trade and cultural exchange because glassmaking materials, techniques, and finished objects could travel considerable distances.",

        lesson:
            "Patience can mean staying curious about something that initially seems insignificant.",

        image: "bead"
    },


    {
        era: "RIVER SETTLEMENT",

        title: "The bronze pin",

        material: "Bronze · fastening tool",

        description:
            "A narrow bronze pin with a rounded head and a worn surface. It may have been used to fasten clothing or another textile object.",

        significance:
            "Small metal fasteners help archaeologists reconstruct clothing, craft practices, and everyday personal belongings.",

        lesson:
            "Slow looking can turn a small mark into evidence of another person's daily life.",

        image: "pin"
    },


    {
        era: "BURIAL LAYER",

        title: "The shell pendant",

        material: "Worked shell · personal ornament",

        description:
            "A carefully shaped shell pendant with a drilled opening near its upper edge. The surface has been smoothed through repeated handling.",

        significance:
            "Personal ornaments can reveal information about identity, craft traditions, exchange networks, and the ways people chose to decorate themselves.",

        lesson:
            "Patience makes room for incomplete stories instead of forcing them to be complete.",

        image: "pendant"
    },


    {
        era: "HILL SETTLEMENT",

        title: "The stone spindle whorl",

        material: "Carved stone · textile tool",

        description:
            "A small carved stone disk with a central opening. It would have helped a spindle maintain its rotation while thread was being produced.",

        significance:
            "Spindle whorls provide evidence of textile production and reveal aspects of household labor, clothing, and economic activity.",

        lesson:
            "Repeated, quiet work can leave a deeper record than one dramatic event.",

        image: "whorl"
    },


    {
        era: "WORKSHOP LAYER",

        title: "The wooden comb",

        material: "Carved wood · personal tool",

        description:
            "A partially preserved wooden comb with several missing teeth. The remaining teeth show careful and deliberate carving.",

        significance:
            "Personal grooming tools offer a glimpse into ordinary routines and demonstrate how archaeologists can learn about daily life from seemingly simple objects.",

        lesson:
            "Patience is also the willingness to examine what remains.",

        image: "comb"
    }

];


/* =====================================================
   STATE
===================================================== */

let currentArtifact = 0;

let excavationTimer = null;


/* =====================================================
   ELEMENTS
===================================================== */

const modal =
    document.getElementById(
        "artifactModal"
    );


const title =
    document.getElementById(
        "artifactTitle"
    );


const era =
    document.getElementById(
        "artifactEra"
    );


const material =
    document.getElementById(
        "artifactMaterial"
    );


const description =
    document.getElementById(
        "artifactDescription"
    );


const significance =
    document.getElementById(
        "artifactSignificance"
    );


const lesson =
    document.getElementById(
        "patienceLesson"
    );


const illustration =
    document.getElementById(
        "artifactIllustration"
    );


const closeButton =
    document.getElementById(
        "closeModal"
    );


const continueButton =
    document.getElementById(
        "continueButton"
    );


const statusText =
    document.getElementById(
        "digStatus"
    );


const waitingText =
    document.getElementById(
        "waitingText"
    );


const collection =
    document.getElementById(
        "collectionDots"
    );


/* =====================================================
   FORCE MODAL CLOSED
===================================================== */

if (modal) {

    modal.hidden = true;

}


/* =====================================================
   SVG ARTIFACT ILLUSTRATIONS
===================================================== */

function createArtifactImage(type) {


    /* -----------------------------------------------
       CUP
    ------------------------------------------------ */

    if (type === "cup") {

        return `

        <svg viewBox="0 0 300 300">

            <ellipse
                cx="150"
                cy="245"
                rx="75"
                ry="15"
                fill="#8b6748"
                opacity=".2"
            />

            <path
                d="
                    M75 95
                    L225 95
                    L215 195
                    Q210 225 175 235
                    L125 235
                    Q90 225 85 195
                    Z
                "
                fill="#9b734e"
                stroke="#684b34"
                stroke-width="8"
            />

            <ellipse
                cx="150"
                cy="95"
                rx="75"
                ry="22"
                fill="#b78960"
                stroke="#684b34"
                stroke-width="8"
            />

            <path
                d="
                    M225 120
                    C280 110 280 185 220 180
                "
                fill="none"
                stroke="#684b34"
                stroke-width="13"
                stroke-linecap="round"
            />

            <path
                d="
                    M92 112
                    Q150 130 208 112
                "
                fill="none"
                stroke="#d0a375"
                stroke-width="5"
            />

            <!-- repair line -->

            <path
                d="
                    M107 92
                    L125 99
                    L141 94
                "
                fill="none"
                stroke="#d8c09c"
                stroke-width="5"
            />

        </svg>

        `;
    }


    /* -----------------------------------------------
       BLUE GLASS BEAD
    ------------------------------------------------ */

    if (type === "bead") {

        return `

        <svg viewBox="0 0 300 300">

            <ellipse
                cx="150"
                cy="240"
                rx="65"
                ry="15"
                fill="#6d6655"
                opacity=".2"
            />

            <circle
                cx="150"
                cy="145"
                r="67"
                fill="#477f9b"
                stroke="#315b70"
                stroke-width="8"
            />

            <circle
                cx="128"
                cy="120"
                r="18"
                fill="#8eb7c5"
                opacity=".7"
            />

            <circle
                cx="150"
                cy="145"
                r="20"
                fill="#315b70"
                opacity=".5"
            />

            <path
                d="
                    M106 185
                    Q150 215 194 185
                "
                fill="none"
                stroke="#9bc2ca"
                stroke-width="7"
                opacity=".65"
            />

        </svg>

        `;
    }


    /* -----------------------------------------------
       BRONZE PIN
    ------------------------------------------------ */

    if (type === "pin") {

        return `

        <svg viewBox="0 0 300 300">

            <ellipse
                cx="150"
                cy="250"
                rx="50"
                ry="10"
                fill="#645c4e"
                opacity=".2"
            />

            <circle
                cx="150"
                cy="65"
                r="32"
                fill="#8b6b3d"
                stroke="#5d482d"
                stroke-width="8"
            />

            <rect
                x="137"
                y="65"
                width="26"
                height="155"
                rx="12"
                fill="#a77e42"
                stroke="#5d482d"
                stroke-width="7"
            />

            <path
                d="
                    M150 85
                    L150 210
                "
                stroke="#d0a55b"
                stroke-width="5"
                opacity=".7"
            />

            <path
                d="
                    M138 220
                    Q150 238 162 220
                "
                fill="none"
                stroke="#5d482d"
                stroke-width="7"
            />

        </svg>

        `;
    }


    /* -----------------------------------------------
       SHELL PENDANT
    ------------------------------------------------ */

    if (type === "pendant") {

        return `

        <svg viewBox="0 0 300 300">

            <ellipse
                cx="150"
                cy="250"
                rx="75"
                ry="12"
                fill="#675c4d"
                opacity=".2"
            />

            <path
                d="
                    M150 48
                    C92 82 70 145 91 194
                    C107 231 136 245 150 250
                    C164 245 193 231 209 194
                    C230 145 208 82 150 48
                    Z
                "
                fill="#d4c4a2"
                stroke="#8d7655"
                stroke-width="8"
            />

            <circle
                cx="150"
                cy="82"
                r="15"
                fill="#b7a47d"
                stroke="#806947"
                stroke-width="6"
            />

            <path
                d="
                    M110 130
                    Q150 150 190 130
                "
                fill="none"
                stroke="#a58d67"
                stroke-width="5"
            />

            <path
                d="
                    M105 165
                    Q150 190 195 165
                "
                fill="none"
                stroke="#a58d67"
                stroke-width="5"
            />

            <path
                d="
                    M125 102
                    Q115 160 140 215
                "
                fill="none"
                stroke="#e8ddc6"
                stroke-width="7"
            />

        </svg>

        `;
    }


    /* -----------------------------------------------
       SPINDLE WHORL
    ------------------------------------------------ */

    if (type === "whorl") {

        return `

        <svg viewBox="0 0 300 300">

            <ellipse
                cx="150"
                cy="235"
                rx="80"
                ry="18"
                fill="#57534a"
                opacity=".2"
            />

            <circle
                cx="150"
                cy="145"
                r="82"
                fill="#777466"
                stroke="#504e47"
                stroke-width="8"
            />

            <circle
                cx="150"
                cy="145"
                r="25"
                fill="#514f48"
                stroke="#403e39"
                stroke-width="6"
            />

            <circle
                cx="150"
                cy="145"
                r="10"
                fill="#b0aa96"
            />

            <path
                d="
                    M150 72
                    L150 105
                "
                stroke="#a8a18d"
                stroke-width="8"
            />

            <path
                d="
                    M150 185
                    L150 218
                "
                stroke="#a8a18d"
                stroke-width="8"
            />

            <path
                d="
                    M77 145
                    L110 145
                "
                stroke="#a8a18d"
                stroke-width="8"
            />

            <path
                d="
                    M190 145
                    L223 145
                "
                stroke="#a8a18d"
                stroke-width="8"
            />

        </svg>

        `;
    }


    /* -----------------------------------------------
       WOODEN COMB
    ------------------------------------------------ */

    if (type === "comb") {

        return `

        <svg viewBox="0 0 300 300">

            <ellipse
                cx="150"
                cy="240"
                rx="90"
                ry="14"
                fill="#5d4a39"
                opacity=".2"
            />

            <rect
                x="65"
                y="75"
                width="170"
                height="90"
                rx="12"
                fill="#9b7049"
                stroke="#674b32"
                stroke-width="8"
            />

            <rect
                x="85"
                y="94"
                width="130"
                height="20"
                rx="8"
                fill="#b58a5b"
            />

            <!-- comb teeth -->

            <path
                d="
                    M75 163
                    L75 225
                    M93 163
                    L93 235
                    M111 163
                    L111 225
                    M129 163
                    L129 235
                    M147 163
                    L147 225
                    M165 163
                    L165 235
                    M183 163
                    L183 225
                    M201 163
                    L201 235
                    M219 163
                    L219 225
                "
                stroke="#674b32"
                stroke-width="10"
                stroke-linecap="round"
            />

            <!-- missing tooth -->

            <rect
                x="147"
                y="195"
                width="10"
                height="30"
                fill="#9b7049"
            />

        </svg>

        `;
    }


    return "";

}


/* =====================================================
   DISPLAY ARTIFACT
===================================================== */

function showArtifact() {

    if (
        currentArtifact >=
        artifacts.length
    ) {

        finishExcavation();

        return;

    }


    const artifact =
        artifacts[
            currentArtifact
        ];


    /*
       Text
    */

    era.textContent =
        artifact.era;


    title.textContent =
        artifact.title;


    material.textContent =
        artifact.material;


    description.textContent =
        artifact.description;


    significance.textContent =
        artifact.significance;


    lesson.textContent =
        artifact.lesson;


    /*
       REAL ILLUSTRATION

       The illustration is specifically
       generated for the artifact.
    */

    illustration.innerHTML =
        createArtifactImage(
            artifact.image
        );


    /*
       Mark this discovery.
    */

    currentArtifact++;


    updateCollection();


    /*
       Update status.
    */

    statusText.textContent =
        "ARTIFACT UNCOVERED";


    waitingText.textContent =
        "A discovery has emerged.";


    /*
       Open modal.
    */

    modal.hidden = false;


    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   COLLECTION DOTS
===================================================== */

function updateCollection() {

    collection.innerHTML = "";


    artifacts.forEach(
        function (
            artifact,
            index
        ) {

            const dot =
                document.createElement(
                    "span"
                );


            dot.className =
                "collection-dot";


            if (
                index <
                currentArtifact
            ) {

                dot.classList.add(
                    "found"
                );

            }


            collection.appendChild(
                dot
            );

        }
    );

}


/* =====================================================
   BEGIN HIDDEN WAIT
===================================================== */

function startExcavation() {


    /*
       Make absolutely certain
       the artifact modal is closed.
    */

    modal.hidden = true;


    document.body.style.overflow =
        "";


    /*
       Stop if all discoveries have
       happened.
    */

    if (
        currentArtifact >=
        artifacts.length
    ) {

        finishExcavation();

        return;

    }


    statusText.textContent =
        "LIVE EXCAVATION";


    waitingText.textContent =
        "Carefully clearing soil...";


    /*
       The user NEVER sees these values.

       There is deliberately:
       - no countdown
       - no progress bar
       - no percentage
       - no visible timer
    */

    const waitingTimes = [

        14000,

        19000,

        16000,

        23000,

        18000,

        25000

    ];


    if (excavationTimer) {

        clearTimeout(
            excavationTimer
        );

    }


    excavationTimer =
        setTimeout(
            function () {

                showArtifact();

            },

            waitingTimes[
                currentArtifact
            ]

        );

}


/* =====================================================
   CLOSE ARTIFACT
===================================================== */

function closeArtifact() {

    modal.hidden = true;


    document.body.style.overflow =
        "";


    /*
       Continue excavation after
       the user returns to the site.
    */

    if (
        currentArtifact <
        artifacts.length
    ) {

        startExcavation();

    }
    else {

        finishExcavation();

    }

}


/* =====================================================
   FINISH
===================================================== */

function finishExcavation() {

    if (excavationTimer) {

        clearTimeout(
            excavationTimer
        );

        excavationTimer = null;

    }


    modal.hidden = true;


    statusText.textContent =
        "EXCAVATION COMPLETE";


    waitingText.textContent =
        "Nothing more needs to be uncovered.";

}


/* =====================================================
   BUTTONS
===================================================== */

closeButton.addEventListener(
    "click",
    closeArtifact
);


continueButton.addEventListener(
    "click",
    closeArtifact
);


/* =====================================================
   CLICK OUTSIDE CARD
===================================================== */

modal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === modal
        ) {

            closeArtifact();

        }

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            !modal.hidden
        ) {

            closeArtifact();

        }

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

updateCollection();


/*
   IMPORTANT:

   The artifact does NOT appear here.

   We only begin the hidden waiting period.
*/

startExcavation();
