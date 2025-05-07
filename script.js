// --- Recipe Content Data ---
// This object stores the detailed content for each "recipe" modal.
const recipeDetails = {
    recipe1: {
        title: "Assessing the Current State",
        content: `
            <p>Understanding the existing urban context is the first step. This involves assessing resource flows, waste systems, and stakeholders.</p>
            <h4>Key Tools & Methods:</h4>
            <ul>
                <li><strong>Material Flow Analysis (MFA):</strong> Quantifies materials/energy entering, circulating, and exiting the city. Uses steps like defining boundaries, data acquisition, calculation, and interpretation (e.g., Sankey diagrams). Reveals inefficiencies and targets for intervention (e.g., high C&D waste). Example: REFLOW project mapped flows in 6 EU cities.</li>
                <li><strong>Urban Circularity Assessment (UCA):</strong> Builds on MFA, adding material stock accounting and circularity indicators (e.g., CityLoops project). Crucial for understanding material accumulation (e.g., in buildings).</li>
                <li><strong>Stakeholder Mapping & Analysis:</strong> Identifies actors, their interests, influence, and potential impact (e.g., using Power vs. Interest grids, Stakeholder Analysis Tables). Vital for targeted engagement and collaboration. Examples: CCRI, European Circular Economy Stakeholder Platform, DUT Partnership mapping.</li>
            </ul>
            <h4>Key Insights:</h4>
            <ul>
                <li>Comprehensive data on resource flows is critical.</li>
                <li>Adopting an "urban metabolism" perspective encourages integrated, systemic approaches.</li>
                <li>Success relies on both technology and active stakeholder engagement/social innovation.</li>
            </ul>
        `
    },
    recipe2: {
        title: "Identifying Opportunities",
        content: `
            <p>Once the context is understood, identify specific opportunities to integrate circular principles.</p>
            <h4>Key Opportunity Areas:</h4>
            <ul>
                <li><strong>Leveraging Overlooked Resources:</strong> Valuing material (polluted land, idle buildings) and non-material assets (local knowledge, labor) in informal settlements or "wastescapes". Integrating informal waste management can create jobs.</li>
                <li><strong>Applying Core CE Principles:</strong>
                    <ul>
                        <li><em>Eliminate waste/pollution:</em> Design out waste from the start.</li>
                        <li><em>Circulate products/materials:</em> Keep resources in use at highest value (e.g., material reuse centers, product-as-a-service models).</li>
                        <li><em>Regenerate nature:</em> Enhance natural systems (e.g., green infrastructure).</li>
                    </ul>
                </li>
                <li><strong>Focusing on the Built Environment:</strong> A critical sector due to high resource use/waste. Opportunities include material reuse, minimizing C&D waste (efficient design, selective demolition), enhancing energy efficiency, using recycled/low-impact materials.</li>
                <li><strong>Analyzing Urban Metabolism:</strong> Use data (e.g., from MFA) to target specific flows. High organic waste could lead to local composting or biogas facilities.</li>
            </ul>
            <h4>Key Insights:</h4>
            <ul>
                <li>Urban regeneration is a key chance to shift from linear ("take-make-dispose") to circular models.</li>
                <li>Circularity addresses interconnected environmental, social, and economic dimensions (green jobs, social inclusion, quality of life).</li>
            </ul>
        `
    },
     recipe3: {
        title: "Policy & Regulatory Landscape",
        content: `
            <p>Navigating relevant policies at EU, national, and regional levels is crucial for identifying enablers and barriers.</p>
            <h4>Key EU Frameworks:</h4>
            <ul>
                <li><strong>Circular Economy Action Plan (CEAP):</strong> Comprehensive strategy covering sectors like construction, waste, sustainable products. Guides local policy alignment and potential funding access. Emphasizes eco-design, waste prevention, secondary raw materials.</li>
                <li><strong>Waste Framework Directive (WFD):</strong> Sets specific targets for Construction & Demolition (C&D) waste recovery/recycling. Obliges cities to implement measures like selective demolition and improved sorting infrastructure.</li>
                <li><strong>EU Urban Agenda:</strong> Recognizes CE as key for urban quality of life. Encourages innovative solutions (reuse, repair, etc.) and provides a platform for collaboration and knowledge sharing among cities, countries, and the Commission.</li>
            </ul>
             <h4>National/Regional & Local Considerations:</h4>
             <ul>
                <li>Member states/regions often have specific CE strategies, targets, or funding that interact with EU frameworks. Understanding these is vital.</li>
                <li>Integration can be complex; may require combining policy support with grassroots initiatives.</li>
                <li><strong>Spatial Planning:</strong> Increasingly seen as critical for enabling CE (integrating principles into plans, zoning, building codes).</li>
            </ul>
             <h4>Key Insights:</h4>
            <ul>
                <li>Policy coherence across all governance levels (EU, national, regional, local) is paramount to avoid conflicting regulations and create an enabling environment.</li>
            </ul>
        `
    },
     recipe4: {
        title: "Practical Strategies & Pilot Projects",
        content: `
            <p>Implement concrete actions focusing on material reuse, waste reduction, and fostering circular businesses.</p>
            <h4>Promoting Material Reuse:</h4>
            <ul>
                <li><strong>Urban Reuse Centers / Material Banks:</strong> Hubs for collecting, processing, redistributing salvaged materials (e.g., Batitec store, Grenoble). Divert waste, support local CE.</li>
                <li><strong>Pre-Demolition Audits:</strong> Identify reusable materials within existing buildings before demolition.</li>
                <li><strong>Selective Demolition:</strong> Carefully dismantle buildings to recover high-quality materials for reuse. Requires expertise and handling systems.</li>
                <li><strong>Adaptive Reuse:</strong> Prioritize repurposing existing buildings to reduce new construction needs, conserve embodied energy, and preserve character.</li>
            </ul>
             <h4>Reducing Construction Waste:</h4>
             <ul>
                <li><strong>Robust Site Waste Management Protocols:</strong> Clear guidelines for sorting, adequate infrastructure, monitoring waste streams.</li>
                <li><strong>Digital Tools (BIM):</strong> Precise design/estimation minimizes waste; facilitates design for deconstruction.</li>
                <li><strong>Innovative Waste Use:</strong> Explore technologies converting C&D waste into new resources (e.g., waste minerals to cement). Support via R&D and procurement.</li>
            </ul>
             <h4>Fostering Local Circular Businesses:</h4>
             <ul>
                <li><strong>Support Ecosystem Development:</strong> Aid businesses in reuse, repair, refurbishment, recycling (business development assistance, funding access, enabling regulations).</li>
                <li><strong>Maker Spaces & Repair Cafes:</strong> Empower citizens, promote repair/reuse culture, support local businesses.</li>
                <li><strong>Circular Public Procurement:</strong> Leverage city purchasing power to create demand for circular products/services, providing stable markets.</li>
            </ul>
             <h4>Key Insights:</h4>
            <ul>
                <li>High C&D waste volume is both a challenge and a major opportunity.</li>
                <li>Integrating CE into planning from the outset is crucial for systemic change.</li>
                <li>Fostering local circular businesses boosts environmental, social, and economic well-being.</li>
            </ul>
        `
    },
     recipe5: {
        title: "Engaging Stakeholders",
        content: `
            <p>Effective engagement of diverse stakeholders is crucial for successful circular integration.</p>
            <h4>Methods & Tools:</h4>
            <ul>
                <li><strong>Participatory Planning Approaches:</strong> Involve citizens/community groups from the start (public workshops, charrettes) to foster ownership. Participatory budgeting (e.g., OmaStadi, Helsinki) empowers residents.</li>
                <li><strong>Multi-Stakeholder Platforms & Networks:</strong> Facilitate collaboration and knowledge exchange between government, business, research, civil society (e.g., Barcelona Green Hub). Break down silos, build trust, co-create solutions.</li>
                <li><strong>Stakeholder Mapping Tools:</strong> Identify key actors, understand interests/influence (Power vs. Interest grids, analysis tables) to develop targeted engagement strategies.</li>
                <li><strong>Digital Engagement Tools:</strong> Broaden participation (online forums, surveys, interactive platforms) complementing traditional methods.</li>
            </ul>
             <h4>Key Insights:</h4>
            <ul>
                <li>Lack of effective communication/awareness is a barrier; prioritize clear, transparent strategies.</li>
                <li>Growing recognition of the "Quadruple Helix" approach (academia, industry, government, civil society) for systemic change.</li>
                <li>Meaningful engagement leads to better-informed, widely supported, resilient projects and long-term sustainability.</li>
            </ul>
        `
    },
     recipe6: {
        title: "Innovative Financing & Business Models",
        content: `
            <p>Securing funding and adopting sustainable business models are critical for implementation and long-term viability.</p>
            <h4>Funding Opportunities:</h4>
            <ul>
                <li><strong>Public Funding & Grants:</strong> EU sources (ERDF, Horizon Europe, EIB), national, and regional programs. Requires active identification and alignment of proposals.</li>
                <li><strong>Private Investment:</strong> Attract by demonstrating economic viability, long-term returns (revenue from reuse, energy savings, new businesses). Needs compelling business plans.</li>
                <li><strong>Public-Private Partnerships (PPPs):</strong> Leverage strengths of both sectors for complex projects (e.g., HafenCity, Hamburg). Facilitates innovation, shares risk, ensures long-term sustainability. Requires clear agreements.</li>
            </ul>
             <h4>Sustainable Business Models:</h4>
             <ul>
                <li><strong>Product-as-a-Service (PaaS):</strong> Pay for use, not ownership.</li>
                <li><strong>Leasing & Sharing Platforms:</strong> Maximize resource utilization.</li>
                <li><strong>Reuse & Remanufacturing:</strong> Create value from used materials/products.</li>
                <li><em>Support Mechanisms:</em> Cities can offer incentives, infrastructure, awareness campaigns.</li>
            </ul>
             <h4>Key Insights:</h4>
            <ul>
                <li>Challenge the misconception that regeneration is solely public sector; highlight private investment potential.</li>
                <li>Emphasize the significant economic benefits of CE (revenue, cost savings, jobs) to attract funders.</li>
                <li>Transitioning unlocks economic opportunities while addressing environmental/social challenges.</li>
            </ul>
        `
    },
     recipe7: {
        title: "Embedding Circularity in Policies & Practices",
        content: `
            <p>Go beyond projects to embed CE principles into broader policies and practices for lasting impact.</p>
            <h4>Approaches for Structural Change:</h4>
            <ul>
                <li><strong>Integrated CE Strategies & Roadmaps:</strong> Develop long-term plans with clear vision, goals, targets, actions across sectors (learn from Amsterdam, Copenhagen). Involve stakeholders in development.</li>
                <li><strong>Cross-Departmental Collaboration:</strong> Integrate CE across relevant municipal departments (planning, economic development, environment, waste). Break down silos via working groups or dedicated officers.</li>
                <li><strong>Strong & Lasting Partnerships:</strong> Cultivate relationships between public sector, businesses, research, civil society. Enables knowledge sharing, resource pooling, risk management. Facilitate via networking, joint projects, formal agreements.</li>
                <li><strong>Embedding in Urban Planning:</strong> Integrate CE into spatial plans, zoning regulations (favoring circular activities), building codes (promoting adaptive reuse, recycled materials, design for deconstruction). Sends clear signals to developers/investors.</li>
            </ul>
             <h4>Key Insights:</h4>
            <ul>
                <li>Lack of cohesive strategic vision leads to fragmented actions; prioritize a clear long-term goal.</li>
                <li>Governance is key; cities must proactively create an enabling environment for all stakeholders.</li>
                <li>Embedding circularity leads to more resilient, sustainable, and prosperous urban environments long-term.</li>
            </ul>
        `
    },
     recipe8: {
        title: "Utilizing Existing Toolkits & Guidance",
        content: `
            <p>Leverage the wealth of existing toolkits and guidance from EU cities and organizations, adapting them to the local context.</p>
            <h4>Key Resources & Frameworks:</h4>
            <ul>
                <li><strong>Circular City Centre (C3):</strong> EIB initiative offering resources, practical info, advisory services, funding awareness.</li>
                <li><strong>ICLEI's Circular City Actions Framework:</strong> Practical structure based on 5 strategies: Rethink, Regenerate, Reduce, Reuse, Recover. Guides project alignment with CE principles.</li>
                <li><strong>Circular Cities Declaration (CCD) Report:</strong> ICLEI & Ellen MacArthur Foundation analysis of practices across European cities. Highlights trends, solutions, challenges for peer learning.</li>
            </ul>
             <h4>Key Insights:</h4>
            <ul>
                <li>Growing body of knowledge means cities don't need to reinvent the wheel.</li>
                <li>Crucial to adapt toolkits to the specific local context (challenges, opportunities, stakeholders, resource flows, socio-economics).</li>
                <li>Sharing toolkits/best practices accelerates the overall transition via collaborative learning.</li>
            </ul>
        `
    },
     recipe9: {
        title: "Addressing Challenges & Mitigating Risks",
        content: `
            <p>Be aware of potential challenges ("allergen alerts") and prepare mitigation strategies.</p>
            <h4>Common Challenges & Mitigation:</h4>
            <ul>
                <li><strong>Resistance to Change (from established actors):</strong> <em>Mitigation:</em> Early engagement, clear communication of benefits, training/support.</li>
                <li><strong>Stakeholder Coordination Complexity (diverse/conflicting interests):</strong> <em>Mitigation:</em> Clear governance, multi-stakeholder platforms, facilitation, mapping tools.</li>
                <li><strong>Lack of Expertise/Knowledge:</strong> <em>Mitigation:</em> Training/capacity building, partnerships (research/consultants), use existing toolkits.</li>
                <li><strong>Financial Barriers (upfront costs):</strong> <em>Mitigation:</em> Explore diverse funding (public/private), strong business cases, innovative financing (PPPs).</li>
                <li><strong>Policy/Regulatory Gaps (linear economy focus):</strong> <em>Mitigation:</em> Policy advocacy, pilot projects, flexible interpretation of rules.</li>
                <li><strong>Lack of Reliable Data / Measurement Difficulty:</strong> <em>Mitigation:</em> Invest in data systems (MFA/UCA), establish clear KPIs, transparent monitoring.</li>
            </ul>
             <h4>Key Insights:</h4>
            <ul>
                <li>Purely business/technocentric approaches may miss local specificities; context-specific, socially inclusive approaches needed.</li>
                <li>Be aware of potential trade-offs between different CE strategies.</li>
                <li>Requires long-term commitment, adaptability, and a collaborative approach.</li>
            </ul>
        `
    },
     recipe10: {
        title: "Measuring Impact & Success",
        content: `
            <p>Establish effective methods to measure impact, track progress, and demonstrate value.</p>
            <h4>Measurement Guidance:</h4>
            <ul>
                <li><strong>Develop Clear Key Performance Indicators (KPIs):</strong> Align with project objectives and CE principles. Cover environmental (waste reduction, reuse rates, energy efficiency), social (job creation, community well-being), and economic (cost savings, business growth) aspects. Allows monitoring and transparent communication.</li>
                <li><strong>Utilize Material Flow Analysis (MFA):</strong> Conduct before/after interventions to quantitatively assess changes in resource consumption and waste generation. Provides data-driven evidence.</li>
                <li><strong>Conduct Life Cycle Assessments (LCAs):</strong> Understand comprehensive environmental impacts of strategies throughout their lifecycle. Helps identify most sustainable options and avoid unintended consequences (e.g., comparing recycled vs. virgin materials).</li>
                <li><strong>Measure Social & Economic Impacts:</strong> Assess job creation in CE sectors, community well-being (surveys), economic performance of circular businesses. Ensures holistic view aligned with sustainable development goals.</li>
            </ul>
             <h4>Key Insights:</h4>
            <ul>
                <li>Lack of common metrics across cities hinders comparability; work towards standardization is needed.</li>
                <li>Growing need to shift focus from downstream (recycling) to upstream targets (material use, consumption emissions).</li>
                <li>Transparent measurement and reporting build trust, demonstrate accountability, and make the case for continued investment.</li>
            </ul>
        `
    }
};

