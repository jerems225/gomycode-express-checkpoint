async function checkTime(req, res, next)
{
    let date = new Date()
    const day = date.getDay();
    const hour =  date.getHours();
    if((day === 0 ||  day === 6) || (hour < 9 || hour >= 17))
    {
        res.render('closed', { title: 'This website is closed' })
    }
    else{ next() }
}

module.exports = {
    checkTime : checkTime
}