
const handleDeleteLiked =(req, res, db, bcrypt)=>{
    const {id, useremail} = req.body;
    db('liked')
    .where({
        track_id: id,
        useremail: useremail
    })
    .del()
    .then(data => {
        db('tracks').where('id', '=' , id)
        .decrement('likecount', 1)
        .returning('likecount')
        .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get count'))
    })
}

module.exports = {
   handleDeleteLiked: handleDeleteLiked
};