// --- Core JavaScript Functions ---

// Mobile Menu Toggle
// Get references to the mobile menu button and the mobile menu itself.
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Add an event listener to the button for 'click' events.
if (mobileMenuButton && mobileMenu) { // Check if elements exist to prevent errors
    mobileMenuButton.addEventListener('click', () => {
        // Toggle the 'hidden' class on the mobile menu to show/hide it.
        // The 'hidden' class is likely a utility class (e.g., from Tailwind CSS) that sets 'display: none;'.
        mobileMenu.classList.toggle('hidden');
    });
}


// Fade-in animation on scroll
// Select all elements with the class 'fade-in' that should have the animation.
const fadeInSections = document.querySelectorAll('.fade-in');

// Configuration options for the Intersection Observer.
const observerOptions = {
    root: null, // Observes intersections relative to the viewport.
    rootMargin: '0px', // No margin around the root.
    threshold: 0.1 // Trigger when 10% of the element is visible.
};

// Create a new Intersection Observer.
// The callback function is executed whenever an observed element intersects with the root.
const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
        // If the element is intersecting (visible in the viewport based on the threshold).
        if (entry.isIntersecting) {
            // Add the 'visible' class to the element to trigger the CSS transition.
            entry.target.classList.add('visible');
            // Optional: Stop observing the element once it has become visible to save resources.
            // observerInstance.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe each 'fade-in' section.
fadeInSections.forEach(section => {
    observer.observe(section);
});


// --- Interactive Element Functions (Card Level) ---

// Recipe 1: Animate Sankey-like flows
// This function animates the width of two "flow" elements to simulate a Sankey diagram.
function animateFlows() {
    const flow1 = document.getElementById('flow1');
    const flow2 = document.getElementById('flow2');

    if (flow1 && flow2) { // Check if elements exist
        // Reset width to 0%
        flow1.style.width = '0%';
        flow2.style.width = '0%';

        // After a short delay (100ms), set width to 100% to trigger CSS transition.
        setTimeout(() => {
            flow1.style.width = '100%';
            flow2.style.width = '100%';
        }, 100);
    }
}

// Trigger flow animation if the "starters" section is already visible on page load.
// This is useful if the user loads the page scrolled down or the section is near the top.
document.addEventListener('DOMContentLoaded', () => {
     const startersSection = document.getElementById('starters');
     if (startersSection && startersSection.getBoundingClientRect().top < window.innerHeight) {
         // Delay the animation slightly to ensure elements are rendered.
         setTimeout(animateFlows, 500);
     }
});


// Recipe 2: Show Opportunity Details
// Get a reference to the div where opportunity details will be displayed.
const opportunityDetails = document.getElementById('opportunity-details');

// This function updates the content of 'opportunityDetails' based on the type clicked.
function showOpportunity(type) {
    if (opportunityDetails) { // Check if element exists
        const details = {
            buildings: 'Reuse materials, adaptive reuse, efficient design, circular building materials, and design for deconstruction are key strategies for the built environment.',
            waste: 'Local composting facilities, establishing material reuse centers, improving waste sorting infrastructure, and promoting industrial symbiosis can transform waste streams into resources.',
            spaces: 'Urban farming projects, developing community hubs in vacant lots, creating green infrastructure corridors, and implementing nature-based solutions can revitalize underutilized spaces.'
        };
        // Set the text content of the details div. If type is not found, show a default message.
        opportunityDetails.textContent = details[type] || 'Select an area to see more details.';
        // Remove the 'hidden' class to make the details div visible.
        opportunityDetails.classList.remove('hidden');
    }
}


// Recipe 3: Tab Switching for Policy Section
// This function handles switching between tabs in the policy section.
function showTab(tabContainerIdUnused, buttonElement, tabIdToShow) {
    // 'tabContainerIdUnused' is not actually used in this implementation,
    // as DOM traversal is used from the buttonElement.

    // Get all tab buttons within the same parent as the clicked button.
    const buttons = buttonElement.parentElement.querySelectorAll('.tab-button');
    // Remove the 'active' class from all tab buttons.
    buttons.forEach(btn => btn.classList.remove('active'));
    // Add the 'active' class to the clicked button.
    buttonElement.classList.add('active');

    // Find the closest parent 'interactive-card' to scope the tab content search.
    const card = buttonElement.closest('.interactive-card');
    if (card) {
        // Get all tab content elements within that card.
        const tabContents = card.querySelectorAll('.tab-content');
        // Remove the 'active' class from all tab content elements.
        tabContents.forEach(content => content.classList.remove('active'));

        // Get the specific tab content element to show by its ID.
        const contentToShow = document.getElementById(tabIdToShow);
        // If the content element exists, add the 'active' class to make it visible.
        if (contentToShow) {
            contentToShow.classList.add('active');
        }
    }
}


// Recipe 5: Show Stakeholder Info
// Get a reference to the div where stakeholder info will be displayed.
const stakeholderInfo = document.getElementById('stakeholder-info');

// This function updates 'stakeholderInfo' based on the group clicked.
function showStakeholderInfo(group) {
    if (stakeholderInfo) { // Check if element exists
         const roles = {
            'Govt': 'Role: Policy development, regulatory frameworks, public funding, urban planning, and enforcement.',
            'Biz': 'Role: Innovation, new business models, circular product/service delivery, job creation, and investment.',
            'Academia': 'Role: Research, data analysis, technology development, education, and providing expertise.',
            'Civil': 'Role: Advocacy, community engagement, awareness campaigns, monitoring, and co-creation of solutions.'
        };
        // Set the text content of the info div.
        stakeholderInfo.textContent = roles[group] || 'Information for this stakeholder group is currently unavailable.';
        // Make the info div visible.
        stakeholderInfo.classList.remove('hidden');
    }
}


// Recipe 9: Show Challenge Info
// Get a reference to the div where challenge info will be displayed.
const challengeInfo = document.getElementById('challenge-info');

// This function updates 'challengeInfo' based on the challenge clicked.
function showChallengeInfo(challenge) {
    if (challengeInfo) { // Check if element exists
         const mitigations = {
            'Resistance': 'Mitigation: Demonstrate clear benefits, involve stakeholders early, pilot projects, and provide training/support.',
            'Complexity': 'Mitigation: Establish clear governance structures, use multi-stakeholder platforms, phased implementation, and adaptive management.',
            'Knowledge': 'Mitigation: Invest in capacity building programs, foster partnerships with research institutions, utilize existing toolkits, and promote knowledge sharing.',
            'Finance': 'Mitigation: Explore diverse funding sources (public, private, blended), develop strong business cases, innovative financing models (e.g., PPPs), and offer incentives.',
            'Policy': 'Mitigation: Advocate for supportive policy changes, conduct pilot projects to demonstrate feasibility, and allow for flexible interpretation of existing regulations where possible.'
        };
        // Set the text content of the info div.
        challengeInfo.textContent = mitigations[challenge] || 'Mitigation strategies for this challenge are not specified.';
        // Make the info div visible.
        challengeInfo.classList.remove('hidden');
    }
}


// --- Modal Functions ---
// Get references to the modal overlay, its title, and its body content area.
const modal = document.getElementById('recipe-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// This function opens the modal and populates it with content based on 'recipeId'.
function openModal(recipeId) {
    if (modal && modalTitle && modalBody) { // Check if modal elements exist
        const details = recipeDetails[recipeId]; // Get the recipe details from the 'recipeDetails' object.

        if (details) {
            // If details are found, set the modal title and its HTML content.
            modalTitle.textContent = details.title;
            modalBody.innerHTML = details.content; // Use innerHTML to render HTML tags from the content string.
        } else {
            // If no details are found for the recipeId, show an error message.
            modalTitle.textContent = "Error";
            modalBody.innerHTML = "<p>Details not found for this recipe. Please check the recipe ID.</p>";
        }
        // Add the 'active' class to the modal overlay to make it visible (triggers CSS transition).
        modal.classList.add('active');
        // Prevent background page scrolling when the modal is open.
        document.body.style.overflow = 'hidden';
    }
}

// This function closes the modal.
function closeModal() {
    if (modal) { // Check if modal element exists
        // Remove the 'active' class from the modal overlay to hide it (triggers CSS transition).
        modal.classList.remove('active');
        // Restore background page scrolling.
        document.body.style.overflow = '';
    }
}

// Event listener for closing the modal if the user clicks on the overlay (outside the modal content).
if (modal) { // Check if modal element exists
    modal.addEventListener('click', (event) => {
        // If the clicked target is the modal overlay itself (and not its children).
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Event listener for closing the modal if the user presses the 'Escape' key.
document.addEventListener('keydown', (event) => {
    // Check if the pressed key is 'Escape' and if the modal is currently active.
    if (event.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});