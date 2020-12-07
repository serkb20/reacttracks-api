
const handleTracksUpdate =(req, res, db, bcrypt)=>{
	const {id} = req.body;
    db('tracks').where('id', '=' , id)
    .increment('likecount', 1)
    .returning('likecount')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get count'))
}

 module.exports = {
   handleTracksUpdate: handleTracksUpdate
 };