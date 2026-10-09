/* =========================================================
   PLACEMENT CHARTS
========================================================= */


/* =========================================================
   GLOBAL CHART SETTINGS
========================================================= */

Chart.defaults.font.family = "Inter";

Chart.defaults.color = "#5b6472";

Chart.defaults.plugins.legend.labels.usePointStyle = true;


/* =========================================================
   YEAR-WISE PLACEMENT RATE
========================================================= */

const placementRateCanvas =
    document.getElementById("placementRateChart");


if (placementRateCanvas) {

    new Chart(
        placementRateCanvas,
        {

            type: "line",

            data: {

                labels: [
                    "2022",
                    "2023",
                    "2024",
                    "2025",
                    "2026"
                ],

                datasets: [

                    {

                        label: "Placement Rate (%)",

                        data: [
                            87.5,
                            88.5,
                            91.5,
                            93.6,
                            95
                        ],

                        borderWidth: 3,

                        tension: 0.4,

                        fill: true,

                        pointRadius: 5,

                        pointHoverRadius: 7

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    },

                    tooltip: {

                        callbacks: {

                            label: function(context) {

                                return (
                                    " Placement Rate: " +
                                    context.parsed.y +
                                    "%"
                                );

                            }

                        }

                    }

                },

                scales: {

                    y: {

                        beginAtZero: false,

                        min: 80,

                        max: 100,

                        ticks: {

                            callback: function(value) {

                                return value + "%";

                            }

                        }

                    }

                }

            }

        }
    );

}



/* =========================================================
   DEPARTMENT-WISE PLACEMENT
========================================================= */

const departmentCanvas =
    document.getElementById("departmentChart");


if (departmentCanvas) {

    new Chart(
        departmentCanvas,
        {

            type: "bar",

            data: {

                labels: [
                    "CSE",
                    "IT",
                    "ECE",
                    "EEE",
                    "MECH",
                    "CIVIL"
                ],

                datasets: [

                    {

                        label: "Placement Rate (%)",

                        data: [
                            97,
                            96,
                            93,
                            89,
                            86,
                            82
                        ],

                        borderRadius: 7,

                        borderSkipped: false

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,

                        max: 100,

                        ticks: {

                            callback: function(value) {

                                return value + "%";

                            }

                        }

                    }

                }

            }

        }
    );

}



/* =========================================================
   PACKAGE COMPARISON
========================================================= */

const packageCanvas =
    document.getElementById("packageChart");


if (packageCanvas) {

    new Chart(
        packageCanvas,
        {

            type: "bar",

            data: {

                labels: [
                    "Highest",
                    "Average",
                    "Lowest"
                ],

                datasets: [

                    {

                        label: "Package (LPA)",

                        data: [
                            24,
                            7.8,
                            3.2
                        ],

                        borderRadius: 8,

                        borderSkipped: false

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    },

                    tooltip: {

                        callbacks: {

                            label: function(context) {

                                return (
                                    " ₹" +
                                    context.parsed.y +
                                    " LPA"
                                );

                            }

                        }

                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,

                        ticks: {

                            callback: function(value) {

                                return "₹" + value;

                            }

                        }

                    }

                }

            }

        }
    );

}