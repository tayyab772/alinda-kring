import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
// Corrected import path for firebase
import { db } from "./firebase";
import { useParams, Link } from "react-router-dom";

// You've imported local images, which is fine for static data,
// but your useEffect fetches artworks from Firestore.
// Ensure these local images are used for the static artist data correctly.
// For fetched artworks, you'll use imageUrl from Firestore.
import cerenImg from "../assets/ceren.jpg";
import joliImg from "../assets/joli.jpg";
import gavinImg from "../assets/gavin.jpg";
import abundance from "../assets/Abundance.jpg";
import sevilDuruImg from "../assets/sevil duru.jpg";
import annaSudbinaImg from "../assets/anna sudbina.jpg";
import akshitaLadImg from "../assets/akshita lad.jpg";
import kateImg from "../assets/kate.jpg";
import anasseImg from "../assets/anasse.png";
import "./ArtistDetail.css";

// Horizontal navbar links
const navLinks = [
    { label: "Biography", key: "bio" },
    { label: "Works", key: "works" },
    { label: "Press", key: "press" },
    { label: "Exhibitions", key: "exhibitions" },
];

const artistData = {
    anasse: {
        name: "ANASSE",
        bio:   `Anasse Drif is a Moroccan-born contemporary artist whose work explores the interplay of culture, memory, and transformation. Rooted in his heritage and shaped by global influences, Drif weaves colour, texture, and symbolic form into a visual language that speaks to resilience, unity, and the human capacity for renewal.

His practice is guided by the belief that art is both a bridge and a catalyst—connecting the inner self with the wider world while inviting reflection and change. Through layered surfaces, tactile textures, and vibrant chromatic harmonies, Drif dissolves the traditional distance between artwork and audience. His pieces encourage not only contemplation but embodied interaction, reminding us that true meaning is realised through lived experience and deliberate action.

Recurring motifs in his work—geometric balance, organic forms, and rhythmic layering—echo the cycles of nature and the infinite process of becoming. Colour is central to his practice, functioning as a symbolic and emotional force that conveys interconnectedness, diversity, and the spectrum of human experience.

Through his art, Anasse Drif illuminates thresholds of transformation, guiding viewers through moments of disruption into spaces of harmony, strength, and renewal. Each work stands as both reflection and invitation: a reminder of our shared humanity and our boundless potential to evolve.`,
        img: anasseImg,
    },
    joli: {
        name: "JOLI",
        bio: "Joli is a modern artist ...",
        img: joliImg,
    },
    gavin: {
        name: "GAVIN",
        bio: `Gavin Johnson is a British-Caribbean artist born in New York, whose work fuses colour, form, and
 texture into a visual language of empowerment. With a rich and diverse heritage Chinese, Carib
 Indian, French, Portuguese, Sicilian, and Black his practice reflects a confluence of interconnected
 identities, embodying the universal human pursuit of transformation and self-realisation.
 Johnson’s art is conceived to inspire. Guided by the conviction that a true teacher awakens us to our
 innate greatness, his textured works invite both contemplation and physical interaction. By
 encouraging the viewer to touch the surface, he dissolves the traditional barrier between artwork
 and audience, creating a visceral dialogue where meaning becomes an embodied experience. This
 tactility also serves as metaphor a reminder that noble intentions are only realised through
 deliberate action.
 Informed by his background as a national-level athlete, Johnson explores the dynamic tension
 between chaos and order, movement and stillness. He embraces the notion, reflected in Newton’s
 third law, that moments of disruption are not merely obstacles but catalysts thresholds through
 which growth and renewal are achieved. His work seeks to guide the viewer through these passages
 of change, towards strength, balance, and a heightened state of becoming.
 Colour in Johnson’s practice is deeply symbolic, expressing the emotional spectrum and the
 interconnectivity of human experience. Circles, recurrent in his abstractions, symbolise love infinite,
 all-encompassing, and harmonising offering geometric balance to the textured chaos of his
 compositions.
 Through his art, Johnson illuminates the ever-changing nature of the self, reminding us that we are
 in a constant state of evolution. Each work stands as both reflection and guide: a touchstone of
 empowerment, growth, and the boundless potential of human possibility. `,
        img: gavinImg,
    },


 sevil: {
        name:"SEVIL",
        bio:    `Sevil Duru is a Turkish contemporary artist whose work weaves together colour, texture, and form into a profound visual language of emotion and transformation. Drawing from her cultural heritage and lived experiences, Duru’s practice reflects an exploration of identity, memory, and the collective human journey. Her art speaks to the universality of resilience, growth, and inner awakening.

Guided by the belief that art is a vessel of healing and empowerment, Duru creates works that invite both introspection and sensory connection. The tactile quality of her textured surfaces dissolves the boundary between artwork and audience, encouraging viewers to engage not only with the eyes but also through touch—transforming contemplation into a lived, embodied experience. This physicality acts as a metaphor, reminding us that profound change emerges through intentional action.

In her practice, Duru explores the interplay between fragility and strength, chaos and harmony. Her works echo the rhythms of nature and the human spirit, suggesting that disruption is not an end but a threshold to renewal. Circles and organic forms recur throughout her compositions, symbolising unity, continuity, and the infinite cycle of becoming.

Colour in Duru’s work is imbued with symbolic resonance, conveying emotional depth and the interconnectedness of human experience. Each piece stands as both mirror and guide—a testament to transformation, balance, and the boundless capacity of the self to evolve.

Through her art, Sevil Duru illuminates the power of renewal, offering viewers a space to connect with their own journey of growth, empowerment, and possibility.`,
        img: sevilDuruImg,
    },
    anna: {
        name: "ANNA",
        bio: `Anna Sudbina is a Russian-born, London-based artist whose practice bridges the realms of memory, imagination, and transformation. Rooted in her diverse cultural background and personal journey, Sudbina’s work fuses colour, movement, and layered texture into a poetic language that reflects both the fragility and resilience of the human spirit.

Her art is guided by the belief that creativity is a form of awakening—a way to connect with the inner self while reaching outward to the collective. Through textured surfaces, luminous colour fields, and fluid abstract forms, Sudbina invites her audience into a dialogue that is both contemplative and visceral. By dissolving the traditional distance between artwork and viewer, her pieces encourage emotional connection and embodied experience, reminding us that art is not only to be seen, but to be felt.

Recurring motifs in her work—circles, organic shapes, and shifting layers—symbolise continuity, harmony, and the ever-evolving nature of identity. Her compositions often explore the tension between chaos and order, light and shadow, silence and movement, mirroring the thresholds of transformation that define human existence.

Colour in Sudbina’s practice is deeply symbolic: it expresses emotion as a universal language and reflects the interconnectivity of shared experience. Each work becomes a meditation on growth, renewal, and the infinite possibilities of becoming.

Through her art, Anna Sudbina offers not only reflection but guidance—a space where viewers may find resonance, empowerment, and the courage to embrace their own unfolding journey.`,
        img: annaSudbinaImg,
    },
    akshita: {
        name: "AKSHITA",
        bio: `Akshita Lad is an internationally recognized artist whose work blends classical inspiration with
 contemporary expression. Born in Mumbai and now based in Dubai, she was awarded the UAE
 Golden Visa by the Ministry of Arts and Culture in recognition of her artistic contributions. Her
 practice, rooted in early exposure to the works of Da Vinci, Monet, Michelangelo, and Rembrandt,
 has evolved into a distinctive style celebrated for depth, elegance, and timeless beauty.
 Lad’s oeuvre spans portraits, landscapes, and abstract expressionism. Her acclaimed Soft
 Impressions series reflects on cycles of nature and life, offering viewers serenity, joy, and a deeper
 sense of connectedness. She champions the transformative power of feminine energy and
 integrates her advocacy for education, sustainability, and animal welfare into her art.`,
        img: akshitaLadImg,
    },
    kate: {
        name: "KATE",
        bio: `Kate Mayer is a contemporary artist whose work merges colour, texture, and form into a powerful exploration of identity, resilience, and transformation. Drawing from both personal experience and collective memory, her practice reflects the interconnectedness of human stories and the continuous journey of becoming.

Guided by the belief that art has the power to awaken and empower, Mayer creates textured works that invite both contemplation and physical interaction. The tactile quality of her surfaces dissolves the barrier between artwork and viewer, encouraging a dialogue that is at once emotional and embodied. Her art becomes not only a reflection but also an invitation—to engage, to feel, and to discover new dimensions of the self.

Recurring motifs in Mayer’s work—circles, organic patterns, and layered abstraction—symbolise cycles of renewal, harmony, and infinite possibility. Colour is central to her practice, serving as an emotional language that communicates across cultures and speaks directly to the human spirit.

Through her art, Kate Mayer illuminates the balance between fragility and strength, chaos and order, silence and movement. Each piece stands as both mirror and guide, offering viewers a space of resonance and renewal, and affirming the boundless potential of human transformation.`,
        img: kateImg,
    },
};

