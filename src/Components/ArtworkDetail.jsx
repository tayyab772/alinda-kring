import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useParams, Link } from "react-router-dom";
import "./ArtworkDetail.css";
import wallImg from "../assets/empty-wall.jpg";
import EnquiryForm from "./EnquiryForm"; 

const ArtworkDetail = () => {
  const { artistName, artworkId } = useParams(); 
  const [viewOnWall, setViewOnWall] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [artwork, setArtwork] = useState(null);

 useEffect(() => {
  async function fetchArtwork() {
    try {
      const artistKey = artistName.toUpperCase(); // Firestore me docId uppercase hai
      const docRef = doc(db, "artists", artistKey, "artworks", artworkId); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setArtwork({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.warn("❌ No such artwork found!");
      }
    } catch (error) {
      console.error("Error fetching artwork:", error);
    }
  }
  if (artistName && artworkId) fetchArtwork();
}, [artistName, artworkId]);


  if (!artwork) return <div>Loading...</div>;

  const handleViewOnWallClick = () => setViewOnWall(true);
  const handleCloseWallView = () => setViewOnWall(false);
  const handleEnquireNowClick = () => setShowEnquiryForm(true);
  const handleCloseEnquiryForm = () => setShowEnquiryForm(false);

  return (
    <div className="artwork-detail-container">
      <div className="artwork-detail-left">
        <div className="artist-name">{artwork.artistName}</div>
        <div className="artwork-name">{artwork.artworkName}</div>
        <div className="artwork-details">
          {artwork.dimensions && <p><strong>Dimensions:</strong> {artwork.dimensions}</p>}
          {artwork.description && <p><strong>Description:</strong> {artwork.description}</p>}
        </div>

        <button className="view-on-wall-button" onClick={handleViewOnWallClick}>
          View on Wall
        </button>
        <button className="enquire-now-button" onClick={handleEnquireNowClick}>
          Enquire Now
        </button>

        {!viewOnWall && (
          <Link to={`/artists/${artistName}`} className="close-button">
            X
          </Link>
        )}
      </div>

      {/* <div className="artwork-detail-right">
        <img
          src={artwork.imageUrl}
          alt={artwork.artworkName}
          className="artwork-image"
          
        />
      </div> */}
<div className="artwork-detail-right">
  {/* Ye image ko motion img banado */}
  <motion.img
    layoutId={`artwork-${artwork.id}`}   
    src={artwork.imageUrl}
    alt={artwork.artworkName}
    className="artwork-image"
  />
</div>

{viewOnWall && (
  <AnimatePresence>
    <motion.div
      className="wall-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={wallImg}
        alt="Wall"
        className="wall-overlay-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Same layoutId here => smooth travel */}
      <motion.img
        layoutId={`artwork-${artwork.id}`} 
        src={artwork.imageUrl}
        alt={artwork.artworkName}
        className="artwork-on-wall-overlay"
      />

      <button className="close-wall-button" onClick={handleCloseWallView}>
        X
      </button>
    </motion.div>
  </AnimatePresence>
)}

      {showEnquiryForm && (
        <EnquiryForm
          artworkName={artwork.artworkName}
          onClose={handleCloseEnquiryForm}
        />
      )}
    </div>
  );
};

export default ArtworkDetail;
