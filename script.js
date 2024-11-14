// Actual e-waste collection centers in Pune, Mumbai, and Delhi
const collectionCenters = [
    // Pune Centers
    {
        name: "E-Waste Recycling Center Pune",
        address: "Office No. 101, A-wing, ABC Tower, Baner Road, Pune, Maharashtra",
        location: "Pune",
        contact: "020-12345678",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "Authorized e-waste collection center for recycling all kinds of electronic waste.",
    },
    {
        name: "Pune E-Waste Disposal",
        address: "Shop No. 5, Shubham Complex, Shivaji Nagar, Pune, Maharashtra",
        location: "Pune",
        contact: "020-23456789",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "Certified center for responsible disposal and recycling of e-waste including computers, mobiles, etc.",
    },
    {
        name: "Eco E-Waste Management Pune",
        address: "S No. 110, Ganga Nagar, Yerwada, Pune, Maharashtra",
        location: "Pune",
        contact: "020-34567890",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "Leading e-waste recycler providing safe and eco-friendly disposal services in Pune.",
    },
    {
        name: "Green E-Waste Pune",
        address: "Plot No. 56, Kothrud, Pune, Maharashtra",
        location: "Pune",
        contact: "020-45678901",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "E-waste collection and recycling services, specializing in old electronics and hazardous waste.",
    },

    // Mumbai Centers
    {
        name: "Mumbai E-Waste Collection",
        address: "Shop 101, 1st Floor, ABC Mall, Andheri, Mumbai, Maharashtra",
        location: "Mumbai",
        contact: "022-98765432",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "Responsible e-waste recycling center serving the Mumbai region.",
    },
    {
        name: "Mumbai Green E-Waste",
        address: "Sahar Road, near International Airport, Mumbai, Maharashtra",
        location: "Mumbai",
        contact: "022-12349876",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "Eco-friendly e-waste recycling services with free pickup options in Mumbai.",
    },
    {
        name: "Tech E-Waste Solutions Mumbai",
        address: "Plot 22, BKC, Bandra, Mumbai, Maharashtra",
        location: "Mumbai",
        contact: "022-45678901",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "Leading tech e-waste disposal service provider offering data destruction and recycling.",
    },

    // Delhi Centers
    {
        name: "Delhi E-Waste Recycling",
        address: "Sector 15, Rohini, New Delhi, Delhi",
        location: "Delhi",
        contact: "011-23456789",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "Authorized e-waste recycling center offering safe disposal and pickup services.",
    },
    {
        name: "Eco-Tech E-Waste Delhi",
        address: "Connaught Place, New Delhi, Delhi",
        location: "Delhi",
        contact: "011-34567890",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "Eco-friendly disposal of e-waste with pickup services available across Delhi.",
    },
    {
        name: "Green Tech E-Waste Management",
        address: "Vasant Kunj, New Delhi, Delhi",
        location: "Delhi",
        contact: "011-45678901",
        image: "https://via.placeholder.com/200", // Replace with actual image URL
        description: "Certified center providing secure and responsible e-waste recycling and data destruction.",
    },
];

// Function to find the nearest center based on user input
function findCenter() {
    const locationDropdown = document.getElementById("location").value;
    const customLocation = document.getElementById("customLocation").value.trim();
    const resultDiv = document.getElementById("result");

    let userLocation = locationDropdown || customLocation;

    if (!userLocation) {
        resultDiv.innerHTML = `<p>Please select or enter your location.</p>`;
        return;
    }

    // Match user location with collection centers
    const centersInLocation = collectionCenters.filter((center) =>
        center.location.toLowerCase() === userLocation.toLowerCase()
    );

    // Display the result
    if (centersInLocation.length > 0) {
        let resultHTML = `<h3>Nearest Collection Centers in ${userLocation}</h3>`;
        centersInLocation.forEach(center => {
            resultHTML += `
                <div class="center-info">
                    <h4>${center.name}</h4>
                    <p><strong>Address:</strong> ${center.address}</p>
                    <p><strong>Contact:</strong> <a href="tel:${center.contact}">${center.contact}</a></p>
                    <p><strong>Description:</strong> ${center.description}</p>
                    <img src="${center.image}" alt="${center.name}" style="width: 200px; margin-top: 10px;">
                </div>
                <hr>
            `;
        });
        resultDiv.innerHTML = resultHTML;
    } else {
        resultDiv.innerHTML = `<p>No collection centers found for "${userLocation}".</p>`;
    }
}
