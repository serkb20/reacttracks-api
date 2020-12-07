
const handleGetTracks =(req, res, db, bcrypt) =>{
	db.select('*').from('tracks').orderBy('id').then( data => {
       res.json(data);
    });
}

module.exports = {
   handleGetTracks: handleGetTracks
 };