import { createSlice } from "@reduxjs/toolkit";
import twoFrag from "../assets/twoFrag.png";
import ehWater from "../assets/ehwater.png";
import mycrdit from "../assets/myCrdit.png";
import dummyBG from "../assets/dummyBG.png";
import eventPoster2 from "../assets/eventPoster2.png";
import mufasaPoster from "../assets/mufasaPoster.png";
import graphicPoster from "../assets/graphicPoster.jpg";
import researchPoster from "../assets/researchPoster.png";
const sliceOne = createSlice({
  name: "sliceOne",
  initialState: {
    cardObject_technical: [
      {
        name: "MYCRDIT",
        description: "Local debt management and credit score app.",
        link: "https://mycrdit.netlify.app",
        imgsrc: mycrdit,
        content_Heading: `MYCRDIT: Smart Ledger & Behavioral Credit Scoring System for Local Retailers`,
        content_subheading: `MYCRDIT digitizes traditional cash-debt (udhari) tracking for local proprietors by combining simple ledger management with a data-driven credit risk assessment engine.`,
        content_main_text: `Tech Stack:
• Frontend: React.js, Redux Toolkit, Material-UI (MUI), deployed on Netlify.
• Backend: Node.js, Express.js (REST API), MongoDB, Mongoose, deployed on Render.
• Security: JWT authentication via secure HTTP-only cookies, robust CRUD authorization, input validation, and exploitation prevention.

Key Features:
• Auth & Profile: Secure Sign-up, Login, Logout, and full Profile CRUD (including password updates).
• Algorithmic Credit Engine: Dynamically tracks repayment timeframes, frequency, and monetary scale to calculate real-time consumer credit scores, aiding risk evaluation.
• UI/UX: Low-friction, responsive MUI design optimized for fast entry creation and daily retailer use.

Key Tech Stack 
React • Node.js • Express • MongoDB • Material-UI (MUI) • JWT • Algorithmic Logic • REST API`,
      },
      {
        name: "EH WATER",
        description: "Online space to share water problems and solutions.",
        link: "https://eh-water.netlify.app/",
        imgsrc: ehWater,
        content_Heading: `EH WATER is a full-stack  web application  regarding water-related challenges`,
        content_subheading: `        The platform empowers users to post and track localized water problems, while enabling community members 
        and official authorities to provide actionable solutions, share progress updates, and increase transparency in public infrastructure management.`,
        content_main_text: `\n\nKey Features:\n- Issue Reporting & Discussion: Citizens can publish detailed reports on water shortages, contamination, or infrastructure damage, allowing peer-to-peer and 
        community-level discussion.\n- Authority Engagement & Status Tracking: Enables local authorities to jump into existing threads, 
        claim issue resolution, and provide real-time status updates (e.g., Under Review, Work In Progress, Resolved).\n- 
        Secure Authentication: Implemented role-based authorization using JSON Web Tokens (JWT) to secure user sessions and verify genuine postings and official authority responses.\n- 
        Responsive & Intuitive UI: Built with Material UI (MUI) components to ensure an accessible, clean, and mobile-friendly interface for seamless user interaction across devices.\n\n
        Tech Stack & Architecture:\n- Frontend: React, Material UI (MUI)\n- Backend: Node.js, Express.js\n- Database: MongoDB, Mongoose\n- Authentication: JSON Web Tokens (JWT), Bcrypt`,
      },
      {
        name: "TWO FRAGRENCE",
        description: "Full stack working e-com site with JWT Authorization.",
        link: "https://two-fragrence.netlify.app/",
        imgsrc: twoFrag,
        content_Heading: `TWO FRAGRANCE — Full-Stack E-Commerce Platform `,
        content_subheading: `TWO FRAGRANCE 
        is a feature-rich, full-stack fragrance retail web application built on a modern 
        JavaScript stack, pairing a responsive, mobile-first frontend with a production-ready, 
        highly secure Node.js/Express/MongoDB backend RESTful API.`,
        content_main_text: `Tech Stack: React.js, 
        Redux / Context API, React Router, Tailwind CSS | Node.js, Express.js | MongoDB, Mongoose |
        JWT, HTTP-Only Cookies, Bcrypt.js, Helmet, XSS-Clean, Express Mongo Sanitize, Rate Limiter, CORS |
        Compression, Dotenv. | ✨ Key Features — Front-End: Interactive toggle dropdowns &
        dynamic routing (/product/:id, Navbar, Best Sellers, Blog, Product Info, User Dashboard, My Orders, Cart, Wishlist); 
        multi-faceted search, price range slider, category filters, pagination, and "Show More" loader; dynamic product page 
        UI (cart/wishlist state toggles, pincode delivery checker, custom toast notifications, loading fallbacks); 
        real-time cart & wishlist management (auto quantity/price recalculations, dynamic cart badge, wishlist-to-cart cross-feature sync, auto-clearing upon order placement);
        protected frontend routes, responsive auth modals, and account profile/password editor. | 🗜️ Back-End REST API Architecture: Mongoose schemas for products, users, cart, 
        and orders with automated catalog seeding scripts; full CRUD REST endpoints for catalog browsing, wishlist/cart manipulation, and atomic multi-item order placement linked 
        to user IDs; end-to-end auth flow (Register, Login, Logout, Verification) powered by Bcrypt.js hashing & secure HTTP-Only JWT cookies; production-grade API hardening featuring XSS protection, 
        NoSQL injection defense, rate limiting, gzip compression, CORS configuration, and centralized error handling (fully tested via Postman). | 
        📌 Status: Front-End & Back-End Complete; Upcoming: Native Payment Gateway Integration (Stripe/Razorpay) & Lazy-Loading Optimizations.`,
      },
      {
        name: "UNDER DEV",
        content_Heading: `Project under development in cooking process, will soon be uploaded here`,
        content_subheading: `This project is in cooking process, will soon be uploaded here`,
        content_main_text: ``,
        link: "",
        imgsrc: dummyBG,
      },
      {
        name: "UNDER DEV",
        content_Heading: `Project under development in cooking process, will soon be uploaded here`,
        content_subheading: `This project is in cooking process, will soon be uploaded here`,
        content_main_text: ``,
        link: "",
        imgsrc: dummyBG,
      },
    ],
    cardObject_NonTechnical: [
      {
        name: "Consumer demand research",
        description:
          "A Longitudinal Behavioral Framework Mapping Environmental Influences, Mass Emotional Fatigue, and Future Demand Shifts.",
        link: "https://mycrdit.netlify.app",
        imgsrc: researchPoster,
        content_Heading: `RESEARCH & STRATEGIC BEHAVIORAL ANALYSIS
Macro Consumer Psychology & Mass Content Consumption Dynamics`,
        content_subheading: `A Longitudinal Behavioral Framework Mapping Environmental Influences, Mass Emotional Fatigue, and Future Demand Shifts
(2020-2026)
Author: Yashwardhan Singh
Published: Portfolio Strategy & Research Series`,
        content_main_text: `EXECUTIVE SUMMARY OVERVIEW
This study presents a structural psychological framework designed to analyze mass content consumption behaviors, public emotional trajectories, and upcoming socio-economic demands. By combining multi-layered content supply matrices with longitudinal tracking of macro-environmental events (2020 through 2026), this research maps the collective cognitive shift from over-stimulated, high-dopamine consumption toward severe emotional fatigue, desensitization, and an ultimate demand for authenticity, clutter-free depth, and low-friction real-world utility.

1. Content Supply & Consumption Dynamics Matrix (Layer 1)
To establish baseline market conditions, content formats are categorized by supply density, audience following, engagement rates, emotional triggers, and retention value scale. (Note: DOC = Depends on Content).

1. Funny reels comedy structure | FOLLOW %: Very High | CREATOR %: High | ENGAGE %: Very High | EMOTION TRIGGERED: Laugh | EMOTION SCALE: Very High | VALUE TYPE: Laugh | VALUE SCALE: Low | RETENTION SCALE: Low - Mid
2. Trendy Trend reels | FOLLOW %: Mid - Low | CREATOR %: Very High | ENGAGE %: High | EMOTION TRIGGERED: Mix DOC | EMOTION SCALE: High | VALUE TYPE: Mix | VALUE SCALE: Low | RETENTION SCALE: Low - None
3. Pov social takes | FOLLOW %: Mid - High | CREATOR %: Mid - High | ENGAGE %: High | EMOTION TRIGGERED: Mix DOC | EMOTION SCALE: High | VALUE TYPE: Insight / Knowledge | VALUE SCALE: Mid-High | RETENTION SCALE: Mid-High
4. Advice content (love, gym etc) | FOLLOW %: High | CREATOR %: Mid - High | ENGAGE %: High | EMOTION TRIGGERED: Satisfaction, Curiosity, Realisation | EMOTION SCALE: Mid - High | VALUE TYPE: Knowledge | VALUE SCALE: Mid-High | RETENTION SCALE: Mid
5. Text Pov self edits | FOLLOW %: Low | CREATOR %: Very High | ENGAGE %: Mid - Low | EMOTION TRIGGERED: Relax/Cool | EMOTION SCALE: Mid - High | VALUE TYPE: Entertainment | VALUE SCALE: Low | RETENTION SCALE: Low
6. Astro / spiritual/ numero/vastu | FOLLOW %: Very High | CREATOR %: High | ENGAGE %: Very High | EMOTION TRIGGERED: Relax / Curious | EMOTION SCALE: High - Very High | VALUE TYPE: Knowledge | VALUE SCALE: Very High | RETENTION SCALE: Very High
7. News | FOLLOW %: Mid - Low | CREATOR %: Mid | ENGAGE %: High | EMOTION TRIGGERED: Mix DOC | EMOTION SCALE: Mid - High | VALUE TYPE: Knowledge | VALUE SCALE: Mid - High | RETENTION SCALE: Low - Mid
8. Info reels (schemes, laws, rules etc) | FOLLOW %: Very High | CREATOR %: Low - Mid | ENGAGE %: Very High | EMOTION TRIGGERED: Informed Satisfaction | EMOTION SCALE: Mid | VALUE TYPE: Information | VALUE SCALE: Mid - High | RETENTION SCALE: Low - Mid
9. Story videos (history etc) | FOLLOW %: Mid | CREATOR %: Mid | ENGAGE %: High | EMOTION TRIGGERED: Mix DOC | EMOTION SCALE: Mid - High | VALUE TYPE: Information | VALUE SCALE: Mid - High | RETENTION SCALE: Mid
10. Place reviews | FOLLOW %: Very High | CREATOR %: Very High | ENGAGE %: Mid - High | EMOTION TRIGGERED: Satisfaction | EMOTION SCALE: Mid | VALUE TYPE: Information | VALUE SCALE: Mid - High | RETENTION SCALE: Mid - High
11. Fashion reels | FOLLOW %: Mid-High | CREATOR %: Very High | ENGAGE %: Mid-High | EMOTION TRIGGERED: Feel Good | EMOTION SCALE: Mid-Low | VALUE TYPE: Info/Entertain | VALUE SCALE: Mid-Low | RETENTION SCALE: Mid
12. Podcast creators | FOLLOW %: Mid - High | CREATOR %: Mid | ENGAGE %: High - Very High | EMOTION TRIGGERED: Mix DOC | EMOTION SCALE: Mid - High | VALUE TYPE: Mix DOC | VALUE SCALE: Mid-High | RETENTION SCALE: Mid-High

2. Mass Psychological Filtering & Market Saturation (Layer 2)
Predicting the current user state of mind requires filtering the data table through systematic diagnostic questions:
1. Type of content which is over-supplied and with which masses are over-stimulated (High Creators, High Emotion, High Engagement)?
• Funny reels, astrology/spiritual content, reviews content, and advice content.
2. Content which is over-supplied and is less valuable (High Creators, Less Engagement, Less Value Scale)?
• Funny reels, reviews content, trendy content, edits.
3. Over-supplied creators are of which type (High Creators)?
• Funny reels, trendy content reels, edits, reviews, fashion.
4. Under-supplied content with high emotion scale and value engagement (Mid-Low Creators, High Emotion Scale, High Value & Engagement Scale)?
• News, story content, podcast.

3. Macro Environmental Influence Timeline (Layer 3)
Examining global and local macro events across past years to evaluate their cumulative psychological influence on the collective mindset of the masses.

Phase 1: The Pandemic Era (2020–2021)
Initial conditions were characterized by COVID-19 lockdowns, room isolation, and boredom. Excess personal energy was redirected into room-confined activities: acquiring online IT skills, work-from-home setups, heavy content creation, media consumption, and online gaming. The fundamental desire to resume normal life was suppressed for two years.
PSYCHOLOGICAL STATE PARADIGM: Frustration emotion peaked; dopamine reliance peaked; high emotional output regarding post-lockdown possibilities; initial rise in emotional numbness; gradual increase in baseline trust toward digital media content.

Phase 2: Post-Lockdown Emergence & Cultural Waves (2021–2022)
Public effort shifted toward physical movement and real-world travel to regain normalcy. WFH began declining while skill acquisition continued. Suppressed emotions broke into mass content creation. A temporary dip in digital content consumption occurred as real-world activity surged. Following app bans (e.g., PUBG, Chinese applications), short-form formats (Instagram Reels, YouTube Shorts) expanded rapidly. Geopolitical shifts (Ukraine-Russia conflict, G20 summit, UK leadership changes) coincided with domestic political realignments (UP elections) and a heavy surge in Hindutva/Sanatan cultural content.
PSYCHOLOGICAL STATE PARADIGM: Re-ignition of real-world vitality; slight drop in screen-based dopamine; rising reliance on news and content authenticity; explosion of spiritual/bhakti narratives; strong resonance with emotionally charged narrative media and web series.

Phase 3: Economic Tightening & AI Disruptions (2023–2025)
Skill development demand sustained, WFH declined further, and corporate layoffs swept from tech giants to smaller enterprises. Global conflict, economic sanctions, supply chain shocks, and rising interest rates forced mass corporate down-scaling of cheap COVID-era hiring. Widespread job insecurity sparked anxiety, driving massive promotion of online courses and fear-driven content creation. Consumers turned heavily to content for stress relief. Political marketing drove high emotional investment into spiritual/tantra/mantra content. Concurrently, revolutionary short-form AI media surged, while dating advice content pivoted toward male-vs-female dynamics amidst rising fitness awareness.
PSYCHOLOGICAL STATE PARADIGM: Fear-driven stress avoidance; heightened spiritualistic/escapist behavior; increased general aggression; accelerating emotional numbness; peak religious emotionality; high dopamine dependence; elevated focus on fitness paired with polarized gender discourse.

Phase 4: Algorithmic Over-Saturation & Satire Shift (2024–2025)
Religious friction and high reliance on platform content (Instagram, Facebook, X) persisted alongside fitness and startup/AI hype cycles. Central political elections concluded. Key public events and sudden deaths sparked resentment and aggression. Job market competition peaked with an influx of skilled freshers facing stagnant hiring, worsening anxiety. While traditional spiritual content began losing its pure "bhakti" tone, standup comedy content spiked as an antidote to stress. Mobile gaming engagement dropped heavily, while travel and fashion content regained traction.
PSYCHOLOGICAL STATE PARADIGM: High internal motivation for growth paired with acute career anxiety; reliance on humor and comedy for stress mitigation; high dopamine consumption combined with initial decline in influencer trust; emotional numbness reached historic highs; elevated gender friction; reliance on astrology and remedy content for pragmatic coping.

Phase 5: Exhaustion, Institutional Skepticism & Numbness (2025–Sept 2026)
Emotional numbness reaches critical peak. Content supply is saturated while political propaganda loses efficacy. Global conflict, failed policy schemes, paper leaks, and unfulfilled AI profit projections erode institutional trust. Ideological fatigue sets in; public engagement on mainstream platforms drops as boredom increases. Temple visits and health/fitness spending peak as individuals seek physical grounding. Authority figures, actors, and creators lose charisma. Mass accessibility renders status symbols non-exclusive. Bhakti trends decline, gender conflict tires the audience, and social dating advice collapses. Real-world events (e.g., soldier casualties, fast-fading media cycles) fail to sustain long-term public emotional investment.
PSYCHOLOGICAL STATE PARADIGM: The public requires extreme emotional triggers to act (e.g., initial NEET paper leak protests), but emotional reserves deplete rapidly, preventing sustained secondary mobilization. Emotional intake capacity is diminished while outgive capacity rises; unwanted isolation increases alongside a strong shift toward a "no-nonsense" mindset.

Observed Mental State Characteristics & Behavioral Dynamics:
• High-Worth Exhibition Syndrome: Elevated drive to artificially inflate personal value to offset internal inadequacy.
• Fear of Unworthiness: Acute anxiety over remaining average, common, or unacknowledged.
• Sensory Self-Awareness: Heightened consciousness of personal boundaries and immediate surroundings.
• Betrayal & Disappointment: Deep-seated feelings of betrayal by institutions, platforms, and relationships.
• Affection Deprivation: Severe underlying emotional isolation coupled with high systemic anger.

THE CURRENT SELF-PERPETUATING CYCLE:
Cheap Dopamine Addiction → Reduced Real-World Effort → Reduced Tangible Achievements → Increased Frustration → Heightened Fear of Being Average → Escalated High-Worth Show-Off (Self-Defense) → Deeper Affection Deprivation → Acute Feelings of Betrayal & Disappointment.

4. Collective Behavioral Predictions (Point 1)
Based on pattern recognition of past emotional exhaustion, the collective mass behavior is projected to shift across the following trajectories:
1. Friction & Aggression Outbursts: Elevated rates of sudden localized friction, protest action, and aggressive interpersonal conflicts.
2. Sprinting Career Efforts: High-intensity, non-continuous burst efforts applied toward career stabilization, interrupted by frequent fatigue breaks.
3. Shift Toward Humility: Long-term systemic volatility and failure will cultivate genuine humility and groundedness, with masses demanding reciprocal authenticity from others.
4. Work-Induced Isolation: Social life will contract as individuals isolate themselves to focus on professional stability and survival.
5. Preference for Deep Micro-Bonds: Extroverted public social interaction will decline; selection will heavily favor small, deep, highly meaningful connections.
6. Selective Dopamine Pruning: Active reduction in cheap dopamine reliance and low-value content consumption, replacing screen time with intentional real-life engagement.
7. Influencer & Social Platform Decay: Gradual decline in the cultural authority of mainstream social media platforms and surface-level influencers.
8. Demand for Authentic Romance: Rejection of casual hookup culture and performative dating advice in favor of high-integrity, authentic long-term partnerships.
9. Rise of Exclusivity: Rejection of mass-accessible, ubiquitous trends; high value assigned to exclusive, high-barrier experiences and products.
10. Clutter-Free Private Social Spaces: Migration away from cluttered ad-driven feeds toward private, uncluttered, high-depth social environments.
11. Escalated Personal Responsibility: Accelerated maturity and self-reliance among major segments of the population.
12. Preoccupation with Physical Health: High vigilance and structured investment regarding personal physical fitness, health, and longevity.
13. Tangible Skill Acquisition & Local Work: Growth in non-tech practical skills, local economic production, and specialized recruitment demanding combined technical and practical expertise.
14. Pivot Toward Agriculture & Land (Micro-Trend): A distinct segment of burnt-out professionals will consciously pivot toward farming, agritech, and localized land self-sufficiency.

5. The 6 Core Market Demands & Strategic Opportunities (Point 2)
Translating behavioral diagnostics into actionable, low-friction strategic opportunities for creators, builders, and organizational leaders.

Demand 1: Worthy-Value Deficit Mitigation
PSYCHOLOGICAL CONTEXT & EXPLANATION: Systemic economic instability, layoffs, and artificial social media standards have produced deep feelings of personal unworthiness. To cope, individuals exhibit superficial status flexing, internet FOMO, and ego walls after minor achievements. The lack of real grounding leaves them lacking true satisfaction.
STRATEGIC MARKET OPPORTUNITY:
• Deliver authentic feelings of worth, uniqueness, and value through messaging, products, and services.
• Build low-friction pathways allowing individuals to contribute tangible, real-world value to society.
• Provide practical skill-building frameworks focused on actionable, real-world execution.

Demand 2: Authentic "No-Nonsense" Mass Alignment
PSYCHOLOGICAL CONTEXT & EXPLANATION: Audiences are hyper-aware of their internal challenges and exhausted by polished corporate PR or performative self-help. There is an active vacuum for empathetic, blunt leaders who acknowledge collective friction without shaming the audience.
STRATEGIC MARKET OPPORTUNITY:
• Establish leadership, content, or problem-solving voices rooted in absolute transparency and zero-fluff reality.
• Act as an authentic guide who understands systemic pain points and offers straightforward solutions.

Demand 3: Deep & Exclusive Social Dynamics
PSYCHOLOGICAL CONTEXT & EXPLANATION: Continuous news of betrayal across business, politics, and relationships has created severe affection deprivation and trust deficits. Users crave environments completely free from algorithmic clutter, surface-level metrics, and performative fakeness.
STRATEGIC MARKET OPPORTUNITY:
• Build micro-platforms, private digital spaces, or editorial media anchored in exclusivity, structural simplicity, and high thematic depth.
• Cultivate high-trust communities where quality of interaction replaces public engagement vanity metrics.

Demand 4: Real Connections & Constructive Relationship Dynamics
PSYCHOLOGICAL CONTEXT & EXPLANATION: Polarized gender discourse and superficial dating applications have left large demographics cautious of betrayal yet desperate for true partnership. Despite unresolved past baggage, the fundamental need for genuine human connection remains constant.
STRATEGIC MARKET OPPORTUNITY:
• Create low-pressure services, content, or social formats that facilitate natural, high-integrity relationship building.
• Crucial Guardrail: Never force mandatory coupling; honor the validity of self-sufficiency while supporting healthy connection.

Demand 5: Sustainable Business & Employment Ecosystems
PSYCHOLOGICAL CONTEXT & EXPLANATION: High startup failure rates, widespread hiring scams, and intense job market competition have severely demotivated the workforce. Prolonged high-dopamine consumption has reduced the emotional stamina (EQ/ES) required to withstand high-risk ventures or chaotic work conditions.
STRATEGIC MARKET OPPORTUNITY:
• Provide transparent job opportunities, co-dependent self-sustaining work ecosystems, and low-risk, steady-yield business models.
• Reject get-rich-quick schemes in favor of structured, clear, and sustainable growth plans.

Demand 6: Protective Problem-Solving Leadership
PSYCHOLOGICAL CONTEXT & EXPLANATION: Mass frustration, isolation, and institutional failure create a strong psychological need for a grounded, protective figure—a blunt, honest, parent-like guide who instills real hope and security without performing for clout.
STRATEGIC MARKET OPPORTUNITY:
• Position brands, platform founders, or public figures as straightforward, high-integrity leaders operating "for the people, of the people, and by the people."
• Focus on delivering concrete relief, practical clarity, and emotional security.`,
      },
      {
        name: "Submarine music festival",
        description: "City's first open air music festival.",
        explanation: `Submarine Music Festival — Lead Organizer

The City’s First Open-Air Music Festival

At 17, I conceptualized, planned, and executed the city’s inaugural open-air music festival from the ground up. This project marked my entry into large-scale logistics, crowd coordination, vendor operations, and live production management.

End-to-End Event Operations: Managed stage design, audio engineering setups, artist lineups, and venue permits for a ground-up outdoor event.

Team & Vendor Leadership: Directed cross-functional teams across staging, security, ticketing, and marketing to ensure real-time venue safety and smooth execution.

Brand & Audience Engagement: Drove localized promotional campaigns, sponsorship outreach, and ticket distribution strategies that successfully launched a new event brand in the city.`,
        link: "https://www.facebook.com/photo.php?fbid=114562575789473&set=pb.100017071938090.-2207520000&type=3",
        imgsrc: eventPoster2,
      },
      {
        name: "Mufasa cloud kitchen",
        description:
          "City's first cloud kitchen base food home delivery startup.",
        link: "https://www.facebook.com/photo.php?fbid=318544978724564&set=pb.100017071938090.-2207520000&type=3",
        imgsrc: mufasaPoster,
        content_Heading: `Mufasa Cloud Kitchen — Founder & Operator`,
        content_subheading: `Pioneered the city’s first cloud kitchen model, establishing a direct-to-consumer home delivery startup specializing in fast-food chicken. `,
        content_main_text: ` Built and scaled an agile operational system from scratch, leveraging lean digital communication channels to drive local orders. Direct-to-Consumer Logistics: Handled end-to-end supply chain, food prep consistency, packaging, and last-mile delivery operations to ensure fast order fulfillment.

Lean Digital Ordering System: Designed a friction-free ordering workflow using WhatsApp and direct phone calls, bypassing heavy third-party platform fees while maintaining a direct customer relationship.

Brand Strategy & Customer Retention: Developed brand identity, localized promotional offers, and a loyal customer base around quick-service chicken fast food.`,
      },
      {
        name: "Elmont graphics",
        description: "Freelance graphic designing work.",
        explanation:
          "Freelancing work and social media page posting all the designs. Designs were made using mix of Photoshop, illustrator and canva.",
        link: "https://www.instagram.com/elmont___/",
        imgsrc: graphicPoster,
        content_Heading: `Freelance graphic designing work`,
        content_subheading: `Freelancing work and social media page posting all the designs.`,
        content_main_text: `Designs were made using mix of Photoshop, illustrator and canva."`,
      },
      {
        name: "UNDER DEV",
        description: "Project under development, link will be here soon.",
        explanation: "",
        link: "",
        imgsrc: dummyBG,
      },
    ],
    activeSelection: null,
    modalDialog_Open: false,
    viewedProject: {},
  },
  reducers: {
    toggleSelection(state, action) {
      state.activeSelection =
        state.activeSelection === action.payload ? null : action.payload;
    },
    toggle_ModalDialog(state, action) {
      state.modalDialog_Open = !state.modalDialog_Open;
      state.viewedProject = action.payload;
      console.log(state.viewedProject, action.payload);
    },
  },
});

export const sliceActions = sliceOne.actions;
export default sliceOne;
