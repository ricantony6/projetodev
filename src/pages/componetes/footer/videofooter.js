import React from "react";
import "./videofooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Videofooter() {
  return (
    <div className="videofooter">
      <div className="videofooter__text">
        <h3>@Ricardo Antonio</h3>
        <p>Descrição do video</p>
        <div className="videofooter__music">
         <MusicNoteIcon className="videofooter__icon" />
         <div className="videofootermusic__text">
         <p>titulo da musica</p>
         </div>
        </div>
      </div>
      <img
        className="videofooter__record"
        alt="Imagem de vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default Videofooter;