function ArtistDetail() {
  const { artistName } = useParams();      
  const key = artistName.toLowerCase();    
  const artist = artistData[key];         

    const [activeTab, setActiveTab] = useState("bio");
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        async function fetchArtworks() {
            console.log("Querying for artistId:", key);

            const q = query(
                collection(db, "artists", artist.name.toUpperCase(), "artworks"),
                where("artistId", "==", key)
            );

            try {
                const querySnapshot = await getDocs(q);

                const artworksData = querySnapshot.docs.map((doc) => ({
                    id: doc.id, 
                    ...doc.data(),
                }));

                console.log("Fetched artworks:", artworksData);
                setArtworks(artworksData);
            } catch (error) {
                console.error("Error fetching artworks:", error); // Handle error appropriately, e.g., show a message to the user
            }
        } 

        if (artist) {
            fetchArtworks();
        }
    }, [artistName, artist]); 

    if (!artist) return <div style={{ padding: "40px" }}>Artist not found.</div>;

    return (
        <div className="artist-detail-layout">
            {" "}
            <div className="artist-detail-left">
                <h2>{artist.name}</h2>       {" "}
                <nav className="artist-detail-nav">
                    {" "}
                    {navLinks.map((link) => (
                        <button
                            key={link.key}
                            className={activeTab === link.key ? "active" : ""}
                            onClick={() => setActiveTab(link.key)}
                        >
                            {link.label} {" "}
                        </button>
                    ))}
                    {" "}
                </nav>
                {" "}
                <div className="artist-detail-content">
                    {activeTab === "bio" && <p>{artist.bio}</p>} {" "}
                    {activeTab === "works" && (
                        <div className="artist-works-grid">
                            {" "}
                           {(artworks.length === 0 && (!artist.works || artist.works.length === 0)) ? (
  <div>No artworks found for this artist.</div>
) : artworks.length > 0 ? 


(
  artworks.map((artwork) => (
    <Link
      key={artwork.id}
      to={`/artists/${artistName}/artwork/${artwork.id}`}
      className="artist-work-card"
    >
      <img src={artwork.imageUrl} alt={artwork.artworkName} />
      <div className="work-title">{artwork.artworkName}</div>
    </Link>
  ))
) : (
  (artist.works || []).map((artwork) => (
    
    <Link
      key={artwork.id}
      to={`/artists/${artistName.toUpperCase()}/artwork/${artwork.id}`}
      className="artist-work-card"
    >
      <img src={artwork.imageUrl} alt={artwork.artworkName} />
      <div className="work-title">{artwork.artworkName}</div>
    </Link>
  ))
)}

                            {" "}
                        </div>
                    )}
                    {activeTab === "press" && <p>Press info coming soon...</p>}
                    {" "}
                    {activeTab === "exhibitions" && (
                        <p>Exhibitions info coming soon...</p>
                    )}
                    {" "}
                </div>
                {" "}
                <button
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#222",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                    onClick={() => window.open(window.location.href, "_blank")}
                >
                    Share        {" "}
                </button>
                {" "}
            </div>
            {/* Displaying the image on the right only for the 'bio' tab */}
            {" "}
            {activeTab === "bio" && (
                <div className="artist-detail-right">
                    {" "}
                    <img
                        src={artist.img}
                        alt={artist.name}
                        className="artist-detail-img"
                    />
                    {" "}
                </div>
            )}
            {" "}
            {/* The 'works' tab content is handled in the left column now for consistency */}
            {" "}
        </div>
    );
}

export default ArtistDetail;
