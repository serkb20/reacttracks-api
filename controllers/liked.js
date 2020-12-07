
const handleLiked =(req, res, db, bcrypt) =>{
	const {id, useremail, likeCount, songName, artistName, songSource} = req.body;
	db('liked')
    .returning('*')
    .insert({
        track_id: id,
        useremail: useremail,
        likecount: likeCount,
        songname: songName,
        artistname: artistName,
        songsource: songSource
    })
   .then(data => {
        res.json(data[0]);
    })
   .catch(err => res.status(400).json('error'));
}

module.exports = {
   handleLiked: handleLiked
 };